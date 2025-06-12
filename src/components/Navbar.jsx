import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: or use your own SVG icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#hero" className="font-Inter text-2xl font-bold text-primary">
            LNCT Group
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <nav className="flex items-center space-x-4">
            {["Home", "About", "Colleges", "Programs", "Achievements", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200 transition-all duration-500">
            <nav className="flex flex-col space-y-1">
              {["Home", "About", "Colleges", "Programs", "Achievements", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  onClick={() => setMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
