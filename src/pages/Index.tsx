
import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ContactSection } from '@/components/ContactSection';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating particles background */}
      <div className="floating-particles fixed inset-0 pointer-events-none" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
