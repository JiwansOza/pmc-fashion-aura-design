
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    category: "Men",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Silk Evening Dress",
    category: "Women",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    category: "Accessories",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1980&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Urban Streetwear Hoodie",
    category: "Men",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=1965&auto=format&fit=crop"
  }
];

const NewArrivalsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(item => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
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

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-fashion-charcoal"
    >
      <div className="container mx-auto px-4">
        <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-3">New Arrivals</h2>
          <p className="text-fashion-beige max-w-xl">
            Discover our latest collection featuring premium quality fabrics and contemporary designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`card-hover bg-fashion-dark relative overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover hover-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Button variant="outline" className="mb-2 bg-fashion-dark/30 border-fashion-beige text-white">
                    Quick View
                  </Button>
                  <Button className="bg-fashion-gold text-black hover:bg-fashion-gold/90">
                    Add to Cart
                  </Button>
                </div>
                <button
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-fashion-dark/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-fashion-gold hover:text-black z-10"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Heart 
                    size={18} 
                    fill={favorites.includes(product.id) ? "currentColor" : "none"} 
                  />
                </button>
              </div>
              <div className="p-4">
                <span className="text-sm text-fashion-gold">{product.category}</span>
                <h3 className="font-playfair text-lg text-white mt-1">{product.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-semibold text-white">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Button className="btn-outline group">
            View All Products
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
