
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 text-lg animate-fade-in tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in leading-tight">
                Abutalaha Inamdar
                <span className="block text-2xl sm:text-3xl lg:text-3xl text-gray-600 dark:text-gray-400 font-light mt-2">
                  (Samad)
                </span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold mb-8 animate-fade-in">
                AWS DevOps Engineer
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg max-w-2xl animate-fade-in">
              Passionate AWS DevOps Engineer with expertise in cloud services, automation, 
              and CI/CD pipelines. I help organizations build scalable, secure, and efficient infrastructure.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300 mb-10 animate-fade-in">
              <MapPin size={20} className="mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-lg">Pune, India</span>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in">
              <a href="mailto:abutalaha.inamdar@gmail.com" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 shadow-lg">
                <Mail size={20} />
              </a>
              <a href="https://github.com/samad-I" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-gray-800/25 transition-all duration-300 shadow-lg">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/abutalaha-inamdar/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 shadow-lg">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full p-1 hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <img 
                    src="/lovable-uploads/9db60c7a-b0bb-483f-9d3d-c13e74844c29.png" 
                    alt="Abutalaha Inamdar - AWS DevOps Engineer" 
                    className="w-full h-full object-cover object-center rounded-full filter brightness-105 contrast-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
