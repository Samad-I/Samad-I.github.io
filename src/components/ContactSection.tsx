
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Calendar, User } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's collaborate on building amazing cloud solutions together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's work together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-base lg:text-lg">
                I'm always interested in discussing new opportunities, innovative projects, 
                or collaborating on cloud infrastructure solutions. Feel free to reach out!
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="group flex items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-medium">
                    abutalaha.inamdar@gmail.com
                  </span>
                </div>
              </div>
              
              <div className="group flex items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300 font-medium">
                    +91 9307579738
                  </span>
                </div>
              </div>
              
              <div className="group flex items-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 font-medium">
                    Pune, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4 font-medium">Connect with me:</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/abutalaha-inamdar/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/samad-I" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gray-800 dark:bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:abutalaha.inamdar@gmail.com" className="group w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 relative overflow-hidden">
            {/* Form background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">Send Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200">
                      <User size={16} className="inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 focus:scale-105"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200">
                      <Mail size={16} className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 focus:scale-105"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200">
                    <Calendar size={16} className="inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 focus:scale-105"
                    placeholder="Project discussion, Job opportunity, etc."
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-blue-600 dark:group-focus-within:text-blue-400 transition-colors duration-200">
                    <MessageCircle size={16} className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 resize-none focus:scale-105"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-gray-300 dark:border-gray-600 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
            © 2024 Abutalaha Inamdar. All rights reserved. | Built with ❤️ using React & AWS
          </p>
        </div>
      </div>
    </section>
  );
};
