import { X, ArrowUpRight, Figma, Smartphone, Users, Lightbulb, CheckCircle2 } from 'lucide-react';

import imgMedigoCover from '/images/medigo-cover.png';
import imgMedigoPage1 from '/images/medigo-page1.png';
import imgMedigoPage2 from '/images/medigo-page2.png';
import imgMedigoPage3 from '/images/medigo-page3.png';
import imgMedigoPage4 from '/images/medigo-page4.png';
import imgMedigoPage5 from '/images/medigo-page5.png';

interface Props {
  onClose: () => void;
}

const MedigoCaseStudy = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-[200] bg-[#0A100C]/98 backdrop-blur-md flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2A24] bg-[#0A100C]/90 backdrop-blur-xl sticky top-0 z-10">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.2em]">Case Study</span>
            <span className="font-mono text-xs text-[#1F2A24]">·</span>
            <span className="font-mono text-xs text-[#8FA39B]/60">Mobile App · Healthcare</span>
          </div>
          <h3 className="font-display text-xl font-bold text-[#F1F5F3]">HealthSync – Doctor Appointment Booking App</h3>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-[#1F2A24] flex items-center justify-center text-[#8FA39B] hover:text-neon hover:border-neon/30 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

          {/* Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
            <img
              src={imgMedigoCover}
              alt="HealthSync Healthcare App"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A100C]/60 via-transparent to-transparent" />
          </div>

          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Role', value: 'UI/UX Designer' },
              { label: 'Tools', value: 'Figma' },
              { label: 'Type', value: 'Mobile App' },
              { label: 'Year', value: '2025' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-4 border border-[#1F2A24]">
                <p className="font-mono text-xs text-[#8FA39B]/70 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-[#F1F5F3] font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Lightbulb size={14} className="text-neon" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#F1F5F3]">Project Overview</h4>
            </div>
            <p className="text-[#8FA39B] leading-relaxed text-[15px]">
              HealthSync is a healthcare mobile application designed to simplify doctor appointment booking,
              consultation, and health management. It helps patients find trusted doctors, check availability,
              and book appointments seamlessly — all from their phone.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {['Mobile App', 'Healthcare', 'UI Design', 'UX Research', 'Prototyping'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-[#1F2A24] text-[#8FA39B] text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-[#1F2A24] space-y-3">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400/80" />
                <h5 className="font-display font-bold text-[#F1F5F3]">Problem</h5>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Patients struggle to find the right doctor quickly',
                  'Traditional booking requires long wait times',
                  'No easy way to compare doctors by specialty or rating',
                  'Complicated appointment management systems',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[#8FA39B] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 flex-shrink-0 mt-1.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-[#1F2A24] space-y-3">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-2 h-2 rounded-full bg-neon" />
                <h5 className="font-display font-bold text-[#F1F5F3]">Solution</h5>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Simple mobile interface with instant doctor search',
                  'Real-time availability calendar and booking flow',
                  'Doctor profiles with ratings, bio, and specialization',
                  'Video consultation and pharmacy ordering features',
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[#8FA39B] text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0 mt-1.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Design Process */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Figma size={14} className="text-neon" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#F1F5F3]">Design Process</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: '01', label: 'User Research', desc: 'Interviewed patients to understand healthcare app pain points' },
                { step: '02', label: 'Wireframes', desc: 'Mapped out complete user flows and screen architecture' },
                { step: '03', label: 'UI Design', desc: 'Built high-fidelity screens with teal & white palette' },
                { step: '04', label: 'Hi-Fi Prototype', desc: 'Interactive Figma prototype with all core flows' },
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-xl p-5 border border-[#1F2A24] space-y-2">
                  <span className="font-mono text-xs text-neon/60">{item.step}</span>
                  <p className="font-semibold text-[#F1F5F3] text-sm">{item.label}</p>
                  <p className="text-[#8FA39B] text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Pages */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center">
                <Smartphone size={14} className="text-neon" />
              </div>
              <h4 className="font-display text-2xl font-bold text-[#F1F5F3]">Key Screens</h4>
            </div>

            {/* Cover page */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24] flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neon/60" />
                </div>
                <span className="font-mono text-xs text-[#8FA39B]/50 ml-2">HealthSync — Cover</span>
              </div>
              <img src={imgMedigoCover} alt="HealthSync Cover" className="w-full h-auto" loading="lazy" />
            </div>

            {/* Page 1 & 2 side by side */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
                <div className="px-4 py-2.5 border-b border-[#1F2A24]">
                  <span className="font-mono text-xs text-neon/70">Problem & Solution</span>
                </div>
                <img src={imgMedigoPage1} alt="Problem & Solution" className="w-full h-auto" loading="lazy" />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
                <div className="px-4 py-2.5 border-b border-[#1F2A24]">
                  <span className="font-mono text-xs text-neon/70">User Persona & Design System</span>
                </div>
                <img src={imgMedigoPage2} alt="User Persona" className="w-full h-auto" loading="lazy" />
              </div>
            </div>

            {/* Page 3 - Key Screens */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24]">
                <span className="font-mono text-xs text-neon/70">Home Screen · Doctor Listing · Profiles</span>
              </div>
              <img src={imgMedigoPage3} alt="Key Screens" className="w-full h-auto" loading="lazy" />
            </div>

            {/* Page 4 - Full Preview */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24]">
                <span className="font-mono text-xs text-neon/70">Full Preview — 12+ Screens</span>
              </div>
              <img src={imgMedigoPage4} alt="Full Preview" className="w-full h-auto" loading="lazy" />
            </div>

            {/* Page 5 - Thank You */}
            <div className="rounded-2xl overflow-hidden border border-[#1F2A24] bg-[#111713]">
              <div className="px-5 py-3 border-b border-[#1F2A24]">
                <span className="font-mono text-xs text-neon/70">Closing Slide</span>
              </div>
              <img src={imgMedigoPage5} alt="Thank You" className="w-full h-auto" loading="lazy" />
            </div>
          </div>

          {/* Outcome */}
          <div className="glass-card rounded-2xl p-8 border border-neon/10 bg-neon/[0.03] space-y-4">
            <h4 className="font-display text-xl font-bold text-[#F1F5F3]">Key Outcomes</h4>
            <ul className="space-y-3">
              {[
                'Designed 12+ high-fidelity screens covering core user journeys',
                'Built intuitive search and filter for doctor discovery',
                'Created complete appointment booking flow with calendar UI',
                'Designed pharmacy & medicine ordering module',
                'Consistent teal-based design system with Figma components',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-[#8FA39B] text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0 mt-1.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center pb-4">
            <a
              href="https://www.behance.net/ummehabhabeeba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-[#0A100C] bg-gradient-to-r from-[#39FF14] to-[#28EF14] hover:shadow-[0_0_40px_rgba(57,255,20,0.35)] hover:scale-[1.02] transition-all duration-300"
            >
              View Full Project on Behance
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MedigoCaseStudy;
