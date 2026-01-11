import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAnalyticsEvents } from "@/hooks/use-analytics";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";
import { saveToGoogleSheets } from "@/lib/googleSheetsService";

interface BookingFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingFormDialog = ({ open, onOpenChange }: BookingFormDialogProps) => {
  const { toast } = useToast();
  const { trackFormSubmission } = useAnalyticsEvents();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    trackFormSubmission('Booking Form');

    try {
      // Save to Google Sheets
      const saved = await saveToGoogleSheets({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (saved) {
        // Data saved successfully to Google Sheets
        toast({
          title: "Booking request submitted!",
          description: "Thank you! We'll get back to you soon to schedule your free consultation call.",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setIsSubmitting(false);
        onOpenChange(false);
      } else {
        // Fallback if Google Sheets is not configured
        toast({
          title: "Configuration needed",
          description: "Please configure Google Sheets integration. Contact us at deon.menezes@virelity.com",
          variant: "destructive",
          duration: 5000,
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again or contact us directly at deon.menezes@virelity.com",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            {/* Neobrutalist Icon */}
            <div className="h-12 w-12 bg-yellow-400 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center">
              <Calendar className="h-6 w-6 text-black" />
            </div>
            <div>
              <DialogTitle className="text-2xl">Book a Free 15-Minute Call</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                Let's discuss your project and how we can help transform your business
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold uppercase tracking-wide">
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wide">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold uppercase tracking-wide">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or what you'd like to discuss..."
              className="min-h-[100px]"
            />
          </div>

          <div className="flex gap-3 pt-2">
            {/* Neobrutalist Cancel Button */}
            <div className="relative group flex-1">
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-gray-400 transition-all group-hover:translate-x-2 group-hover:translate-y-2" />
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="relative w-full bg-white text-black font-bold uppercase tracking-wide border-[3px] border-black rounded-none"
              >
                Cancel
              </Button>
            </div>
            {/* Neobrutalist Submit Button */}
            <div className="relative group flex-1">
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black transition-all group-hover:translate-x-2 group-hover:translate-y-2" />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-yellow-400 hover:bg-yellow-400 text-black font-bold uppercase tracking-wide border-[3px] border-black rounded-none"
              >
                {isSubmitting ? "Sending..." : "Book Call"}
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

