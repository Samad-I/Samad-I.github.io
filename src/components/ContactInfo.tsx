
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const ContactInfo = () => {
  return (
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
  );
};
