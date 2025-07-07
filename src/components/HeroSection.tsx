
import { MapPin, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-3/5 text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 lg:mb-8">
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base mb-3 animate-fade-in tracking-wide uppercase">
                Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4 animate-fade-in leading-tight">
                Abutalaha Inamdar
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-light mt-2">
                  (Samad)
                </span>
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text font-semibold mb-4 lg:mb-6 animate-fade-in">
                AWS DevOps Engineer
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 leading-relaxed text-base sm:text-lg lg:text-xl animate-fade-in max-w-2xl mx-auto lg:mx-0">
              Passionate AWS DevOps Engineer with expertise in cloud services, automation, 
              and CI/CD pipelines. I help organizations build scalable, secure, and efficient infrastructure.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 animate-fade-in">
              <MapPin size={20} className="mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">Pune, India</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-8 animate-fade-in">
              <button className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 w-full sm:w-auto">
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download CV
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 w-full sm:w-auto">
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in">
              <a href="mailto:abutalaha.inamdar@gmail.com" className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://github.com/samad-I" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-800/25">
                <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/abutalaha-inamdar/" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl p-2 animate-pulse">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-inner overflow-hidden">
                  <img 
                    src="/lovable-uploads/9db60c7a-b0bb-483f-9d3d-c13e74844c29.png" 
                    alt="Abutalaha Inamdar" 
                    className="w-full h-full object-cover object-center rounded-full filter brightness-110 contrast-110 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
