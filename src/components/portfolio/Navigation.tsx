import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LinkedInIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['contact', 'experience', 'portfolio', 'skills', 'about', 'home'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-[#0A100C]/85 backdrop-blur-xl border-b border-[#1F2A24]/60 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex justify-between items-center">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-display text-xl font-bold text-neon tracking-wider"
              style={{ textShadow: '0 0 20px rgba(57,255,20,0.4)' }}
            >
              UH<span className="text-[#8FA39B] font-light text-base ml-1.5 tracking-normal hidden sm:inline">· Portfolio</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive ? 'text-neon' : 'text-[#8FA39B] hover:text-[#F1F5F3]'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg bg-neon/[0.07] border border-neon/10" />
                    )}
                    <span className="relative">{link.name}</span>
                  </a>
                );
              })}
              {/* LinkedIn CTA */}
              <a
                href="https://www.linkedin.com/in/umme-habeeba-696556355"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all duration-200 hover:shadow-[0_0_14px_rgba(10,102,194,0.3)]"
                style={{
                  borderColor: 'rgba(10,102,194,0.35)',
                  color: '#5BA3F5',
                  backgroundColor: 'rgba(10,102,194,0.06)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(10,102,194,0.65)';
                  e.currentTarget.style.backgroundColor = 'rgba(10,102,194,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(10,102,194,0.35)';
                  e.currentTarget.style.backgroundColor = 'rgba(10,102,194,0.06)';
                }}
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={13} />
                LinkedIn
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#1F2A24] text-neon hover:bg-neon/5 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#0A100C]/97 backdrop-blur-xl md:hidden flex flex-col">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#F1F5F3] text-3xl font-display font-bold hover:text-neon transition-all duration-300"
                style={{
                  animation: `fadeInUp 0.4s ease-out ${index * 0.08}s forwards`,
                  opacity: 0,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navigation;
