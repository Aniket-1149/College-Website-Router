import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  // Array of image URLs for the slider
  const sliderImages = [
    "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg",
    "https://lnctu.ac.in/wp-content/uploads/2024/09/LNCT-A-scaled-1-1024x528.jpg",
    "https://lnctu.ac.in/wp-content/uploads/2021/05/School-Of-Commerce-Economics.jpg",
    "https://lnctu.ac.in/wp-content/uploads/2021/05/Best-Private-University-in-Central-India-18.jpg",
    "https://images.shiksha.com/mediadata/images/1491288936phpqGhLRd.jpeg",
    "https://openthemagazine.com/wp-content/uploads/2023/07/LNCT.jpg",
  ];

  const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideIntervalRef = useRef(null);

  // Statistics data for the hero section
  const stats = [
    { value: "25+", label: "Years of Excellence", color: "text-accent" },
    { value: "50,000+", label: "Students Graduated", color: "text-primary" },
    { value: "15+", label: "Campus Locations", color: "text-secondary" },
    { value: "100+", label: "Programs Offered", color: "text-accent" },
  ];

  // Function to advance to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  // Function to go to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  // Effect for auto-sliding
  useEffect(() => {
    autoSlideIntervalRef.current = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(autoSlideIntervalRef.current);
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  // Reset auto-slide timer when slide changes manually or automatically
  useEffect(() => {
    clearInterval(autoSlideIntervalRef.current);
    autoSlideIntervalRef.current = setInterval(goToNextSlide, 5000);
  }, [currentSlide]);

  // Touch event handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      goToNextSlide();
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      goToPrevSlide();
    }
    // Reset touch coordinates
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <>
      {/* Custom CSS for colors and animations specific to Hero Section */}
      <style>{`
        /* Custom colors - these are illustrative; actual values depend on your Tailwind config */
        .text-primary { color: #4F46E5; } /* indigo-600 */
        .bg-primary { background-color: #4F46E5; }
        .text-secondary { color: #10B981; } /* emerald-500 */
        .bg-secondary { background-color: #10B981; }
        .text-accent { color: #EC4899; } /* pink-500 */
        .bg-accent { background-color: #EC4899; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        /* Animation for the "LNCT Group Of Colleges" text fill */
        .lnct-text-fill-effect {
          transition: color 0.3s ease-in-out;
        }

        .lnct-text-fill-effect:hover {
          color: #FACC15; /* Amber-300 for the fill color */
        }

        /* Glow effect for subheading */
        .subheading-glow {
          transition: text-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .subheading-glow:hover {
          text-shadow: 0 0 15px rgba(0, 191, 255, 0.7); /* Neon Blue glow */
          transform: scale(1.02); /* Pop out effect */
        }
      `}</style>

      <div
        id="hero"
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
        style={{
          backgroundImage: `url('${sliderImages[currentSlide]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out", // Smooth transition for background image change
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center text-white">
          {/* Hero Content */}
          <div className="space-y-6 animate-fade-in"> {/* Reduced space-y for closer elements */}
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block lnct-text-fill-effect">LNCT Group Of Colleges</span>

            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed subheading-glow">
              Empowering minds, shaping futures through excellence in education and innovation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => {
                  document.getElementById("colleges").scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
              >
                <span className="relative z-10">Explore Our Colleges</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>


              <a href="https://lnct.ac.in/" target="_blank" rel="noopener noreferrer">
                <button className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-105">
                  Learn More
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
              {stats.map(({ value, label, color }, index) => (
                <div
                  key={index}
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className={`text-3xl sm:text-4xl font-bold ${color}`}>{value}</div>
                  <div className="text-neutral-400 text-sm sm:text-base">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
