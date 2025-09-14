import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({}); 
  };

  return (
    <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-md relative">
      {/* Logo */}
      <Link to="/" className="flex items-center z-20">
        <img 
          src={assets.logo} 
          alt="Logo" 
          className="h-10 md:h-12 w-auto"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center space-x-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `font-medium text-gray-700 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`
          }
        >
          {({ isActive }) => (
            <div className="relative">
              <p>HOME</p>
              {isActive && <hr className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 border-0" />}
            </div>
          )}
        </NavLink>
        
        <NavLink 
          to="/collection" 
          className={({ isActive }) => 
            `font-medium text-gray-700 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`
          }
        >
          {({ isActive }) => (
            <div className="relative">
              <p>COLLECTION</p>
              {isActive && <hr className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 border-0" />}
            </div>
          )}
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            `font-medium text-gray-700 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`
          }
        >
          {({ isActive }) => (
            <div className="relative">
              <p>ABOUT</p>
              {isActive && <hr className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 border-0" />}
            </div>
          )}
        </NavLink>
        
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            `font-medium text-gray-700 hover:text-blue-600 transition-colors ${isActive ? 'text-blue-600' : ''}`
          }
        >
          {({ isActive }) => (
            <div className="relative">
              <p>CONTACT</p>
              {isActive && <hr className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 border-0" />}
            </div>
          )}
        </NavLink>
      </ul>

      {/* Right Section - Search, Profile, Cart */}
      <div className="flex items-center space-x-4 md:space-x-6">
        {/* Search Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <img 
            onClick={() => setShowSearch(true)}
            src={assets.search_icon} 
            alt="Search" 
            className="h-5 w-5 md:h-6 md:w-6"
          />
        </button>

        {/* Profile and Cart Container */}
        <div className="flex items-center space-x-4">
          {/* Profile with Dropdown */}
          <div className="relative">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => token ? setIsProfileOpen(!isProfileOpen) : navigate('/login')}
              onBlur={() => setTimeout(() => setIsProfileOpen(false), 500)}
            >
              <img 
                src={assets.profile_icon} 
                alt="Profile" 
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </button>

            {/* Dropdown Menu - Only show if user is logged in */}
            {isProfileOpen && token && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30 border border-gray-200">
                <Link 
                  to="/profile" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  My Profile
                </Link>
                <Link 
                  to="/orders" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Orders
                </Link>
                <button 
                  onClick={logout} 
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart with Badge */}
          <Link 
            to="/cart" 
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <img 
              src={assets.cart_icon} 
              alt="Cart" 
              className="h-5 w-5 md:h-6 md:w-6"
            />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 rounded-md hover:bg-gray-100 z-20"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img 
                src={assets.logo} 
                alt="Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `block font-medium text-lg py-2 px-4 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </NavLink>
            
            <NavLink 
              to="/collection" 
              className={({ isActive }) => 
                `block font-medium text-lg py-2 px-4 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COLLECTION
            </NavLink>
            
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `block font-medium text-lg py-2 px-4 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </NavLink>
            
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `block font-medium text-lg py-2 px-4 rounded-lg ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </NavLink>
          </ul>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-4 mb-6" onClick={() => { setShowSearch(true); setIsMobileMenuOpen(false); }}>
              <img 
                src={assets.search_icon} 
                alt="Search" 
                className="h-6 w-6"
              />
              <span className="text-gray-700">Search</span>
            </div>
            
            <div 
              className="flex items-center space-x-4 mb-6" 
              onClick={() => { token ? setIsProfileOpen(true) : navigate('/login'); setIsMobileMenuOpen(false); }}
            >
              <img 
                src={assets.profile_icon} 
                alt="Profile" 
                className="h-6 w-6"
              />
              <span className="text-gray-700">My Profile</span>
            </div>
            
            <Link 
              to="/cart" 
              className="flex items-center space-x-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <img 
                  src={assets.cart_icon} 
                  alt="Cart" 
                  className="h-6 w-6"
                />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              </div>
              <span className="text-gray-700">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;