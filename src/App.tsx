import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Utility from "./pages/Utility";
import About from "./pages/About";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/web-development";
import VRARDevelopment from "./pages/services/vr-ar-development";
import ARVRMarketing from "./pages/services/ar-vr-marketing";
import ThreeDDevelopment from "./pages/services/3d-development";
import VideoEditing from "./pages/services/video-editing";
import DesignServices from "./pages/services/design-services";
import DigitalMarketing from "./pages/services/digital-marketing";
import MobileApps from "./pages/services/mobile-apps";
import UIUXDesign from "./pages/services/ui-ux-design";
import AISolutions from "./pages/services/ai-solutions";
import LenisSmoothScroll from "./components/LenisSmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import { useGoogleAnalytics } from "./hooks/use-analytics";
import { BookingProvider } from "./contexts/BookingContext";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';
import BookPage from "./pages/book";
import DeonMenezes from "./pages/deonmenezes";
import Linktree from "./pages/Linktree";
import Resources from "./pages/Resources";
import ResourceBranch from "./pages/ResourceBranch";

const queryClient = new QueryClient();

// Component to handle Google Analytics initialization
const AppWithAnalytics = () => {
  useGoogleAnalytics();
  
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/deonmenezes" element={<DeonMenezes />} />
        <Route path="/linktree" element={<Linktree />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:branchSlug" element={<ResourceBranch />} />
        
        {/* Service Routes */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/vr-ar-development" element={<VRARDevelopment />} />
        <Route path="/services/ar-vr-marketing" element={<ARVRMarketing />} />
        <Route path="/services/3d-development" element={<ThreeDDevelopment />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/design-services" element={<DesignServices />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/ai-solutions" element={<AISolutions />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <AppWithAnalytics />
      <SpeedInsights></SpeedInsights>
      <Analytics />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Global Lenis smooth scroll */}
      <LenisSmoothScroll />
      <BookingProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </BookingProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
