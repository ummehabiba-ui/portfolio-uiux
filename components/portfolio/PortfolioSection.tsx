import { useEffect, useRef, useState } from 'react';
import { ExternalLink, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import SmartSalesCaseStudy from './SmartSalesCaseStudy';
import MedigoCaseStudy from './MedigoCaseStudy';

import imgMedigoCover from '/images/medigo-cover.png';
import imgVERA from '/images/covr-page.jpg';
import imgSneaker1 from '/images/cs-sneaker-1.jpg';
import imgSneaker2 from '/images/cs-sneaker-2.jpg';
import imgSneaker3 from '/images/cs-sneaker-3.jpg';
import imgSmartSales from '/images/smartsales-dashboard-overview.png';
import imgPlant from '/images/cover-page-plant.jpg';

const projects = [
  {
    id: 1,
    title: 'HealthSync – Doctor Appointment Booking App',
    type: 'Mobile App · Healthcare',
    description: 'A healthcare mobile app designed to simplify doctor appointment booking, consultation, and health management with a clean, accessible interface.',
    thumbnail: imgMedigoCover,
    tags: ['Mobile App', 'Healthcare', 'UX Research', 'Figma'],
    caseStudyType: 'medigo' as const,
    caseStudyImages: [],
  },
  {
    id: 2,
    title: 'Sneaker App – Fashion Shopping UI',
    type: 'Mobile App · E-commerce',
    description: 'A premium mobile UI for a sneaker shopping app with a dark theme, bold typography, and seamless browsing. Focused on clean product discovery and checkout flows.',
    thumbnail: imgVERA,
    tags: ['UI Design', 'Mobile App', 'E-commerce'],
    caseStudyType: 'images' as const,
    caseStudyImages: [
      imgSneaker1,
      imgSneaker2,
      imgSneaker3,
    ],
  },
  {
    id: 3,
    title: 'SmartSales – Analytics Dashboard UI',
    type: 'Web App · Analytics Dashboard',
    description: 'A modern sales analytics dashboard designed to help businesses monitor revenue, track performance, and analyze sales data in a simple and visual way.',
    thumbnail: imgSmartSales,
    tags: ['Dashboard', 'Analytics', 'Web App', 'Figma'],
    caseStudyType: 'smartsales' as const,
    caseStudyImages: [],
  },
  {
    id: 4,
    title: 'Plant Shop Mobile App',
    type: 'Mobile App · UI Showcase',
    description: 'Easy online plant shopping experience with clean layout, structured categories, and promotional content to support fast browsing and product discovery.',
    thumbnail: imgPlant,
    tags: ['UI Design', 'Mobile App', 'Shopping'],
    caseStudyType: 'images' as const,
    caseStudyImages: [
      imgPlant,
    ],
  },
];

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [openCaseStudy, setOpenCaseStudy] = useState<'smartsales' | 'medigo' | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = (selectedProject || openCaseStudy) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject, openCaseStudy]);

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.caseStudyType === 'smartsales') {
      setOpenCaseStudy('smartsales');
    } else if (project.caseStudyType === 'medigo') {
      setOpenCaseStudy('medigo');
    } else if (project.caseStudyImages.length > 0) {
      setSelectedProject(project);
    }
  };

  const isClickable = (project: typeof projects[0]) =>
    project.caseStudyType !== 'none' || project.caseStudyImages.length > 0;

  return (
    <>
      <section ref={sectionRef} id="portfolio" className="py-16 md:py-24 px-4 md:px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#1F2A24] to-transparent" />

        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="font-mono text-xs text-neon/70 uppercase tracking-[0.25em] mb-4 block">Featured Work</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-bold text-[#F1F5F3]">
              Selected{" "}
              <span className="text-neon" style={{ textShadow: '0 0 30px rgba(57,255,20,0.3)' }}>
                Projects
              </span>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`group relative glass-card rounded-2xl overflow-hidden transition-all duration-400 ${
                  isClickable(project) ? 'cursor-pointer hover:-translate-y-2 hover:shadow-[0_8px_40px_rgba(57,255,20,0.12)]' : 'cursor-default'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                {project.caseStudyType === 'smartsales' ? (
                  /* ─── Premium Dashboard Thumbnail ─── */
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A100C] group-hover:shadow-[inset_0_0_60px_rgba(57,255,20,0.07)] transition-all duration-500">
                    {/* Subtle grid background */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(57,255,20,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.5) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />

                    {/* Actual image — slightly zoomed and top-aligned */}
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-top scale-[1.06] group-hover:scale-[1.10] transition-transform duration-700 opacity-90"
                    />

                    {/* Rich gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A100C] via-[#0A100C]/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-neon/[0.04] via-transparent to-[#0A100C]/50" />

                    {/* Neon border glow on hover */}
                    <div className="absolute inset-0 rounded-t-2xl ring-1 ring-neon/0 group-hover:ring-neon/20 transition-all duration-500" />

                    {/* Floating stat pills */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between pointer-events-none">
                      <div className="flex gap-2">
                        <div className="flex flex-col px-3 py-2 rounded-xl bg-[#111713]/80 backdrop-blur-md border border-neon/15 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                          <span className="font-mono text-[10px] text-neon/60 uppercase tracking-widest">Revenue</span>
                          <span className="font-display text-base font-bold text-[#F1F5F3]">$84.2K</span>
                        </div>
                        <div className="flex flex-col px-3 py-2 rounded-xl bg-[#111713]/80 backdrop-blur-md border border-[#1F2A24] shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                          <span className="font-mono text-[10px] text-[#8FA39B] uppercase tracking-widest">Orders</span>
                          <span className="font-display text-base font-bold text-[#F1F5F3]">1,248</span>
                        </div>
                      </div>
                      {/* Growth badge */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon/10 border border-neon/25 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                        <span className="font-mono text-xs font-semibold text-neon">+24.8%</span>
                      </div>
                    </div>

                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-[#0A100C]/70 backdrop-blur-sm border border-neon/15 text-neon/80 text-xs font-mono">
                        {project.type}
                      </span>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-5 py-2.5 rounded-xl bg-neon text-[#0A100C] font-semibold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                        <ExternalLink size={15} />
                        View Case Study
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ─── Default Thumbnail ─── */
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#111713]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A100C] via-[#0A100C]/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-[#0A100C]/70 backdrop-blur-sm border border-neon/15 text-neon/80 text-xs font-mono">
                        {project.type}
                      </span>
                    </div>

                    {/* Hover CTA */}
                    {isClickable(project) && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-5 py-2.5 rounded-xl bg-neon text-[#0A100C] font-semibold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                          <ExternalLink size={15} />
                          {project.caseStudyType === 'images' ? 'View UI Screens' : 'View Case Study'}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-[#F1F5F3] group-hover:text-neon transition-colors duration-200 leading-tight">
                      {project.title}
                    </h3>
                    {isClickable(project) && (
                      <ArrowUpRight size={18} className="text-[#8FA39B] group-hover:text-neon transition-colors flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                  <p className="text-[#8FA39B] text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-[#1F2A24] text-[#8FA39B] text-xs font-mono group-hover:border-neon/15 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className={`mt-14 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="https://www.behance.net/ummehabhabeeba"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 border border-[#1F2A24] text-neon rounded-xl font-semibold hover:border-neon/40 hover:bg-neon/[0.06] hover:shadow-[0_0_28px_rgba(57,255,20,0.15)] transition-all duration-300"
            >
              View All on Behance
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[200] bg-[#0A100C]/95 backdrop-blur-md flex flex-col"
          onClick={() => setSelectedProject(null)}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F2A24] bg-[#0A100C]/90 backdrop-blur-xl sticky top-0 z-10">
            <div>
              <h3 className="font-display text-xl font-bold text-[#F1F5F3]">{selectedProject.title}</h3>
              <p className="font-mono text-xs text-neon/70">{selectedProject.type}</p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
              className="w-10 h-10 rounded-full border border-[#1F2A24] flex items-center justify-center text-[#8FA39B] hover:text-neon hover:border-neon/30 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="max-w-4xl mx-auto px-6 py-10 space-y-3">
              <div className="mb-8">
                <p className="text-[#8FA39B] leading-relaxed max-w-2xl">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-[#1F2A24] text-[#8FA39B] text-xs font-mono">{tag}</span>
                  ))}
                </div>
              </div>

              {selectedProject.caseStudyImages.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-[#1F2A24]/50">
                  <img
                    src={img}
                    alt={`${selectedProject.title} - Part ${i + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="text-center pb-10 text-[#8FA39B]/40">
              <ChevronDown size={20} className="mx-auto animate-bounce" />
            </div>
          </div>
        </div>
      )}

      {/* SmartSales Case Study */}
      {openCaseStudy === 'smartsales' && (
        <SmartSalesCaseStudy onClose={() => setOpenCaseStudy(null)} />
      )}

      {/* Medigo Case Study */}
      {openCaseStudy === 'medigo' && (
        <MedigoCaseStudy onClose={() => setOpenCaseStudy(null)} />
      )}
    </>
  );
};

export default PortfolioSection;
