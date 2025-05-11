
import React, { useEffect, useState } from 'react';

const PageLoader: React.FC<{ onLoadComplete: () => void }> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const next = prev + 2;
          return next > 100 ? 100 : next;
        });
      } else {
        setTimeout(() => {
          onLoadComplete();
        }, 500);
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, onLoadComplete]);

  return (
    <div className="fixed inset-0 bg-fashion-dark z-[100] flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <span className="loader-letter text-fashion-gold">P</span>
        <span className="loader-letter text-fashion-gold">M</span>
        <span className="loader-letter text-fashion-gold">C</span>
      </div>
      
      <div className="w-64 h-1 bg-fashion-charcoal relative overflow-hidden">
        <div 
          className="h-full bg-fashion-gold absolute left-0 top-0 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-fashion-beige/60 text-sm">
        {progress === 100 ? 'Ready' : 'Loading'}
      </div>
    </div>
  );
};

export default PageLoader;
