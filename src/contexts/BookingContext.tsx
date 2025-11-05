import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

interface BookingContextType {
  isOpen: boolean;
  openBookingDialog: () => void;
  closeBookingDialog: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownAutoPopup, setHasShownAutoPopup] = useState(false);

  const openBookingDialog = useCallback(() => {
    setIsOpen(true);
    // Mark that we've shown a popup (either manual or auto)
    if (typeof window !== 'undefined') {
      localStorage.setItem('bookingPopupShown', 'true');
    }
  }, []);

  const closeBookingDialog = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Auto-popup after 15 seconds
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if popup has been shown in this session
    const popupShown = localStorage.getItem('bookingPopupShown');
    if (popupShown === 'true') {
      setHasShownAutoPopup(true);
      return;
    }

    // Set timer for 15 seconds
    const timer = setTimeout(() => {
      if (!isOpen && !hasShownAutoPopup) {
        setIsOpen(true);
        setHasShownAutoPopup(true);
        if (typeof window !== 'undefined') {
          localStorage.setItem('bookingPopupShown', 'true');
        }
      }
    }, 15000); // 15 seconds

    return () => clearTimeout(timer);
  }, [isOpen, hasShownAutoPopup]);

  return (
    <BookingContext.Provider value={{ isOpen, openBookingDialog, closeBookingDialog }}>
      {children}
    </BookingContext.Provider>
  );
};

