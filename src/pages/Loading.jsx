import { useState, useEffect } from 'react';

export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll on loading
    document.body.style.overflow = 'hidden';

    // Simulate loading time - adjust duration as needed
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated loading rings */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-blue-400 rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-2 border-transparent border-b-purple-400 border-l-cyan-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
          </div>
        </div>



        {/* Wave animation */}
        <div className="flex gap-1 h-8">
          <div className="w-1 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full animate-wave"></div>
          <div className="w-1 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full animate-wave" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full animate-wave" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full animate-wave" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1 bg-gradient-to-t from-cyan-400 to-blue-400 rounded-full animate-wave" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes wave {
          0%, 100% { height: 1rem; }
          50% { height: 2rem; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}