import React, { useState } from 'react';
import { Menu, X, BarChart3, LogIn, Home } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to determine NavLink classes based on active state
  const getNavLinkClass = (isActive) => {
    const baseClasses = "group relative px-6 py-2.5 text-white font-medium rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg";
    
    if (isActive) {
      // Active state styling
      return `${baseClasses} bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/40`;
    } else {
      // Inactive state styling
      return `${baseClasses} bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-cyan-600 hover:shadow-blue-500/30`;
    }
  };

  const getLoginNavLinkClass = (isActive) => {
    const baseClasses = "group relative px-6 py-2.5 text-white font-medium rounded-xl border-2 transform hover:scale-105 transition-all duration-300 shadow-lg";
    
    if (isActive) {
      // Active state styling for login
      return `${baseClasses} border-amber-300 bg-amber-400/20 shadow-amber-400/30`;
    } else {
      // Inactive state styling for login
      return `${baseClasses} border-amber-400/60 hover:border-amber-300 bg-transparent hover:bg-amber-400/15 hover:shadow-amber-400/25`;
    }
  };

  const getMobileNavLinkClass = (isActive) => {
    const baseClasses = "w-full group relative px-6 py-3 text-white font-medium rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg";
    
    if (isActive) {
      return `${baseClasses} bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/40`;
    } else {
      return `${baseClasses} bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-cyan-600 hover:shadow-blue-500/30`;
    }
  };

  const getMobileLoginNavLinkClass = (isActive) => {
    const baseClasses = "w-full group relative px-6 py-3 text-white font-medium rounded-xl border-2 transform hover:scale-[1.02] transition-all duration-300 shadow-lg";
    
    if (isActive) {
      return `${baseClasses} border-amber-300 bg-amber-400/20 shadow-amber-400/30`;
    } else {
      return `${baseClasses} border-amber-400/60 hover:border-amber-300 bg-transparent hover:bg-amber-400/15 hover:shadow-amber-400/25`;
    }
  };

  return (
    <nav className="bg-gradient-to-r from-slate-800/95 via-blue-900/95 to-slate-800/95 backdrop-blur-lg border-b border-blue-400/30 sticky top-0 z-50 shadow-lg shadow-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section - Can also be a NavLink to home */}
          <NavLink to="/" className="flex-shrink-0 group cursor-pointer">
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-amber-400 rounded-lg opacity-0 group-hover:opacity-25 blur-xl transition-all duration-700 group-hover:duration-200"></div>
              
              {/* Logo container */}
              <div className="relative flex items-center space-x-3 p-2 rounded-lg group-hover:bg-white/5 transition-all duration-300">
                {/* Feather Icon with gradient and animation */}
                <div className="relative">
                  <svg 
                    className="w-8 h-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" 
                    viewBox="0 0 24 24" 
                    fill="none"
                  >
                    <defs>
                      <linearGradient id="featherGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="50%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" 
                      fill="url(#featherGradient)"
                      className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    />
                    <line x1="16" y1="8" x2="2" y2="22" stroke="url(#featherGradient)" strokeWidth="2" className="group-hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]"/>
                    <line x1="17.5" y1="15" x2="9" y2="15" stroke="#1f2937" strokeWidth="1"/>
                  </svg>
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                </div>
                
                {/* Logo Text */}
                <div className="text-white">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-amber-300 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-blue-200 group-hover:to-amber-200 transition-all duration-500">
                      EDEN
                    </span>
                    <span className="text-lg font-semibold bg-gradient-to-r from-amber-300 via-orange-300 to-red-300 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:via-orange-200 group-hover:to-red-200 transition-all duration-500">
                      ACADS
                    </span>
                  </div>
                  <div className="h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              
              {/* Dashboard NavLink */}
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-25 blur transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Dashboard</span>
                </div>
              </NavLink>

              {/* Login NavLink */}
              <NavLink 
                to="/login" 
                className={({ isActive }) => getLoginNavLinkClass(isActive)}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-15 blur transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-2">
                  <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:to-orange-200">Login</span>
                </div>
              </NavLink>

            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-cyan-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="block h-6 w-6 transform rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transform transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      } absolute top-full left-0 right-0 bg-gradient-to-b from-slate-800/98 via-blue-900/95 to-slate-800/98 backdrop-blur-lg border-b border-blue-400/30 shadow-lg shadow-blue-900/20`}>
        <div className="px-4 py-6 space-y-4">
          
          {/* Mobile Dashboard NavLink */}
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => getMobileNavLinkClass(isActive)}
            onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-25 blur transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center space-x-2">
              <BarChart3 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Dashboard</span>
            </div>
          </NavLink>

          {/* Mobile Login NavLink */}
          <NavLink 
            to="/login" 
            className={({ isActive }) => getMobileLoginNavLinkClass(isActive)}
            onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-15 blur transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center space-x-2">
              <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent group-hover:from-amber-200 group-hover:to-orange-200">Login</span>
            </div>
          </NavLink>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;