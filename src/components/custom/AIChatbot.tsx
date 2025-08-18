import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI('AIzaSyCcQKQMSx-J7W-sAWoGwYa1obKA1SNycb0');

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi there! I\'m your AI assistant. Ask me anything about our services, website, or how I can help you today! (AI powered)',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Function to send message to Gemini API
  const sendMessage = async (userMessage: string) => {
    try {
      setIsLoading(true);
      
      // Add user message to the conversation
      setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
      
      // Generate content with Gemini
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
      
      // Add context about the website/company to guide responses
      const promptContext = `
        You are an AI assistant for a web development and digital services company called Virelity.com.
        We provide services like web development, mobile app development, UI/UX design, and digital marketing.
        We're located in Mumbai, India.
        Our contact email is deonmenezescodes@gmail.com and phone number is +918104796542.
        If someone asks to contact us, provide these details or suggest they use our contact form.
        Always be helpful, professional, and concise in your responses.
        
        User query: ${userMessage}
      `;
      
      const result = await model.generateContent(promptContext);
      const response = result.response;
      const text = response.text();
      
      // Add AI response to the conversation
      setMessages((prev) => [...prev, { role: 'assistant', content: text }]);
      
    } catch (error) {
      console.error('Error generating content:', error);
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'Sorry, I encountered an error. Please try again or contact our support team directly.' 
        },
      ]);
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      sendMessage(message);
    }
  };

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close the chatbot
  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 z-50"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div 
          ref={chatRef}
          className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-card border border-border rounded-lg shadow-xl flex flex-col z-50"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Virelity.com Assistant (AI)</h3>
            </div>
            <button
              onClick={closeChat}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-muted flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="resize-none min-h-[60px]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !message.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Close button at the bottom */}
            <div className="mt-2 flex justify-center">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={closeChat} 
                className="w-full text-muted-foreground"
              >
                Close Chat
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};