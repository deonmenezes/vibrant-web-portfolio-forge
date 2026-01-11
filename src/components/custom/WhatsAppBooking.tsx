import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Phone } from 'lucide-react';

// Official WhatsApp Icon SVG
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.156-1.97A15.903 15.903 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.932 2.014-3.182 2.28-.856.182-1.974.326-5.738-1.234-4.818-1.996-7.92-6.9-8.16-7.22-.232-.32-1.948-2.594-1.948-4.948s1.232-3.512 1.67-3.992c.39-.428 1.03-.624 1.644-.624.198 0 .376.01.536.018.438.018.658.044 .948.732.362.858 1.244 3.032 1.352 3.252.11.22.184.478.036.768-.14.294-.21.476-.414.734-.206.258-.432.576-.618.772-.206.236-.42.49-.18.962.24.47 1.068 1.762 2.294 2.854 1.578 1.406 2.906 1.842 3.32 2.046.414.204.654.17.894-.102.24-.274 1.03-1.198 1.304-1.61.274-.414.548-.344.924-.206.376.136 2.39 1.128 2.8 1.334.414.204.688.306.79.476.1.17.1.984-.29 2.084z" />
  </svg>
);

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
      {/* Main Button - Large WhatsApp Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] transition-all duration-300 z-[10000] hover:scale-110"
        aria-label="Open WhatsApp"
      >
        <WhatsAppIcon className="h-10 w-10" />
      </button>

      {/* Popup Menu */}
      {isOpen && (
        <div className="fixed bottom-44 left-6 bg-white rounded-2xl shadow-2xl p-5 z-[10000] w-[320px] border border-gray-100">
          <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center text-gray-800">
              <WhatsAppIcon className="h-6 w-6 mr-2 text-[#25D366]" />
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
                <WhatsAppIcon className="h-4 w-4 mr-2" />
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
          className="fixed inset-0 z-[9998]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};