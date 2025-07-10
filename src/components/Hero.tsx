import { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
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
    <div className="container mx-auto px-6 h-screen flex flex-col justify-center relative">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="flex items-center mb-6">
              <span className="text-8xl text-gray-700 font-bold"></span>
              <h1 className="text-6xl font-bold ml-8">HEJ!</h1>
            </div>
            
            <div className="mt-8 text-lg text-gray-300 max-w-lg">
              <p className="mb-6">
                My name is Mohamed Amine Rital, a passionate backend developer specializing in Django.
              </p>
              <p>
                With expertise in creating robust server-side applications, I build secure, 
                scalable solutions that power seamless user experiences.
              </p>
            </div>
            
            <div className="mt-12">
              <button 
                onClick={scrollToAbout}
                className="group flex items-center text-sm uppercase tracking-wider font-medium"
              >
                <span className="mr-3 text-gray-400 group-hover:text-white transition-colors">Discover more</span>
                <ArrowDownCircle className="animate-bounce" size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-7 order-1 md:order-2">
          <div className="relative w-[85%] h-[80vh] mx-auto">
            <img
              src="/profile.jpeg"
              alt="Mohamed Amine Rital"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="vertical-text transform -rotate-90 flex items-center bg-gray-900/50 px-1 py-1 rounded-lg">
          <div className="w-8 h-px bg-gray-700 mr-2"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium">Introduce</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;