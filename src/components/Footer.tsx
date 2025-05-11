
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-fashion-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <a href="/" className="font-playfair font-bold text-2xl text-fashion-gold">PMC</a>
            </div>
            <p className="text-fashion-beige mb-6 max-w-xs">
              Premium urban streetwear and elegant fashion for those who appreciate quality and distinctive design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#men" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                  Men's Collection
                </a>
              </li>
              <li>
                <a href="#women" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                  Women's Collection
                </a>
              </li>
              <li>
                <a href="#accessories" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-fashion-beige hover:text-fashion-gold transition-colors duration-300 hoverable">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-fashion-gold mr-3 mt-1" />
                <span className="text-fashion-beige">
                  123 Fashion Street, New York, NY 10001, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-fashion-gold mr-3" />
                <span className="text-fashion-beige">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-fashion-gold mr-3" />
                <span className="text-fashion-beige">info@pmcfashion.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-medium mb-6">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-fashion-beige">Monday - Friday:</span>
                <span className="text-white">10:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-fashion-beige">Saturday:</span>
                <span className="text-white">11:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-fashion-beige">Sunday:</span>
                <span className="text-white">12:00 - 16:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-fashion-charcoal mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fashion-beige/70 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} PMC Barber & Fashion. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-fashion-beige/70 text-sm hover:text-fashion-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-fashion-beige/70 text-sm hover:text-fashion-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-fashion-beige/70 text-sm hover:text-fashion-gold transition-colors duration-300">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
