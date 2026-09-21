import { secrets } from "base44:runtime";

const PRICE_MAP = {
  quick_question: "price_1UAzCaEYsNYi8rFrXUc9nG09",
  full_consultation: "price_1UAzCaEYsNYi8rFrNSSjZ3DP",
  application_review: "price_1UAzCbEYsNYi8rFrsusgPdum",
  healthcare_pathway: "price_1UHwjDEYsNYi8rFrA74hJrge",
  entrepreneur_pathway: "price_1UHwjDEYsNYi8rFrvNJ9HJ5M",
};

const APP_ORIGIN = "https://north-star-counsel.base44.app";

export default async function(req) {
  try {
    const body = await req.json();
    const { service_tier, full_name, email, preferred_date, preferred_time, return_path } = body;
    const priceId = PRICE_MAP[service_tier];
    if (!priceId) return Response.json({ error: "Invalid service tier" }, { status: 400 });
    const returnPath = return_path || "/strategy-session";

    const stripeKey = secrets.get("STRIPE_SECRET_KEY");
    const appId = secrets.get("BASE44_APP_ID");

    const params = new URLSearchParams();
    params.append("mode", "payment");
    params.append("line_items[0][price]", priceId);
    params.append("line_items[0][quantity]", "1");
    params.append("customer_email", email || "");
    params.append("success_url", `${APP_ORIGIN}${returnPath}?payment=success&session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${APP_ORIGIN}${returnPath}?payment=cancel`);
    params.append("metadata[base44_app_id]", appId || "");
    params.append("metadata[full_name]", full_name || "");
    params.append("metadata[service_tier]", service_tier || "");
    params.append("metadata[preferred_date]", preferred_date || "");
    params.append("metadata[preferred_time]", preferred_time || "");

    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${stripeKey}`,
        "Stripe-Version": "2025-10-29.clover",
        "Content-Type": "application/x-www-form-urlencoded",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: params.toString(),
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Stripe checkout error:", data.error?.message);
      return Response.json({ error: data.error?.message || "Stripe error" }, { status: 500 });
    }
    return Response.json({ url: data.url });
  } catch (error) {
    console.error("createCheckoutSession error:", error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}