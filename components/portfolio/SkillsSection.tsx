import { useEffect, useRef, useState } from 'react';
import { Figma, Palette, Layout, Smartphone, Layers, Workflow, MousePointer2, Globe, Search } from 'lucide-react';

const skills = [
  { icon: Palette, name: 'UI Design', description: 'Visual interfaces & layouts', level: 95 },
  { icon: Search, name: 'UX Research', description: 'User testing & insights', level: 88 },
  { icon: Layout, name: 'Wireframing', description: 'Low-fi to high-fi flows', level: 92 },
  { icon: MousePointer2, name: 'Prototyping', description: 'Interactive prototypes', level: 90 },
  { icon: Figma, name: 'Figma', description: 'Design & collaboration', level: 96 },
  { icon: Layers, name: 'Design Systems', description: 'Component libraries', level: 85 },
  { icon: Workflow, name: 'Interaction Design', description: 'Micro-interactions & motion', level: 82 },
  { icon: Smartphone, name: 'Mobile App Design', description: 'iOS & Android interfaces', level: 91 },
  { icon: Globe, name: 'Web UI Design', description: 'Responsive web layouts', level: 89 },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #39FF14 0%, transparent 70%)' }}
        />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#1F2A24] to-transparent" />

      <div className="max-w-[1280px] mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.25em] mb-4 block">Expertise & Tools</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-[#F1F5F3] mb-4">
            My{' '}
            <span className="text-neon" style={{ textShadow: '0 0 40px rgba(57,255,20,0.4)' }}>
              Skills
            </span>
          </h2>
          <p className="text-[#8FA39B] text-base max-w-md mx-auto">
            A focused toolkit for crafting beautiful, functional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-2xl p-6 cursor-default transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 60}ms`,
                  background: isHovered
                    ? 'linear-gradient(135deg, rgba(57,255,20,0.06) 0%, #111713 100%)'
                    : '#111713',
                  border: `1px solid ${isHovered ? 'rgba(57,255,20,0.25)' : '#1F2A24'}`,
                  boxShadow: isHovered
                    ? '0 8px 40px rgba(57,255,20,0.12), 0 0 0 1px rgba(57,255,20,0.1)'
                    : '0 2px 20px rgba(0,0,0,0.4)',
                  transform: isHovered ? 'translateY(-6px) rotate(0.5deg)' : 'translateY(0) rotate(0)',
                }}
              >
                {/* Top row: icon + name */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: isHovered ? 'rgba(57,255,20,0.15)' : 'rgba(57,255,20,0.06)',
                      border: `1px solid ${isHovered ? 'rgba(57,255,20,0.4)' : 'rgba(57,255,20,0.1)'}`,
                      boxShadow: isHovered ? '0 0 20px rgba(57,255,20,0.2)' : 'none',
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                      style={{ color: isHovered ? '#39FF14' : '#8FA39B', transition: 'color 0.3s' }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-[15px] font-semibold text-[#F1F5F3] group-hover:text-neon transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-[#8FA39B] mt-0.5">{skill.description}</p>
                  </div>
                  {/* Level badge */}
                  <span
                    className="text-xs font-mono font-bold transition-all duration-300 flex-shrink-0"
                    style={{ color: isHovered ? '#39FF14' : '#4A6358' }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div
                  className="h-[3px] rounded-full overflow-hidden"
                  style={{ background: '#1F2A24' }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 60 + 300}ms`,
                      background: isHovered
                        ? 'linear-gradient(90deg, #39FF14, #28EF14)'
                        : 'linear-gradient(90deg, #2a7a1a, #39FF14)',
                      boxShadow: isHovered ? '0 0 8px rgba(57,255,20,0.6)' : 'none',
                    }}
                  />
                </div>

                {/* Corner accent on hover */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none transition-opacity duration-300 rounded-tr-2xl"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(57,255,20,0.08) 0%, transparent 70%)',
                    opacity: isHovered ? 1 : 0,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              border: '1px solid #1F2A24',
              background: 'rgba(57,255,20,0.03)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" style={{ boxShadow: '0 0 8px #39FF14' }} />
            <span className="text-xs text-[#8FA39B] font-mono tracking-wide">Available for freelance & full-time roles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
