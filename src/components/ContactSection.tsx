import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
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
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 sm:-top-40 -right-24 sm:-right-32 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 sm:-bottom-40 -left-24 sm:-left-32 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full animate-fade-in"></div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in px-4">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8 animate-fade-in px-4 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                I'm always interested in discussing new opportunities, innovative projects, 
                or collaborating on cloud infrastructure solutions. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm sm:text-lg break-all">
                  samadinamdar009@gmail.com
                </span>
              </div>
              <div className="flex items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 text-sm sm:text-lg">
                  +91 9307579738
                </span>
              </div>
              <div className="flex items-center group hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 text-sm sm:text-lg">
                  Pune, India
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center sm:justify-start">
              <a href="https://www.linkedin.com/in/abutalaha-inamdar/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-600/25">
                <Linkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a href="https://github.com/samad-I" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800 dark:bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gray-800/25">
                <Github size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a href="mailto:samadinamdar009@gmail.com" className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-600/25">
                <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
            </div>
          </div>

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
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-300 dark:border-gray-600 text-center animate-fade-in">
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            © 2024 Abutalaha Inamdar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
