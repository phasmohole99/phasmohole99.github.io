import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'database' | 'devops' | 'soft';
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills: Skill[] = [
    { name: 'Python', level: 85, category: 'technical' },
    { name: 'Django', level: 90, category: 'technical' },
    { name: 'C/C++', level: 75, category: 'technical' },
    { name: 'Web Development', level: 85, category: 'technical' }
  ];

  const databaseSkills: Skill[] = [
    { name: 'PostgreSQL', level: 85, category: 'database' },
    { name: 'MongoDB', level: 75, category: 'database' },
    { name: 'SQLite', level: 80, category: 'database' }
  ];

  const devopsSkills: Skill[] = [
    { name: 'Docker', level: 70, category: 'devops' }
  ];

  const softSkills: Skill[] = [
    { name: 'Critical Thinking', level: 90, category: 'soft' },
    { name: 'Problem Solving', level: 88, category: 'soft' },
    { name: 'Team Work', level: 85, category: 'soft' },
    { name: 'Project Management', level: 82, category: 'soft' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const SkillBar = ({ skill }: { skill: Skill }) => {
    const getBarColor = (level: number) => {
      if (level >= 90) return 'bg-red-500';
      if (level >= 80) return 'bg-green-500';
      if (level >= 70) return 'bg-blue-500';
      if (level >= 60) return 'bg-purple-500';
      return 'bg-gray-500';
    };

    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className="text-gray-400">{skill.level}%</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarColor(skill.level)}`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="container mx-auto px-6 min-h-screen flex flex-col justify-center relative">
      <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex items-center mb-12">
          <span className="text-8xl text-gray-700 font-bold"></span>
          <h2 className="text-5xl font-bold ml-8">My Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Technical</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={`technical-${index}`} skill={skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-green-400">Database</h3>
            {databaseSkills.map((skill, index) => (
              <SkillBar key={`database-${index}`} skill={skill} />
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">DevOps</h3>
            {devopsSkills.map((skill, index) => (
              <SkillBar key={`devops-${index}`} skill={skill} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={`soft-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="vertical-text transform -rotate-90 flex items-center bg-gray-900/50 px-1 py-1 rounded-lg">
          <div className="w-8 h-px bg-gray-700 mr-2"></div>
          <span className="uppercase tracking-widest text-sm text-gray-400 font-medium">Skills</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;