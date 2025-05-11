
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headingRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const parallaxValue = scrollPosition * 0.5;
      
      // Parallax for background
      if (sectionRef.current) {
        sectionRef.current.style.backgroundPositionY = `-${parallaxValue}px`;
      }
      
      // Parallax for text
      if (headingRef.current) {
        headingRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
        headingRef.current.style.opacity = `${1 - scrollPosition * 0.001}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-fashion-dark/70" />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 
            ref={headingRef}
            className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          >
            Redefining <span className="text-gradient">Style</span> for the Modern Generation
          </h1>
          
          <p className="text-fashion-beige text-lg md:text-xl mb-8 max-w-lg">
            Discover curated collections that blend urban streetwear with elegant fashion for those who appreciate premium quality and distinctive design.
          </p>
          
          <Button className="btn-primary group hoverable">
            Explore Collection
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-fashion-beige/80 text-sm mb-2">Scroll Down</span>
        <div className="w-5 h-9 border-2 border-fashion-beige/80 rounded-full flex justify-center">
          <span className="w-1 h-2 bg-fashion-beige/80 rounded-full animate-custom-bounce mt-1" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
