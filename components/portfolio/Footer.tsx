import { Heart, Dribbble, Instagram, MessageCircle, Mail } from 'lucide-react';

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-[#1F2A24]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="font-display text-2xl font-bold text-neon mb-2 block">
              UH
            </a>
            <p className="text-mint-muted text-sm">
              Umme Habiba — UI/UX Designer
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Skills', 'Portfolio', 'Experience', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, `#${link.toLowerCase()}`)}
                className="text-mint-muted hover:text-neon transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Dribbble, href: 'https://dribbble.com/mhabeeba2004', label: 'Dribbble' },
              { icon: Instagram, href: '#', label: 'Instagram' },
              { icon: MessageCircle, href: '#', label: 'WhatsApp' },
              { icon: Mail, href: 'mailto:mhabeeba2004@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-lg border border-[#1F2A24] flex items-center justify-center text-mint-muted hover:text-neon hover:border-neon/20 transition-all"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
            {/* LinkedIn — special styling */}
            <a
              href="https://www.linkedin.com/in/umme-habeeba-696556355"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-[#0A66C2]/25 flex items-center justify-center transition-all hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/10 hover:shadow-[0_0_14px_rgba(10,102,194,0.25)]"
              style={{ color: '#5BA3F5' }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#1F2A24]/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-mint-muted text-xs">
            © {currentYear} Umme Habiba. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-mint-muted text-xs">
            <span>Made with</span>
            <Heart className="text-neon" size={12} fill="currentColor" />
            <span>by Umme Habiba</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
