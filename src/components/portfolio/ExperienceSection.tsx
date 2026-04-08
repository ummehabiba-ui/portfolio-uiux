import { useEffect, useRef, useState } from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} id="experience" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#1F2A24] to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.25em] mb-4 block">Where I've Worked</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-[#F1F5F3]">
            Internship{' '}
            <span className="text-neon" style={{ textShadow: '0 0 30px rgba(57,255,20,0.3)' }}>
              Experience
            </span>
          </h2>
        </div>

        {/* Single Card — centered */}
        <div className="flex justify-center">
          <div
            className={`group w-full max-w-4xl glass-card rounded-2xl p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(57,255,20,0.12)] transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-neon/[0.07] border border-neon/10 flex items-center justify-center group-hover:bg-neon/15 group-hover:border-neon/20 transition-all duration-300">
                  <Briefcase className="text-neon" size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#F1F5F3] group-hover:text-neon transition-colors duration-200">
                      UI/UX Designer Intern
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-neon/80 font-medium text-sm">MH Talent Craft Solutions</p>
                      <ArrowRight size={12} className="text-neon/40" />
                      <span className="text-[#8FA39B] text-sm font-mono">Remote</span>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-full border border-[#1F2A24] text-[#8FA39B] text-xs font-mono whitespace-nowrap self-start">
                    Oct 2025 – Jan 2026
                  </span>
                </div>

                <p className="text-[#8FA39B] leading-relaxed text-sm">
                  Gained exposure to UX research, user flows, wireframing, and interactive prototyping while learning industry design practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
