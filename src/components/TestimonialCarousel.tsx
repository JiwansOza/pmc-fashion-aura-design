
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Fashion Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    text: "PMC offers exceptional quality clothing that combines modern style with timeless elegance. Their attention to detail and fabric quality is unmatched. I've never been disappointed!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Style Blogger",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    text: "As someone who's particular about style and quality, I can confidently say PMC delivers on both fronts. Their urban streetwear collection is my go-to for everyday fashion statements.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    text: "The craftsmanship and attention to detail in PMC's collection is remarkable. As a designer myself, I appreciate their commitment to quality and innovative design.",
    rating: 4
  }
];

const TestimonialCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-fashion-charcoal relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-3">What Our Customers Say</h2>
          <p className="text-fashion-beige mx-auto max-w-xl">
            Discover why fashion enthusiasts choose PMC for their premium style needs.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto relative transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-fashion-dark p-6 md:p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 mr-1"
                          fill={i < testimonial.rating ? "#DAA520" : "none"}
                          color={i < testimonial.rating ? "#DAA520" : "#DAA520"}
                        />
                      ))}
                    </div>
                    <p className="text-fashion-beige italic mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-playfair text-white font-medium">{testimonial.name}</h4>
                        <span className="text-fashion-gold text-sm">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full mx-1 transition-all duration-300 ${
                  activeIndex === index ? 'bg-fashion-gold w-6' : 'bg-fashion-beige/30'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-fashion-dark/50 backdrop-blur-sm text-white hover:bg-fashion-gold hover:text-black pointer-events-auto"
              onClick={prevSlide}
            >
              <ArrowLeft size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-fashion-dark/50 backdrop-blur-sm text-white hover:bg-fashion-gold hover:text-black pointer-events-auto"
              onClick={nextSlide}
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
