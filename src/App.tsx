import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionIndicator from './components/SectionIndicator';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 300 && rect.bottom >= 300;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar activeSection={activeSection} />
      <main className="relative">
        <SectionIndicator activeSection={activeSection} />
        <section id="hero" className="min-h-screen">
          <Hero />
        </section>
        <section id="about" className="min-h-screen pt-32">
          <About />
        </section>
        <section id="skills" className="min-h-screen pt-32">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen pt-32">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen pt-32">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;