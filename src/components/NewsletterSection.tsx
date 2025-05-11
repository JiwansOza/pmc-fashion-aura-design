
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
      toast.success("Successfully subscribed to our newsletter!", {
        position: "bottom-center",
      });
    }, 1500);
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
      className="py-20 bg-fashion-dark relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(26,31,44,0.9), rgba(26,31,44,0.95)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1770&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white mb-4">
            Stay in the <span className="text-gradient">Loop</span>
          </h2>
          <p className="text-fashion-beige mb-8">
            Subscribe to our newsletter for exclusive offers, early access to new collections, and style inspiration.
          </p>

          <form onSubmit={handleSubmit} className="relative">
            <div
              className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
              onMouseEnter={() => inputRef.current?.focus()}
            >
              <div className="relative flex-1">
                <Input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="bg-white/10 border-fashion-gold/30 text-white placeholder:text-white/50 focus:border-fashion-gold h-12 transition-all duration-300"
                  required
                />
                <div className="absolute bottom-0 left-0 h-0.5 bg-fashion-gold transition-all duration-500" style={{ 
                  width: email ? '100%' : '0%',
                  opacity: email ? '1' : '0'
                }} />
              </div>
              <Button
                type="submit"
                className="bg-fashion-gold text-black hover:bg-fashion-gold/90 h-12"
                disabled={isSubscribing}
              >
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>

          <p className="mt-4 text-sm text-fashion-beige/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
