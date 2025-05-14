import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/src/assets/tcf-logo.svg" alt="TCF Logo" className="h-10 w-10" />
              <div>
                <span className="font-heading font-bold text-white text-xl">Telugu</span>
                <span className="font-heading font-bold text-secondary-400 text-xl"> Cultural Forum</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Uniting the Telugu community in Canada through cultural celebrations, 
              sports activities and community engagement since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/tcs-mart" className="text-gray-300 hover:text-white transition-colors">
                  TCS Mart
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-secondary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">+1 (905) 213-9145</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-secondary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">teluguculturalforum@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-secondary-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Oshawa, Ontario, Canada</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest events and community news.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full px-4 py-2 rounded-md bg-primary-800 border border-primary-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              />
              <button 
                type="submit" 
                className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-primary-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Telugu Cultural Forum. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;