import { useEffect, useState, useRef } from "react";
import { m as motion } from "framer-motion";
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
      // Video finished playing once - stop and show play button
      setIsPlaying(false);
      setShowPlayButton(true);
      video.pause();
      video.currentTime = 0; // Reset to beginning
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

  // OfferPopup is fully disabled for performance
  return null;
};
