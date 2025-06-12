import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Logo.png";
  const placeholderLogoUrl = (width, height, text = 'Logo') =>
    `https://placehold.co/${width}x${height}/000000/FFFFFF?text=${encodeURIComponent(text)}`;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define navigation items
  const navItems = [
    { name: "Home", href: "#hero" }, // Assuming a #hero section for Home
    { name: "About", href: "#about" },
    { name: "Colleges", href: "#colleges" },
    { name: "Programs", href: "#programs" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Custom CSS for animations and colors */}
      <style>{`
        /* Custom colors - these are illustrative; actual values depend on your Tailwind config */
        .text-primary { color: #4F46E5; } /* indigo-600 */
        .bg-primary { background-color: #4F46E5; }

        /* Animation for list item link hover effect (underline) */
        .nav-link-effect {
          position: relative;
          display: inline-block;
          text-decoration: none; /* Ensure no default underline */
        }

        .nav-link-effect::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #FACC15; /* Amber-400 for glowing effect */
          transition: width 0.3s ease-out, left 0.3s ease-out;
          transform: translateX(-50%);
        }

        .nav-link-effect:hover::after {
          width: 100%;
          left: 50%;
        }

        /* Subtle text shadow for "glowing" effect on hover for all nav-link-effect */
        .nav-link-effect:hover {
            text-shadow: 0 0 8px rgba(252, 211, 77, 0.6); /* Amber glow */
        }

        /* Specific style for the LNCT title stroke and glow */
        .logo-text-effect {
            -webkit-text-stroke: 1px #FACC15; /* Yellow stroke */
            text-stroke: 1px #FACC15;
            color: transparent; /* Make fill transparent to show stroke */
            transition: all 0.3s ease-out;
        }

        .logo-text-effect:hover {
            color: white; /* Fill with white on hover */
            text-shadow: 0 0 15px rgba(252, 211, 77, 0.8); /* Stronger amber glow */
            -webkit-text-stroke: 1.5px #FACC15; /* Slightly thicker stroke on hover */
            text-stroke: 1.5px #FACC15;
        }

        /* Ensure .nav-link-effect doesn't override the transparent color for logo initially */
        .logo-text-effect:not(:hover) {
          color: white; /* Default white fill when not hovered */
          -webkit-text-stroke: 0; /* No stroke by default */
          text-stroke: 0;
        }
      `}</style>

      {/* Navbar Container - Dark Theme with rounded bottom border */}
      <div className="bg-neutral-900 shadow-lg font-inter relative top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Name */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img
                src={logoUrl}
                alt="LNCT Logo"
                className="h-8 w-auto"
                onError={(e) => { e.target.onerror = null; e.target.src = placeholderLogoUrl(32, 32); }}
              />
              <a
                href="#hero"
                className="logo-text-effect text-2xl font-bold transition-colors duration-300 transform hover:scale-105"
                // The `nav-link-effect` class is intentionally removed from here
                // to allow for the distinct stroke/glow effect
              >
                LNCT Group Of Colleges
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <nav className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="nav-link-effect text-gray-300 hover:text-amber-300 px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-300"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-neutral-800 border-t border-neutral-700 transition-all duration-500">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-300 hover:text-amber-300 px-3 py-2 text-base font-medium transition-colors duration-300"
                      onClick={() => setMenuOpen(false)} // Close menu on link click
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
