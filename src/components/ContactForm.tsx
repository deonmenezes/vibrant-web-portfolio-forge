import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useAnalyticsEvents } from "@/hooks/use-analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveToGoogleSheets } from "@/lib/googleSheetsService";

export const ContactForm = () => {
  const { toast } = useToast();
  const { trackFormSubmission } = useAnalyticsEvents();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
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
    trackFormSubmission('Contact Form');

    try {
      // Save to Google Sheets
      const saved = await saveToGoogleSheets({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `[Subject: ${formData.subject}] ${formData.message}`,
      });

      if (saved) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
          duration: 5000,
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
      } else {
        toast({
          title: "Configuration needed",
          description: "Please configure Google Sheets integration. Contact us at deon.menezes@virelity.com",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again or contact us directly at deon.menezes@virelity.com",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">
            Full Name
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
            Email Address
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wide">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wide">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold uppercase tracking-wide">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your project, needs and timeline..."
          required
          className="min-h-[150px]"
        />
      </div>
      {/* Neobrutalist Submit Button */}
      <div className="relative group">
        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="relative w-full bg-yellow-400 hover:bg-yellow-400 text-black py-6 text-lg font-black uppercase tracking-wider border-[3px] border-black rounded-none"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};
