import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-[#0A100C] flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo with pulsing glow */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-neon/20 animate-pulse-glow" />
          <h1 className="relative font-display text-6xl font-bold text-neon">UH</h1>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-[#1F2A24] rounded-full overflow-hidden">
          <div className="h-full neon-gradient animate-loading-bar" />
        </div>

        <p className="text-mint-muted font-mono text-xs tracking-wider">LOADING PORTFOLIO...</p>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            transform: translateX(0);
          }
          50% {
            width: 100%;
            transform: translateX(0);
          }
          100% {
            width: 100%;
            transform: translateX(100%);
          }
        }
        .animate-loading-bar {
          animation: loading-bar 1.8s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
