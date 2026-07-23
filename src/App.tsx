import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Utility = lazy(() => import("./pages/Utility"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Career"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WebDevelopment = lazy(() => import("./pages/services/web-development"));
const VRARDevelopment = lazy(() => import("./pages/services/vr-ar-development"));
const ARVRMarketing = lazy(() => import("./pages/services/ar-vr-marketing"));
const ThreeDDevelopment = lazy(() => import("./pages/services/3d-development"));
const VideoEditing = lazy(() => import("./pages/services/video-editing"));
const DesignServices = lazy(() => import("./pages/services/design-services"));
const DigitalMarketing = lazy(() => import("./pages/services/digital-marketing"));
const MobileApps = lazy(() => import("./pages/services/mobile-apps"));
const UIUXDesign = lazy(() => import("./pages/services/ui-ux-design"));
const AISolutions = lazy(() => import("./pages/services/ai-solutions"));
import LenisSmoothScroll from "./components/LenisSmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import { useGoogleAnalytics } from "./hooks/use-analytics";
import { BookingProvider } from "./contexts/BookingContext";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';
const BookPage = lazy(() => import("./pages/book"));
const DeonMenezes = lazy(() => import("./pages/deonmenezes"));
const Linktree = lazy(() => import("./pages/Linktree"));
const Resources = lazy(() => import("./pages/Resources"));
const PhotoSearchPrompts = lazy(() => import("./pages/PhotoSearchPrompts"));
const HumanizerPrompts = lazy(() => import("./pages/HumanizerPrompts"));
const BuildYourOwn = lazy(() => import("./pages/BuildYourOwn"));
const SecurityResources = lazy(() => import("./pages/SecurityResources"));
const ResourceBranch = lazy(() => import("./pages/ResourceBranch"));
const Bugbounty = lazy(() => import("./pages/Bugbounty"));
const Blog = lazy(() => import("./pages/Blog"));
const Gpt55Party = lazy(() => import("./pages/blog/Gpt55Party"));

const queryClient = new QueryClient();

// Component to handle Google Analytics initialization
const AppWithAnalytics = () => {
  useGoogleAnalytics();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
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
        <Route path="/resources/reverse-image" element={<PhotoSearchPrompts />} />
        <Route path="/resources/humanizer" element={<HumanizerPrompts />} />
        <Route path="/resources/build-your-own" element={<BuildYourOwn />} />
        <Route path="/resources/security" element={<SecurityResources />} />
        <Route path="/reseources" element={<PhotoSearchPrompts />} />
        <Route path="/resources/:branchSlug" element={<ResourceBranch />} />
        <Route path="/bugbounty" element={<Bugbounty />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/gpt-5-5-party" element={<Gpt55Party />} />
        
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
      </Suspense>
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
  <LazyMotion features={domAnimation}>
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
  </LazyMotion>
);

export default App;
