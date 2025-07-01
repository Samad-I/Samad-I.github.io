
import { Download, MapPin } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-100 dark:bg-gray-800 py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Abutalaha Inamdar
            </h1>
            <h2 className="text-xl lg:text-2xl text-blue-600 dark:text-blue-400 mb-4">
              DevOps Engineer & AWS Solution Architect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Passionate DevOps Engineer with expertise in AWS cloud services, automation, 
              and CI/CD pipelines. I help organizations build scalable, secure, and efficient infrastructure.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-8">
              <MapPin size={20} className="mr-2" />
              <span>Based in India</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Hire Me
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center transition-colors">
                <Download size={20} className="mr-2" />
                Download CV
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-blue-600 dark:text-blue-400">AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
