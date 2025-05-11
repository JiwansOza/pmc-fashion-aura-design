
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-fashion-dark/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <button 
            className="md:hidden text-white" 
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
          
          <div className="flex items-center">
            <a 
              href="/" 
              className={`font-playfair font-bold text-2xl md:text-3xl text-fashion-gold transition-all duration-300 ${
                scrolled ? 'scale-90' : 'scale-100'
              }`}
            >
              PMC
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-fashion-gold transition-colors duration-300 hoverable">Home</a>
            <a href="#men" className="text-white hover:text-fashion-gold transition-colors duration-300 hoverable">Men</a>
            <a href="#women" className="text-white hover:text-fashion-gold transition-colors duration-300 hoverable">Women</a>
            <a href="#accessories" className="text-white hover:text-fashion-gold transition-colors duration-300 hoverable">Accessories</a>
            <a href="#contact" className="text-white hover:text-fashion-gold transition-colors duration-300 hoverable">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-fashion-gold transition-colors duration-300 hoverable">
              <User size={20} />
            </button>
            <button 
              className="text-white hover:text-fashion-gold transition-colors duration-300 relative hoverable"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-fashion-emerald flex items-center justify-center text-xs text-black">
                0
              </span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-full bg-fashion-dark z-[60] transform transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-10">
            <span className="font-playfair font-bold text-2xl text-fashion-gold">PMC</span>
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} className="text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            <a href="#" className="text-xl text-white hover:text-fashion-gold transition-colors duration-300" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#men" className="text-xl text-white hover:text-fashion-gold transition-colors duration-300" onClick={() => setMenuOpen(false)}>Men</a>
            <a href="#women" className="text-xl text-white hover:text-fashion-gold transition-colors duration-300" onClick={() => setMenuOpen(false)}>Women</a>
            <a href="#accessories" className="text-xl text-white hover:text-fashion-gold transition-colors duration-300" onClick={() => setMenuOpen(false)}>Accessories</a>
            <a href="#contact" className="text-xl text-white hover:text-fashion-gold transition-colors duration-300" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
      
      {/* Cart Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-fashion-dark z-[60] transform transition-transform duration-500 ease-in-out ${
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl border-l border-fashion-gold/20`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-playfair font-bold text-xl text-white">Your Cart</h2>
            <button onClick={() => setCartOpen(false)}>
              <X size={20} className="text-white" />
            </button>
          </div>
          
          <div className="py-10 text-center">
            <p className="text-fashion-beige/70 mb-6">Your cart is empty</p>
            <Button className="btn-primary">Shop Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
