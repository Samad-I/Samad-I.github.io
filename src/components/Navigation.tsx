
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent transition flash on page load
  useEffect(() => {
    document.body.classList.add('preload');
    const timer = setTimeout(() => {
      document.body.classList.remove('preload');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              Abutalaha Inamdar
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 relative group font-medium text-sm lg:text-base"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button
              onClick={handleDarkModeToggle}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5">
                <Sun 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <Moon 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handleDarkModeToggle}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5">
                <Sun 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <Moon 
                  size={20} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                  }`}
                />
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t dark:border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-all duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
