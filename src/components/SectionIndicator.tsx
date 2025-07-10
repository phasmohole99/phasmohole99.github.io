import React from 'react';

interface SectionIndicatorProps {
  activeSection: string;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({ activeSection }) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-40">
      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id} className="relative group">
            <button
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-3 h-3 rounded-full block relative z-10"
              style={{
                backgroundColor: activeSection === section.id ? '#ffffff' : '#4b5563',
                transition: 'background-color 0.3s ease'
              }}
            />
            
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity py-1 px-3 bg-gray-800 rounded text-xs whitespace-nowrap">
              {section.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionIndicator;