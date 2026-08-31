import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import AppealsSection from "@/components/site/AppealsSection";
import ServicesGrid from "@/components/site/ServicesGrid";
import ApproachSection from "@/components/site/ApproachSection";
import TrustSection from "@/components/site/TrustSection";
import BusinessFeature from "@/components/site/BusinessFeature";
import Footer from "@/components/site/Footer";
import NorthStarCursor from "@/components/site/NorthStarCursor";

export default function Home() {
  return <main className="overflow-hidden"><NorthStarCursor /><Header /><Hero /><AppealsSection /><ServicesGrid /><ApproachSection /><TrustSection /><BusinessFeature /><Footer /></main>;
}