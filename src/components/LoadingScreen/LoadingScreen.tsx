import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 transition-all duration-700 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 transition-all duration-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 animate-[fadeIn_1s_ease-in-out]" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          {/* Animated logo container */}
          <div className="relative w-48 h-48 flex items-center justify-center mb-8">
            {/* Outer rotating rings */}
            <div className="absolute w-full h-full animate-[fadeIn_0.5s_ease-out]">
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border-2 border-t-blue-400/40 border-r-transparent border-b-transparent border-l-transparent animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-blue-300/30 animate-[spin_10s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border-2 border-r-blue-300/40 border-l-transparent border-t-transparent border-b-transparent animate-[spin_6s_linear_infinite_reverse]" />
            </div>

            {/* Glowing background for the logo */}
            <div className="absolute inset-0 m-auto w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-[pulseGlow_3s_ease-in-out_infinite]" />

            {/* Logo */}
            <div className="relative transform transition-all duration-700">
              <img 
                src="https://res.cloudinary.com/dfphzuddp/image/upload/v1741944450/LOKI_N-4_my9hoe.png" 
                alt="LOKI N-4"
                className="h-20 w-auto animate-[rotateIn_1.2s_cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>

            {/* Decorative dots */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 30}deg) translateY(-24px)`,
                    animation: `scaleIn 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.05}s forwards, 
                              pulseGlow 2s ease-in-out ${i * 0.1}s infinite`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Loading text */}
          <div className="relative">
            <p className="text-blue-200 font-light tracking-[0.2em] uppercase text-sm animate-[slideInUp_0.7s_cubic-bezier(0.4,0,0.2,1)_forwards]">
              Učitavanje
            </p>
            <div className="mt-3 flex justify-center space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-blue-400/60 rounded-full"
                  style={{
                    animation: `bounce 1.2s ease-in-out ${i * 0.15}s infinite`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};