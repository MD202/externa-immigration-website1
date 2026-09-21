import { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';

// Shared registration + paid checkout logic used by both the healthcare and
// entrepreneur register forms. Captures a Lead (First/Last name, Pathway,
// Owner, Status, Session Date, Notes), logs it to the shared sheet, then
// redirects to a Stripe checkout session for the pathway fee.
const SESSION_DATE = '2026-10-03 19:00 ET';

export function usePathwayRegistration({ pathway, returnPath, sourceLabel, situation, title }) {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '' });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('payment') === 'success') setDone(true);
  }, []);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async () => {
    setError('');
    if (!form.first_name.trim()) return setError('Please enter your first name.');
    if (!form.last_name.trim()) return setError('Please enter your last name.');
    if (!form.email.trim()) return setError('Please enter your email.');
    if (!emailValid) return setError('Please enter a valid email address.');
    setSaving(true);
    try {
      const fullName = `${form.first_name} ${form.last_name}`.trim();
      const rec = await base44.entities.Lead.create({
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
        pathway: sourceLabel,
        email: form.email.trim(),
        phone: form.phone.trim(),
        owner: 'Unassigned',
        status: 'new',
        session_date: SESSION_DATE,
        notes: title,
      });
      try {
        await base44.functions.invoke('appendLeadToSheet', {
          dateScheduled: SESSION_DATE,
          name: fullName,
          phone: form.phone.trim(),
          email: form.email.trim(),
          source: sourceLabel,
          serviceNeeded: situation,
          appointment: 'Registration',
          paid: 'Pending',
          createdDate: rec.created_date,
          comments: `${title} registration`,
          deadline: '',
        });
      } catch (sheetErr) {
        console.error('Sheet log failed:', sheetErr);
      }
      if (window.self !== window.top) {
        alert('Checkout works only from the published app. Please open the app in a new tab to complete payment.');
        setSaving(false);
        return;
      }
      const res = await base44.functions.invoke('createCheckoutSession', {
        service_tier: pathway,
        full_name: fullName,
        email: form.email.trim(),
        return_path: returnPath,
      });
      window.location.href = res.data.url;
    } catch (e) {
      console.error('Register failed:', e);
      setError('Something went wrong. Please try again.');
      setSaving(false);
    }
  };

  return { form, set, saving, error, done, submit };
}