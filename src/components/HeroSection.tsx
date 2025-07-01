
import { useEffect, useState } from 'react';
import { ChevronDown, Cloud, Code, Zap } from 'lucide-react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Greeting */}
          <div className="space-y-2">
            <p className="text-primary font-medium text-lg tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abutalaha Inamdar
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-mono">
              "Samad"
            </p>
          </div>

          {/* Role */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              AWS DevOps Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specializing in cloud infrastructure automation, CI/CD pipelines, and scalable AWS solutions. 
              I build robust systems that enable teams to deploy faster and more reliably.
            </p>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 mt-12">
            <div className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:animate-glow">
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:animate-glow">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:animate-glow">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
            >
              Learn More About Me
              <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
