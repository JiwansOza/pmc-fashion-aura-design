
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

const categories: Category[] = [
  {
    id: "men",
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1974&auto=format&fit=crop",
    description: "Discover premium streetwear, tailored suits, and urban essentials for the modern man."
  },
  {
    id: "women",
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1965&auto=format&fit=crop",
    description: "Explore elegant dresses, contemporary separates, and statement pieces designed for today's woman."
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1974&auto=format&fit=crop",
    description: "Complete your look with our premium selection of jewelry, bags, watches and other essential accessories."
  }
];

const CategoryShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-20 bg-fashion-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-3">Shop By Category</h2>
          <p className="text-fashion-beige max-w-xl">
            Explore our carefully curated collections designed for those who appreciate quality and style.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Category tabs */}
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  id={category.id}
                  className={`text-left px-4 md:px-6 py-3 md:py-4 border-b-2 md:border-l-2 md:border-b-0 transition-all duration-300 hoverable ${
                    activeCategory === category.id
                      ? 'border-fashion-gold text-fashion-gold'
                      : 'border-transparent text-fashion-beige/70 hover:text-fashion-beige'
                  } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${categories.indexOf(category) * 100 + 200}ms` }}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <h3 className="font-playfair text-lg md:text-xl font-medium">{category.name}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Category content */}
          <div className="md:w-2/3 relative">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`relative transition-all duration-500 ${
                  activeCategory === category.id
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 absolute inset-0 translate-x-10'
                } ${isVisible ? '' : 'opacity-0'}`}
                style={{ transitionDelay: activeCategory === category.id ? '300ms' : '0ms' }}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-auto object-cover hover-zoom"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-8">
                    <h3 className="font-playfair text-2xl text-white mb-3">{category.name}</h3>
                    <p className="text-fashion-beige mb-6">{category.description}</p>
                    <Button className="btn-primary">Explore Collection</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
