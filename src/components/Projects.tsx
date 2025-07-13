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
      title: 'Minishell with C',
      description: 'Minishell is a C-based project that replicates a simple Unix shell, focusing on process management, command execution, tokenization, and inter-process communication using pipes.',
      image: 'https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg?auto=compress&fit=crop&w=600&q=80',
      tags: ['C', 'Unix', 'Shell'],
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'inception',
      description: 'Inception is a system administration project where you build a secure, containerized web infrastructure using Docker and Docker Compose from scratch. You’ll deploy NGINX, WordPress, and MariaDB in isolated containers with TLS, all configured manually inside a virtual machine.',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&fit=crop&w=600&q=80',
      tags: ['Docker', 'NGINX', 'MariaDB', 'WordPress'],
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'ft_transcendence',
      description: 'A full-stack, real-time Pong arena where code meets chaos and only clean architecture survives. Frontend: Craft a fast SPA in JavaScript with Tailwind for stylish, fluid gameplay. Backend: Orchestrate matches, chat, and auth with Django like a silent referee. Database: Keep every point, player, and play in sync using PostgreSQL—or etch it in blockchain for glory.',
      image: 'https://images.pexels.com/photos/163743/games-ping-pong-table-tennis-play-163743.jpeg?auto=compress&fit=crop&w=600&q=80',
      tags: ['JavaScript', 'Django', 'PostgreSQL', 'Blockchain', 'Tailwind'],
      githubUrl: 'https://github.com',
    },
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
    <div ref={sectionRef} className="container mx-auto px-6 min-h-screen flex flex-col justify-center relative">
      <div 
        ref={elementsRef}
        className="transform transition-all duration-1000 opacity-0 translate-y-8"
      >
        <div className="flex items-center mb-12">
          <span className="text-8xl text-gray-700 font-bold"></span>
          <h2 className="text-5xl font-bold ml-8">Projects</h2>
        </div>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-xl shadow-lg p-8 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300 font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
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