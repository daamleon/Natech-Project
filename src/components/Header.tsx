import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'bg-white/90 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center text-2xl font-bold relative z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
            className='max-h-8'
            src="/natech-2-color.png" alt="" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className={`font-medium transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-orange-400'
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button>Konsultasi Gratis</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2 rounded-lg transition-colors hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col space-y-6">
            {NAV_ITEMS.map((item, index) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-medium text-gray-800 hover:text-orange-400 transition-colors transform hover:translate-x-2 duration-300 flex items-center"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6">
              <Button className="w-full justify-center text-lg py-4">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
          
          {/* Mobile Contact Info */}
          <div className="mt-12 pt-12 border-t border-gray-100">
            <div className="space-y-4 text-gray-600">
              <p>📧 hello@natechproject.com</p>
              <p>📱 +62 812 3456 7890</p>
              <p>⏰ Senin - Jumat: 09:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;