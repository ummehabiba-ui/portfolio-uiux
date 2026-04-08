import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-12 md:py-20 px-4 md:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#1F2A24] to-transparent" />

      <div className="max-w-[800px] mx-auto">
        <div
          className={`flex flex-col space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.25em]">
            About Me
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F1F5F3] leading-tight">
            Design with{' '}
            <span
              className="text-neon"
              style={{ textShadow: '0 0 30px rgba(57,255,20,0.35)' }}
            >
              Purpose
            </span>
          </h2>

          <div className="space-y-4">
            <p className="text-[#F1F5F3] text-base md:text-lg leading-relaxed">
              I'm a UI/UX designer passionate about creating{' '}
              <span className="text-neon font-semibold">clean and user-friendly</span>{' '}
              digital experiences.
            </p>
            <p className="text-[#8FA39B] leading-relaxed text-sm md:text-base">
              I specialize in designing intuitive mobile and web interfaces using research,
              wireframing, and prototyping — translating user needs into elegant, functional designs.
            </p>
            <p className="text-[#8FA39B] leading-relaxed text-sm md:text-base">
              Currently pursuing an MBA while working on real-world UX projects and internships
              that sharpen both business thinking and design craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
