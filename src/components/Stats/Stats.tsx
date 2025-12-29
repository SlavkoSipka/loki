import React from 'react';
import CountUp from 'react-countup';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { STATS } from '../../constants/config';

export const Stats = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section ref={elementRef} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dij7ynio3/image/upload/q_50/v1741874320/break_sekcija_sn7f2d.jpg"
          alt="Construction background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-white text-center relative z-10">
          {STATS.map((stat, index) => (
            <div key={index} className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 transform transition-all duration-500 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl font-bold mb-2 text-blue-200">
                {isVisible && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-blue-50 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};