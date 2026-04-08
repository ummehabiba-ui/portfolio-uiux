import { useEffect, useRef, useState } from 'react';
import { BookOpen } from 'lucide-react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#1F2A24] to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.25em] mb-4 block">Academic Background</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-[#F1F5F3]">
            <span className="text-neon" style={{ textShadow: '0 0 30px rgba(57,255,20,0.3)' }}>
              Education
            </span>
          </h2>
        </div>

        {/* Single centered card */}
        <div className="flex justify-center">
          <div
            className={`group glass-card rounded-2xl p-8 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(57,255,20,0.1)] transition-all duration-300 w-full max-w-4xl ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-neon/[0.08] border border-neon/10 flex items-center justify-center group-hover:bg-neon/15 group-hover:border-neon/20 transition-all duration-300">
                  <BookOpen className="text-neon" size={22} />
                </div>
                <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-neon/10 text-neon border border-neon/20">
                  In Progress
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#F1F5F3] mb-1 group-hover:text-neon transition-colors duration-200">
                  Master of Business Administration (MBA)
                </h3>
                <p className="text-[#8FA39B] text-sm">Business & Management</p>
              </div>
              <p className="font-mono text-xs text-neon/60 tracking-wider">2025 – Present</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
