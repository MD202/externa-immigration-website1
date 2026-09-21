import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import StrategySession from '@/pages/StrategySession';
import Fees from '@/pages/Fees';
import ServiceDetail from '@/pages/ServiceDetail';
import Eligibility from '@/pages/Eligibility';
import RefusedApplications from '@/pages/RefusedApplications';
import AboutQuestions from '@/pages/AboutQuestions';
import Contact from '@/pages/Contact';
import HumanitarianCompassionate from '@/pages/HumanitarianCompassionate';
import FamilySponsorship from '@/pages/FamilySponsorship';
import HealthcareProfessionals from '@/pages/HealthcareProfessionals';
import Entrepreneurs from '@/pages/Entrepreneurs';
import OtherServices from '@/pages/OtherServices';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import RefundPolicy from '@/pages/RefundPolicy';
import { LanguageProvider } from '@/lib/LanguageContext';
import WhatsAppWidget from '@/components/site/WhatsAppWidget';
import HealthcarePathway from '@/pages/HealthcarePathway';
import EntrepreneurPathway from '@/pages/EntrepreneurPathway';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/strategy-session" element={<StrategySession />} />
      <Route path="/fees" element={<Fees />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/refused-applications" element={<RefusedApplications />} />
      <Route path="/about" element={<AboutQuestions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/humanitarian-compassionate" element={<HumanitarianCompassionate />} />
      <Route path="/family-sponsorship" element={<FamilySponsorship />} />
      <Route path="/healthcare-professionals" element={<HealthcareProfessionals />} />
      <Route path="/entrepreneurs" element={<Entrepreneurs />} />
      <Route path="/other-services" element={<OtherServices />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/eligibility" element={<Eligibility />} />
      <Route path="/healthcare-pathway" element={<HealthcarePathway />} />
      <Route path="/entrepreneur-pathway" element={<EntrepreneurPathway />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
      <WhatsAppWidget />
    </>
  );
};


function App() {

  return (
    <AuthProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <ScrollToTop />
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </LanguageProvider>
    </AuthProvider>
  )
}

export default App