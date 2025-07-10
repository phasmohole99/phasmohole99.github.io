import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Django and PostgreSQL, featuring user authentication, product catalog, cart functionality, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Django', 'PostgreSQL', 'Redis', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 2,
      title: 'Content Management System',
      description: 'A custom CMS built with Django, featuring a RESTful API, role-based access control, content versioning, and media management.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Django', 'Django REST Framework', 'JWT', 'AWS S3'],
      githubUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with Django Channels, featuring private messaging, group chats, message history, and file sharing.',
      image: 'https://images.pexels.com/photos/7439141/pexels-photo-7439141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Django', 'Channels', 'WebSockets', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'A RESTful API for task management built with Django REST Framework, featuring authentication, authorization, and comprehensive documentation.',
      image: 'https://images.pexels.com/photos/1329068/pexels-photo-1329068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Django REST Framework', 'Swagger', 'Celery', 'PostgreSQL'],
      githubUrl: 'https://github.com'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && elementsRef.current) {
            elementsRef.current.classList.add('opacity-100', 'translate-y-0');
            elementsRef.current.classList.remove('opacity-0', 'translate-y-8');
            setActiveProject(1);
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
          <h2 className="text-5xl font-bold ml-8">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="space-y-4">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    activeProject === project.id 
                      ? 'bg-gray-800 rounded-lg' 
                      : 'hover:bg-gray-900 rounded-lg'
                  }`}
                  onClick={() => setActiveProject(project.id)}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-8">
            {activeProject && (
              <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-500">
                <div className="relative h-[300px]">
                  <img 
                    src={projects.find(p => p.id === activeProject)?.image}
                    alt={projects.find(p => p.id === activeProject)?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {projects.find(p => p.id === activeProject)?.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {projects.find(p => p.id === activeProject)?.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects.find(p => p.id === activeProject)?.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={projects.find(p => p.id === activeProject)?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    
                    {projects.find(p => p.id === activeProject)?.liveUrl && (
                      <a 
                        href={projects.find(p => p.id === activeProject)?.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
      
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="vertical-text transform -rotate-90 flex items-center bg-gray-900/50 px-1 py-1 rounded-lg">
          <div className="w-8 h-px bg-gray-700 mr-2"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium">Projects</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;