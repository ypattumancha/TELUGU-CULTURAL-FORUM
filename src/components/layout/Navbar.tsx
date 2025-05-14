import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn, User as UserIcon } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/src/assets/TCF.jpg" alt="TCF Logo" className="h-10 w-10" />
            <div>
              <span className="font-heading font-bold text-primary-800 text-xl">Telugu</span>
              <span className="font-heading font-bold text-secondary-500 text-xl"> Cultural Forum</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Events
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
            <NavLink 
              to="/tcs-mart" 
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              TCS Mart
            </NavLink>
          </nav>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors">
                  <UserIcon size={18} />
                  <span className="font-medium">{currentUser.displayName || 'User'}</span>
                  <ChevronDown size={16} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                  >
                    Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="flex items-center space-x-1 text-primary-600 hover:text-primary-800"
                >
                  <LogIn size={18} />
                  <span>Log In</span>
                </Link>
                <Link to="/register" className="btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 transform ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded-md ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}`
            }
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/events" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded-md ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}`
            }
            onClick={closeMenu}
          >
            Events
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded-md ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}`
            }
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded-md ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/tcs-mart" 
            className={({ isActive }) => 
              `block py-2 px-4 rounded-md ${isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700'}`
            }
            onClick={closeMenu}
          >
            TCS Mart
          </NavLink>
          
          <div className="border-t border-gray-100 mt-3 pt-3">
            {currentUser ? (
              <>
                <NavLink
                  to="/profile"
                  className="block py-2 px-4 rounded-md text-gray-700 hover:bg-primary-50"
                  onClick={closeMenu}
                >
                  Profile
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  className="block w-full text-left py-2 px-4 rounded-md text-gray-700 hover:bg-primary-50"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block py-2 px-4 rounded-md text-gray-700 hover:bg-primary-50"
                  onClick={closeMenu}
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="block py-2 px-4 rounded-md bg-primary-600 text-white hover:bg-primary-700 mt-2"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;