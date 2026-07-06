import { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';

// Custom SVG Icons for premium look
const SparkleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" fill="currentColor"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneCallIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12787 3.62476 2.2165 3.36162C2.30513 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CelebrationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.8 11.3L2 22L12.7 18.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 3V5.5M2 4.5H6M20 5V7.5M18 6.5H22M12 3V5M10.5 4H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5.8 11.3C5.8 11.3 7.5 7.5 11 7.5C14.5 7.5 14 11 17 11C20 11 20.5 8 20.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12.7 18.2C12.7 18.2 16.5 16.5 16.5 13C16.5 9.5 13 10 13 7C13 4 16 3.5 16 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const GoogleAdsCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate time until January 23, 2026
  useEffect(() => {
    const targetDate = new Date('2026-01-23T23:59:59');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show CTA after 3 seconds or 25% scroll
  useEffect(() => {
    const dismissed = sessionStorage.getItem('ctaDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 25 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('ctaDismissed', 'true');
  };

  const handleCTAClick = () => {
    // Track conversion for Google Ads
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
      });
    }

    // Track with dataLayer for GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'cta_click',
        'cta_location': 'new_year_sale_banner',
        'cta_text': 'Book Free Strategy Call'
      });
    }

    // Redirect to WhatsApp with automated message
    const phoneNumber = '971566433640';
    const message = encodeURIComponent(
      `Hi Virelity! 👋\n\nI'm interested in the New Year 2026 offer - Free AI Strategy Session  $0.\n\nI'd like to book a free consultation call to discuss how AI can help transform my business.\n\nLooking forward to hearing from you!`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center p-3 md:p-4 bg-black/40 backdrop-blur-sm"
        >
          {/* Desktop Version - Apple-grade glassmorphism design */}
          <div className="hidden md:block">
            <div className="relative max-w-5xl mx-auto">
              {/* Main container with glassmorphism */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a1a2e]/95 via-[#16213e]/95 to-[#0f0f23]/95 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                {/* Subtle animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-rose-500/5" />

                {/* Glow effects */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-rose-400/20 rounded-full blur-3xl" />

                <div className="relative px-6 py-5 flex items-center justify-between gap-6">
                  {/* Left: Sale badge and offer */}
                  <div className="flex items-center gap-5">
                    {/* Virelity favicon as icon */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center shadow-lg shadow-black/50 border border-white/10 p-2">
                        <img
                          src="/deonprofessionalbgless.png"
                          alt="Virelity"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Sparkle animation */}
                      <motion.div
                        className="absolute -top-1 -right-1 text-amber-300"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <SparkleIcon />
                      </motion.div>
                    </div>

                    <div>
                      {/* New Year Sale Tag */}
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-orange-400 text-[#1a1a2e] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-[#1a1a2e] rounded-full animate-pulse" />
                          New Year Sale 2026
                        </span>
                      </div>

                      <h3 className="text-white text-lg font-semibold tracking-tight">
                        Free AI Strategy Session
                        <span className="ml-2 text-amber-400 font-bold"> $0</span>
                      </h3>
                      <p className="text-white/60 text-sm mt-0.5">
                        Start 2026 with a personalized AI roadmap for your business
                      </p>
                    </div>
                  </div>

                  {/* Center: Countdown Timer */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-white/50 text-[11px] mb-2 justify-center">
                      <CalendarIcon />
                      <span className="uppercase tracking-wider">Ends January 23, 2026</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {/* Days */}
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 text-center min-w-[52px]">
                        <span className="text-xl font-bold text-white tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
                        <span className="text-[10px] text-white/40 block uppercase tracking-wider mt-0.5">Days</span>
                      </div>
                      <span className="text-white/30 text-lg font-light">:</span>
                      {/* Hours */}
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 text-center min-w-[52px]">
                        <span className="text-xl font-bold text-white tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-[10px] text-white/40 block uppercase tracking-wider mt-0.5">Hrs</span>
                      </div>
                      <span className="text-white/30 text-lg font-light">:</span>
                      {/* Minutes */}
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 text-center min-w-[52px]">
                        <span className="text-xl font-bold text-white tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-[10px] text-white/40 block uppercase tracking-wider mt-0.5">Min</span>
                      </div>
                      <span className="text-white/30 text-lg font-light">:</span>
                      {/* Seconds */}
                      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl px-3 py-2 text-center min-w-[52px]">
                        <motion.span
                          key={timeLeft.seconds}
                          initial={{ opacity: 0.5, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xl font-bold text-amber-400 tabular-nums"
                        >
                          {String(timeLeft.seconds).padStart(2, '0')}
                        </motion.span>
                        <span className="text-[10px] text-white/40 block uppercase tracking-wider mt-0.5">Sec</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA Button */}
                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={handleCTAClick}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-green-400 to-green-500 bg-[length:200%_100%] hover:bg-right text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-500 shadow-lg shadow-green-500/25 flex items-center gap-2.5"
                    >
                      <PhoneCallIcon />
                      <span>Book Free Call</span>
                      <ChevronRightIcon />
                    </motion.button>

                    <button
                      onClick={handleDismiss}
                      className="text-white/30 hover:text-white/60 p-2 rounded-xl hover:bg-white/5 transition-all duration-200"
                      aria-label="Close banner"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Version - Clean minimal design */}
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e]/98 via-[#16213e]/98 to-[#0f0f23]/98 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              {/* Glow */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-2xl" />

              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 text-white/30 hover:text-white/60 p-1.5 rounded-lg hover:bg-white/5 transition-all z-10"
                aria-label="Close banner"
              >
                <CloseIcon />
              </button>

              <div className="px-4 py-4 relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0a0a0a] flex items-center justify-center shadow-lg shadow-black/50 border border-white/10 p-1.5">
                    <img
                      src="/deonprofessionalbgless.png"
                      alt="Virelity"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-400 text-[#1a1a2e] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      <span className="w-1 h-1 bg-[#1a1a2e] rounded-full animate-pulse" />
                      New Year Sale 2026
                    </span>
                    <h3 className="text-white text-base font-semibold mt-0.5">
                      Free AI Strategy <span className="text-amber-400">($0)</span>
                    </h3>
                  </div>
                </div>

                {/* Timer */}
                <div className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2 mb-3">
                  <span className="text-white/50 text-[11px] flex items-center gap-1">
                    <CalendarIcon />
                    Ends Jan 23
                  </span>
                  <div className="flex items-center gap-1 text-white font-mono text-sm">
                    <span className="bg-white/10 px-1.5 py-0.5 rounded">{String(timeLeft.days).padStart(2, '0')}d</span>
                    <span className="text-white/30">:</span>
                    <span className="bg-white/10 px-1.5 py-0.5 rounded">{String(timeLeft.hours).padStart(2, '0')}h</span>
                    <span className="text-white/30">:</span>
                    <span className="bg-white/10 px-1.5 py-0.5 rounded">{String(timeLeft.minutes).padStart(2, '0')}m</span>
                    <span className="text-white/30">:</span>
                    <span className="bg-amber-400/20 text-amber-400 px-1.5 py-0.5 rounded">{String(timeLeft.seconds).padStart(2, '0')}s</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleCTAClick}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-400 text-white font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-500/25"
                >
                  <PhoneCallIcon />
                  <span>Book Free Strategy Call</span>
                  <ChevronRightIcon />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoogleAdsCTA;
