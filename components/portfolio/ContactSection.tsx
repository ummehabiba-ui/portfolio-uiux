import { useEffect, useRef, useState } from 'react';
import { Mail, Send, ExternalLink, MapPin } from 'lucide-react';

const LinkedInIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const ContactSection = () => {
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
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#1F2A24] to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.25em] mb-4 block">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-[#F1F5F3] max-w-2xl mx-auto leading-tight">
            Let's{" "}
            <span className="text-neon" style={{ textShadow: '0 0 30px rgba(57,255,20,0.3)' }}>
              Connect
            </span>
          </h2>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main CTA card */}
          <div className="glass-card rounded-3xl p-10 md:p-14 text-center space-y-8 border border-neon/[0.07] relative overflow-hidden">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(57,255,20,0.5) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-neon/10 border border-neon/15 flex items-center justify-center">
                <Mail className="text-neon" size={28} />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F1F5F3]">
                  Let's work together on modern digital experiences.
                </h3>
                <p className="text-[#8FA39B] text-base max-w-md mx-auto leading-relaxed">
                  I'm always open to discussing UI/UX design projects, internship opportunities,
                  or creative collaborations. Let's create something amazing!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <a
                  href="mailto:mhabeeba2004@gmail.com"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[#0A100C] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(57,255,20,0.45)]"
                  style={{ background: "linear-gradient(135deg, #39FF14, #28EF14)" }}
                >
                  <Mail size={18} />
                  Let's Talk
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.behance.net/ummehabhabeeba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#1F2A24] text-neon rounded-xl font-semibold hover:border-neon/40 hover:bg-neon/[0.06] hover:shadow-[0_0_28px_rgba(57,255,20,0.12)] transition-all duration-300"
                >
                  View Behance
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/umme-habeeba-696556355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[#0A66C2]/30 text-[#0A66C2] rounded-xl font-semibold hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/[0.08] hover:shadow-[0_0_28px_rgba(10,102,194,0.2)] transition-all duration-300"
                  style={{ color: '#5BA3F5' }}
                >
                  <LinkedInIcon size={16} />
                  LinkedIn
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact info cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-5">
            <div className={`glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-neon" size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-neon/60 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:mhabeeba2004@gmail.com" className="text-[#F1F5F3] text-sm font-medium hover:text-neon transition-colors">
                    mhabeeba2004@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className={`glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center flex-shrink-0">
                  <LinkedInIcon size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(91,163,245,0.6)' }}>LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/umme-habeeba-696556355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F1F5F3] text-sm font-medium transition-colors"
                    style={{ color: '#5BA3F5' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#93C5FD')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5BA3F5')}
                  >
                    Umme Habeeba
                  </a>
                </div>
              </div>
            </div>

            <div className={`glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-neon" size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-neon/60 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-[#F1F5F3] text-sm font-medium">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
