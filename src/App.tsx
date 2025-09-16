import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
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
import LenisSmoothScroll from "./components/LenisSmoothScroll";
import { AIChatbot } from "./components/custom/AIChatbot";
import { WhatsAppBooking } from "./components/custom/WhatsAppBooking";
import { useGoogleAnalytics } from "./hooks/use-analytics";

const queryClient = new QueryClient();

// Component to handle Google Analytics initialization
const AppWithAnalytics = () => {
  useGoogleAnalytics();
  
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
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
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Global Lenis smooth scroll */}
      <LenisSmoothScroll />
      <BrowserRouter>
        <AppWithAnalytics />
        
        {/* Global components available on all pages */}
        <AIChatbot />
        <WhatsAppBooking />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;