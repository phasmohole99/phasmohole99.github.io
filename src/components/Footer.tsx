import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold tracking-wider mb-4">RITAL</div>
            <p className="text-gray-400 max-w-md">
              Backend developer specializing in Django and building robust web applications.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://github.com/phasmohole99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Mohamed Amine Rital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;