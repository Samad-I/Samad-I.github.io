
import { Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration with your actual credentials
      const serviceId = 'service_6acuaf9';
      const templateId = 'template_4l3njfr';
      const publicKey = 'N3kHpCoPVXjguHGJw';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'samadinamdar009@gmail.com'
      };

      console.log('Attempting to send email with params:', templateParams);
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error: any) {
      console.error('Error sending message:', error);
      
      // Handle specific EmailJS errors
      if (error.status === 412 || error.text?.includes('Invalid grant')) {
        toast({
          title: "Email service configuration issue",
          description: "Please try again later or contact me directly at samadinamdar009@gmail.com",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again or contact me directly via email.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 animate-fade-in mx-4 sm:mx-0">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md text-sm sm:text-base"
            placeholder="Your name"
            required
          />
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md text-sm sm:text-base"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 sm:mb-3 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 resize-none hover:shadow-md text-sm sm:text-base"
            placeholder="Your message..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2 text-base sm:text-lg"
        >
          <Send size={18} className="sm:w-5 sm:h-5" />
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
};
