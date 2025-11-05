import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Play } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

interface OfferPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoSrc?: string; // Video source path
}

export const OfferPopup = ({ open, onOpenChange, videoSrc = "/videos/offer-demo.mp4" }: OfferPopupProps) => {
  const { openBookingDialog } = useBooking();
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const handleBookDemo = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Website Development Offer',
        content_category: 'Offer Popup'
      });
    }
    onOpenChange(false);
    openBookingDialog();
  };

  const handleClaimOffer = () => {
    // Track Meta Pixel event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Website Development $20 Offer',
        content_category: 'Offer Popup - Claim'
      });
    }
    onOpenChange(false);
    openBookingDialog();
  };

  const handlePlayVideo = (isMobile = false) => {
    const videoRef = isMobile ? mobileVideoRef : desktopVideoRef;
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch((error) => {
        console.error('Error playing video:', error);
        setShowPlayButton(true);
      });
    }
  };

  const setupVideoListeners = (video: HTMLVideoElement | null) => {
    if (!video) return () => {};

    const handlePlay = () => {
      setIsPlaying(true);
      setShowPlayButton(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  };

  useEffect(() => {
    if (open) {
      // Check if video can autoplay - try desktop first, then mobile
      const checkAutoplay = async () => {
        const video = desktopVideoRef.current || mobileVideoRef.current;
        if (!video) return;

        try {
          await video.play();
          setIsPlaying(true);
          setShowPlayButton(false);
        } catch (error) {
          // Autoplay was prevented, show play button
          setShowPlayButton(true);
          setIsPlaying(false);
        }
      };
      
      // Small delay to ensure video is loaded
      const timer = setTimeout(() => {
        checkAutoplay();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    const cleanup1 = setupVideoListeners(desktopVideoRef.current);
    const cleanup2 = setupVideoListeners(mobileVideoRef.current);

    return () => {
      cleanup1();
      cleanup2();
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-6xl p-0 bg-transparent border-0 overflow-hidden">
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-vision-dark via-vision-black-light to-vision-dark border border-vision-gold/30">
          {/* Animated Background Glow - Gold Theme */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-vision-gold/20 via-primary/20 to-vision-gold/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-vision-gold/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-50 rounded-full bg-vision-gold/20 hover:bg-vision-gold/30 backdrop-blur-sm p-2 transition-colors border border-vision-gold/30"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-vision-gold" />
          </button>

          <div className="relative z-10">
            {/* Desktop Layout - 3 columns */}
            <div className="hidden lg:grid grid-cols-5 gap-0">
              {/* Left Section - CTA Content */}
              <div className="col-span-2 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-vision-dark/80 to-vision-black-light/80 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Shape your digital journey today
                  </h2>
                  <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed max-w-lg">
                    Hundreds of businesses have already made the move, now it is your turn. What are you waiting for?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={handleBookDemo}
                      className="bg-vision-gold text-vision-black hover:bg-vision-gold-light px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-vision-gold/50"
                    >
                      Book demo call
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Middle Section - Vertical Video (Reel Aspect Ratio) */}
              <div className="col-span-1 flex items-center justify-center p-4 lg:p-6 bg-gradient-to-b from-vision-black/50 to-vision-dark/50">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-vision-gold/40 shadow-2xl shadow-vision-gold/20"
                >
                  <video
                    ref={desktopVideoRef}
                    className="w-full h-full object-cover"
                    src={videoSrc}
                    autoPlay
                    loop
                    playsInline
                    onError={(e) => {
                      console.warn('Video not found, using placeholder');
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Video Overlay Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vision-black/20 via-transparent to-vision-black/20 pointer-events-none"></div>
                  
                  {/* Play Button Overlay */}
                  {showPlayButton && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => handlePlayVideo(false)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-colors"
                      aria-label="Play video"
                    >
                      <div className="w-20 h-20 rounded-full bg-vision-gold/90 hover:bg-vision-gold flex items-center justify-center shadow-2xl transition-all hover:scale-110">
                        <Play className="h-10 w-10 text-vision-black ml-1" fill="currentColor" />
                      </div>
                    </motion.button>
                  )}
                </motion.div>
              </div>

              {/* Right Section - Offer */}
              <div className="col-span-2 p-8 lg:p-12 bg-gradient-to-br from-vision-black-light/80 to-vision-dark/80 backdrop-blur-sm border-l border-vision-gold/20">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-full flex flex-col justify-center space-y-6"
                >
                  {/* Offer Badge/Icon */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vision-gold to-vision-gold-light flex items-center justify-center shadow-lg border border-vision-gold/50">
                      <span className="text-2xl font-bold text-vision-black">$</span>
                    </div>
                    <span className="text-vision-gold font-semibold text-lg">Limited Offer</span>
                  </div>

                  {/* Offer Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      Website development in{" "}
                      <span className="text-vision-gold">$20</span>
                    </h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      If not completed, money will be returned.
                    </p>
                    <p className="text-sm text-foreground/70 italic">
                      *conditions apply
                    </p>
                  </div>

                  {/* CTA Button for Offer */}
                  <Button
                    onClick={handleClaimOffer}
                    className="w-full bg-gradient-to-r from-vision-gold to-vision-gold-light text-vision-black hover:from-vision-gold-light hover:to-vision-gold px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-vision-gold/50"
                  >
                    Claim This Offer
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Mobile Layout - Video and Claim Button Only */}
            <div className="lg:hidden flex flex-col items-center p-6 space-y-6">
              {/* Video Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-vision-gold/40 shadow-2xl shadow-vision-gold/20"
              >
                <video
                  ref={mobileVideoRef}
                  className="w-full h-full object-cover"
                  src={videoSrc}
                  autoPlay
                  loop
                  playsInline
                  onError={(e) => {
                    console.warn('Video not found, using placeholder');
                  }}
                >
                  Your browser does not support the video tag.
                </video>
                {/* Video Overlay Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-vision-black/20 via-transparent to-vision-black/20 pointer-events-none"></div>
                
                {/* Play Button Overlay */}
                {showPlayButton && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => handlePlayVideo(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-colors"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 rounded-full bg-vision-gold/90 hover:bg-vision-gold flex items-center justify-center shadow-2xl transition-all hover:scale-110">
                      <Play className="h-10 w-10 text-vision-black ml-1" fill="currentColor" />
                    </div>
                  </motion.button>
                )}
              </motion.div>

              {/* Claim Offer Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-[280px]"
              >
                <Button
                  onClick={handleClaimOffer}
                  className="w-full bg-gradient-to-r from-vision-gold to-vision-gold-light text-vision-black hover:from-vision-gold-light hover:to-vision-gold px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-vision-gold/50"
                >
                  Claim This Offer
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

