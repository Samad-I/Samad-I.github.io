
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
                Abutalaha Inamdar
                <span className="block text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light mt-2">
                  (Samad)
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold mb-6 animate-fade-in">
                AWS DevOps Engineer
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg animate-fade-in">
              Passionate AWS DevOps Engineer with expertise in cloud services, automation, 
              and CI/CD pipelines. I help organizations build scalable, secure, and efficient infrastructure.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
              <MapPin size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
              <span>Pune, India</span>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in">
              <a href="#contact" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Mail size={20} />
              </a>
              <a href="https://github.com/samad-I" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abutalaha-inamdar/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:scale-105 transition-all duration-500 shadow-2xl animate-pulse">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-inner">
                  <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    AI
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
