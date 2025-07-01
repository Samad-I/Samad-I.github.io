
import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { WorkExperienceSection } from '@/components/WorkExperienceSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkExperienceSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
