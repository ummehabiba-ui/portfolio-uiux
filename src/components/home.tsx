import Navigation from './portfolio/Navigation';
import HeroSection from './portfolio/HeroSection';
import AboutSection from './portfolio/AboutSection';
import EducationSection from './portfolio/EducationSection';
import SkillsSection from './portfolio/SkillsSection';
import PortfolioSection from './portfolio/PortfolioSection';
import ExperienceSection from './portfolio/ExperienceSection';
import ContactSection from './portfolio/ContactSection';
import Footer from './portfolio/Footer';
import ScrollToTop from './portfolio/ScrollToTop';
import LoadingScreen from './portfolio/LoadingScreen';

function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-dark relative">
        {/* Subtle grid texture overlay */}
        <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU3LCAyNTUsIDIwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 pointer-events-none z-0" />
        
        <div className="relative z-10">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <PortfolioSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
}

export default Home;
