import React, { useState, useEffect, useRef } from 'react';

const AboutUsSection = () => {
  // New array of images for the slider
  const sliderImages = [
    "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-College-768x509.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/08/Meeting-of-policy-implementation-team.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-8-768x509.jpg",
    "https://lnct.ac.in/wp-content/uploads/2023/07/Best-College-in-Indian-scaled.jpg",
  ];

  const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoSlideIntervalRef = useRef(null);

  const stats = [
    { value: "25+", label: "Years of Excellence", description: "Trusted educational legacy", colorClass: "text-primary" },
    { value: "15+", label: "Campus Locations", description: "Across multiple cities", colorClass: "text-accent" },
  ];

  // Function to advance to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  // Effect for auto-sliding
  useEffect(() => {
    autoSlideIntervalRef.current = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(autoSlideIntervalRef.current);
  }, []);

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
      {/* Custom CSS for colors and animations specific to this section */}
      <style>{`
        /* Custom colors - these are illustrative; actual values depend on your Tailwind config */
        .text-primary { color: #4F46E5; } /* indigo-600 */
        .bg-primary { background-color: #4F46E5; }
        .text-secondary { color: #10B981; } /* emerald-500 */
        .bg-secondary { background-color: #10B981; }
        .text-accent { color: #EC4899; } /* pink-500 */
        .bg-accent { background-color: #EC4899; }

        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.7s ease-out forwards;
        }

        .stat-card-glow:hover {
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.4), 0 0 30px rgba(236, 72, 153, 0.3); /* Primary & Accent glow */
          transform: translateY(-5px) scale(1.02);
          transition: all 0.3s ease-in-out;
        }

        .slider-image-transition {
          transition: transform 1s ease-in-out; /* Smooth transition for image movement */
        }
      `}</style>

      <section id="about-us" className="py-20 bg-neutral-50 text-neutral-900 font-inter"> {/* Changed to light background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content and Stats */}
          <div className="space-y-10 animate-fade-in-scale">
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight"> {/* Adjusted text color */}
                Building Futures Through Education <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Education
                </span>
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed"> {/* Adjusted text color */}
                LNCT Group stands as a beacon of educational excellence, committed to nurturing minds
                and fostering innovation across multiple disciplines.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed"> {/* Adjusted text color */}
                Our state-of-the-art facilities and world-class faculty create an environment where students
                thrive and achieve their full potential.
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-neutral-200 stat-card-glow cursor-pointer" // Adjusted background and border
                >
                  <div className={`${stat.colorClass} text-4xl font-bold mb-2`}>{stat.value}</div>
                  <div className="text-neutral-900 font-semibold mb-1 text-lg">{stat.label}</div> {/* Adjusted text color */}
                  <div className="text-sm text-neutral-600">{stat.description}</div> {/* Adjusted text color */}
                </div>
              ))}
            </div>
          </div>

          {/* Image Slider Section */}
          <div className="relative animate-fade-in-scale rounded-2xl overflow-hidden shadow-xl" style={{ animationDelay: '0.2s' }}
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
               onTouchEnd={handleTouchEnd}
          >
            <img
              alt="LNCT Campus"
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl slider-image-transition"
              loading="lazy"
              src={sliderImages[currentSlide]}
              key={currentSlide} // Key change forces re-render for transition
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1024, 1024, 'Campus Image'); }}
            />
            {/* Overlay for depth and text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

            {/* Slider Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-white bg-opacity-50'} transition-colors duration-300`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
