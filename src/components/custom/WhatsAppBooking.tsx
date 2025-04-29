import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone, MessageCircle } from 'lucide-react';

export const WhatsAppBooking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '918104796542';

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const bookFreeCall = () => {
    const message = "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    openWhatsApp(message);
  };

  const sendWhatsAppMessage = () => {
    const message = "Hi! I'm interested in your services and would like to learn more.";
    openWhatsApp(message);
  };

  return (
    <div className="relative">
      {/* Main Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-40 flex items-center gap-2"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </Button>

      {/* Popup Menu */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 bg-white rounded-lg shadow-xl p-4 z-40 w-[300px] border border-border">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
              Connect on WhatsApp
            </h3>
            
            <div className="space-y-3">
              <Button 
                onClick={bookFreeCall}
                className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-800 border border-green-200"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book a 15-min Free Call
              </Button>
              
              <Button 
                onClick={sendWhatsAppMessage}
                className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-800 border border-green-200"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Send a Message
              </Button>
              
              <a 
                href={`tel:+${phoneNumber}`}
                className="block w-full"
              >
                <Button 
                  className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-800 border border-green-200"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Directly
                </Button>
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground pt-2 border-t border-border">
              <p>Available Monday to Friday</p>
              <p className="flex items-center mt-1">
                <Clock className="h-3 w-3 mr-1" /> 
                9:00 AM - 6:00 PM IST
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};