
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Let's work together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I'm always interested in discussing new opportunities, innovative projects, 
              or collaborating on cloud infrastructure solutions. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span className="text-gray-700 dark:text-gray-300">abutalaha.inamdar@email.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span className="text-gray-700 dark:text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4" />
                <span className="text-gray-700 dark:text-gray-300">Mumbai, India</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 dark:bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm transition-colors">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-600 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Abutalaha Inamdar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
