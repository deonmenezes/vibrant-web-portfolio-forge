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
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-background to-background/95 backdrop-blur-xl border-2 border-primary/20">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">Book a Free 15-Minute Call</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-1">
                Let's discuss your project and how we can help transform your business
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="border-muted bg-background/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
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
              className="border-muted bg-background/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
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
              className="border-muted bg-background/50 focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project or what you'd like to discuss..."
              className="min-h-[100px] border-muted bg-background/50 focus:border-primary"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
            >
              {isSubmitting ? "Sending..." : "Book Call"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

