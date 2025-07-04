
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-lg animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in leading-tight">
                Abutalaha Inamdar
                <span className="block text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 font-light mt-3">
                  (Samad)
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold mb-8 animate-fade-in">
                AWS DevOps Engineer
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed text-xl max-w-2xl animate-fade-in">
              Passionate AWS DevOps Engineer with expertise in cloud services, automation, 
              and CI/CD pipelines. I help organizations build scalable, secure, and efficient infrastructure.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300 mb-10 animate-fade-in">
              <MapPin size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
              <span className="text-lg">Pune, India</span>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in">
              <a href="mailto:abutalaha.inamdar@gmail.com" className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg">
                <Mail size={24} />
              </a>
              <a href="https://github.com/samad-I" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-800 dark:bg-gray-700 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abutalaha-inamdar/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full p-2 hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden shadow-inner">
                  <img 
                    src="/lovable-uploads/9db60c7a-b0bb-483f-9d3d-c13e74844c29.png" 
                    alt="Abutalaha Inamdar - AWS DevOps Engineer" 
                    className="w-full h-full object-cover object-center rounded-full filter brightness-105 contrast-105"
                  />
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 blur-xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
