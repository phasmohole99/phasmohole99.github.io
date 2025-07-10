import { useEffect, useRef } from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && elementsRef.current) {
            elementsRef.current.classList.add('opacity-100', 'translate-y-0');
            elementsRef.current.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-6 h-screen flex flex-col justify-center relative">
      <div 
        ref={elementsRef}
        className="transform transition-all duration-1000 opacity-0 translate-y-8"
      >
        <div className="flex items-center mb-12">
          <span className="text-8xl text-gray-700 font-bold"></span>
          <h2 className="text-5xl font-bold ml-8">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6">
            <p className="text-xl font-light text-gray-300 mb-6">
              As a versatile backend developer with a passion for Django, I architect and build
              the systems that power modern web applications.
            </p>
            
            <p className="text-lg text-gray-400 mb-6">
              With a strong foundation in Python and database design, I create robust APIs, implement
              authentication systems, and optimize performance for scalable applications.
            </p>
            
            <p className="text-lg text-gray-400 mb-8">
              My goal is to deliver secure, maintainable code that serves as a reliable foundation
              for exceptional user experiences. I'm constantly learning and exploring new technologies
              to enhance my backend development toolkit.
            </p>
          </div>
          
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-8 rounded-lg transition-all hover:bg-gray-800">
                <div className="text-blue-400 mb-4">
                  <Server size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-gray-400">
                  Creating robust server-side applications using Django and Python.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg transition-all hover:bg-gray-800">
                <div className="text-green-400 mb-4">
                  <Database size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Database Design</h3>
                <p className="text-gray-400">
                  Designing efficient database schemas for optimal performance.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg transition-all hover:bg-gray-800">
                <div className="text-purple-400 mb-4">
                  <Code size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">API Development</h3>
                <p className="text-gray-400">
                  Building RESTful APIs with Django REST Framework.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg transition-all hover:bg-gray-800">
                <div className="text-orange-400 mb-4">
                  <Globe size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Solutions</h3>
                <p className="text-gray-400">
                  Developing complete web solutions from concept to deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="vertical-text transform -rotate-90 flex items-center bg-gray-900/50 px-1 py-1 rounded-lg">
          <div className="w-8 h-px bg-gray-700 mr-2"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium">About</span>
        </div>
      </div>
    </div>
  );
};

export default About;