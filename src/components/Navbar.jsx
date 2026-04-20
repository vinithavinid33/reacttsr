import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm sticky top-0 w-full z-40">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-blue-900 dark:text-white font-headline flex items-center shrink-0">
          <img 
            className="w-24 md:w-32 lg:w-40 h-auto inline-block" 
            src="/images/Logo_V002-01.png" 
            alt="TSR Logo" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <Link
            to="/"
            className={`px-2 py-1 transition-all duration-300 ${
              isActive('/') 
                ? 'text-blue-900 dark:text-amber-500 border-b-2 border-amber-500' 
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-2 py-1 transition-all duration-300 ${
              isActive('/about') 
                ? 'text-blue-900 dark:text-amber-500 border-b-2 border-amber-500' 
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`px-2 py-1 transition-all duration-300 ${
              isActive('/services') 
                ? 'text-blue-900 dark:text-amber-500 border-b-2 border-amber-500' 
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white'
            }`}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className={`px-2 py-1 transition-all duration-300 ${
              isActive('/projects') 
                ? 'text-blue-900 dark:text-amber-500 border-b-2 border-amber-500' 
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white'
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`px-2 py-1 transition-all duration-300 ${
              isActive('/contact') 
                ? 'text-blue-900 dark:text-amber-500 border-b-2 border-amber-500' 
                : 'text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-900 dark:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white rounded-b-lg shadow-lg p-6 z-50 md:hidden">
          <ul className="flex flex-col items-center space-y-4 font-bold">
            <li>
              <Link 
                to="/" 
                onClick={closeMenu} 
                className="text-blue-900 hover:text-slate-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                onClick={closeMenu} 
                className="text-slate-600 hover:text-blue-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                onClick={closeMenu} 
                className="text-slate-600 hover:text-blue-900 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                onClick={closeMenu} 
                className="text-slate-600 hover:text-blue-900 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={closeMenu} 
                className="text-slate-600 hover:text-blue-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;