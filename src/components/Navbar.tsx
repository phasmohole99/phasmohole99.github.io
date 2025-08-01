import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wider">RITAL</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 mr-8">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-all ${
                    activeSection === section 
                      ? 'text-white font-medium' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/phasmohole99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-200 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-6">
            <ul className="flex flex-col space-y-4 mb-6">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-sm uppercase tracking-wider ${
                      activeSection === section 
                        ? 'text-white font-medium' 
                        : 'text-gray-400'
                    }`}
                  >
                    {section === 'hero' ? 'Home' : section}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
              <a href="https://github.com/phasmohole99" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;