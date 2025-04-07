
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white shadow-sm py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-navy-500">
              Future<span className="text-insurance-accent">Secure</span>Connect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-700 hover:text-navy-500 font-medium transition-colors ${isActive('/') ? 'text-navy-500' : ''}`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className={`flex items-center text-gray-700 hover:text-navy-500 font-medium transition-colors ${location.pathname.includes('/services') ? 'text-navy-500' : ''}`}>
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  All Services
                </Link>
                <Link to="/services/life-insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Life Insurance
                </Link>
                <Link to="/services/health-insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Health Insurance
                </Link>
                <Link to="/services/pension-plans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Pension Plans
                </Link>
                <Link to="/services/child-plans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Child Plans
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-navy-500 font-medium transition-colors ${isActive('/about') ? 'text-navy-500' : ''}`}
            >
              About
            </Link>
            <Link
              to="/achievements"
              className={`text-gray-700 hover:text-navy-500 font-medium transition-colors ${isActive('/achievements') ? 'text-navy-500' : ''}`}
            >
              Achievements
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-navy-500 font-medium transition-colors ${isActive('/contact') ? 'text-navy-500' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-navy-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a href="tel:+91 9414044551" className="flex items-center text-navy-500 hover:text-navy-700 mr-8 transition-colors">
              <Phone size={20} className="mr-2" />
              <span className="font-medium">9414044551</span>
            </a>
            <Button 
              className="bg-navy-500 hover:bg-navy-600 text-white transition-colors"
              onClick={() => navigate('/contact')}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-navy-500 font-medium py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-navy-500 font-medium py-2" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-navy-500 font-medium py-2" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/achievements" className="text-gray-700 hover:text-navy-500 font-medium py-2" onClick={toggleMenu}>
                Achievements
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-navy-500 font-medium py-2" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="pt-4">
                <Button 
                  className="bg-navy-500 hover:bg-navy-600 text-white w-full"
                  onClick={() => {
                    navigate('/contact');
                    toggleMenu();
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
