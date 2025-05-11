
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PageLoader from '../components/PageLoader';
import HeroSection from '../components/HeroSection';
import NewArrivalsSection from '../components/NewArrivalsSection';
import CategoryShowcase from '../components/CategoryShowcase';
import TestimonialCarousel from '../components/TestimonialCarousel';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reveal animation for elements when they enter viewport
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Initial check on load

    return () => {
      window.removeEventListener('scroll', handleReveal);
    };
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader onLoadComplete={() => setLoading(false)} />
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <HeroSection />
          <NewArrivalsSection />
          <CategoryShowcase />
          <TestimonialCarousel />
          <NewsletterSection />
          <Footer />
          <CustomCursor />
        </div>
      )}
    </>
  );
};

export default Index;
