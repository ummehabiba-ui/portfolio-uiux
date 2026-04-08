import { Download, Eye, MapPin, ArrowRight, Briefcase } from "lucide-react";
import profileImg from '/images/profile-umme.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen max-h-screen flex items-center justify-center px-6 pt-20 pb-6 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57, 255, 20, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-neon/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/5 w-[350px] h-[350px] bg-neon/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-14">
          
          {/* Text Content */}
          <div className="flex-1 space-y-4 md:space-y-5">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon/20 bg-neon/[0.05] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-xs text-neon uppercase tracking-[0.2em]">UI/UX Designer</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-3xl md:text-4xl lg:text-[46px] font-bold leading-[1.1] text-[#F1F5F3]">
                Hi, I'm{" "}
                <span
                  className="text-neon"
                  style={{ textShadow: "0 0 40px rgba(57,255,20,0.35)" }}
                >
                  Umme Habiba
                </span>
                <br />
                <span className="text-[#8FA39B] text-3xl md:text-[38px] lg:text-[42px]">UI/UX Designer crafting</span>
                <br />
                <span className="text-[#F1F5F3] text-3xl md:text-[38px] lg:text-[42px]">user-centered digital experiences</span>
              </h1>
              <p className="text-[#8FA39B] text-sm md:text-[15px] max-w-lg leading-relaxed">
                I design clean, user-centered mobile and web interfaces focused
                on usability, clarity, and modern aesthetics.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-[#8FA39B]">
                  <MapPin size={13} className="text-neon/70" />
                  <span className="font-mono text-xs tracking-wide">India</span>
                </div>
                <div className="flex items-center gap-2 text-[#8FA39B]">
                  <Briefcase size={13} className="text-neon/70" />
                  <span className="font-mono text-xs tracking-wide text-neon/80">Open to new opportunities</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-[#0A100C] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(57,255,20,0.45)]"
                style={{ background: "linear-gradient(135deg, #39FF14, #28EF14)" }}
              >
                <Eye size={18} />
                View Portfolio
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download="Umme_Habiba_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border border-[#1F2A24] text-neon rounded-xl font-semibold hover:border-neon/40 hover:bg-neon/[0.06] hover:shadow-[0_0_28px_rgba(57,255,20,0.12)] transition-all duration-300"
              >
                <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Portrait with Glow */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[200px] h-[200px] md:w-[260px] md:h-[260px]">
              {/* Multi-layered glow */}
              <div className="absolute inset-[-30px] rounded-full bg-neon/10 blur-[50px] animate-pulse-glow" />
              <div className="absolute inset-[-10px] rounded-full bg-neon/5 blur-[20px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

              {/* Outer ring */}
              <div className="absolute inset-[-6px] rounded-full border border-neon/10" />
              <div className="absolute inset-[-16px] rounded-full border border-neon/[0.05]" />

              {/* Portrait */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-neon/25 shadow-[0_0_60px_rgba(57,255,20,0.2)]">
                <img
                  src={profileImg}
                  alt="Umme Habiba"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating accent dots */}
              <div className="absolute top-6 -left-8 w-2.5 h-2.5 rounded-full bg-neon/70 animate-pulse" />
              <div className="absolute bottom-10 -right-5 w-1.5 h-1.5 rounded-full bg-neon/50 animate-pulse" style={{ animationDelay: '0.7s' }} />
              <div className="absolute top-1/2 -right-10 w-1 h-1 rounded-full bg-neon/40 animate-pulse" style={{ animationDelay: '1.4s' }} />

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#111713] border border-neon/20 shadow-[0_0_20px_rgba(57,255,20,0.1)] whitespace-nowrap">
                <span className="font-mono text-xs text-neon tracking-wider">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(0.97); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
