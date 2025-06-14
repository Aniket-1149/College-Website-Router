import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion"; // Old: Ensure these imports are present

const About = () => {
  // Old: Common placeholder for images
  const placeholderImageUrl = (width, height, text = "Image Unavailable") =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

  // Old: Image Slider for "Building Futures Through Education" Section
  const buildingFuturesSliderImages = [
    "https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-College-768x509.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/08/Meeting-of-policy-implementation-team.jpg",
    "https://lnct.ac.in/wp-content/uploads/2021/04/Activity-Classes-for-Student-8-768x509.jpg",
    "https://lnct.ac.in/wp-content/uploads/2023/07/Best-College-in-Indian-scaled.jpg",
  ];

  const [currentBuildingFuturesSlide, setCurrentBuildingFuturesSlide] = useState(0);
  const buildingFuturesTouchStartX = useRef(0);
  const buildingFuturesTouchEndX = useRef(0);

  const stats = [
    { value: "25+", label: "Years of Excellence", description: "Trusted educational legacy", colorClass: "text-primary" },
    { value: "15+", label: "Campus Locations", description: "Across multiple cities", colorClass: "text-accent" },
  ];

  // Old: Function to advance to the next slide
  const goToNextBuildingFuturesSlide = () => {
    setCurrentBuildingFuturesSlide((prev) => (prev + 1) % buildingFuturesSliderImages.length);
  };

  // ✅ New: Removed auto-slide useEffect

  // Old: Touch event handlers for slider swipe
  const handleBuildingFuturesTouchStart = (e) => {
    buildingFuturesTouchStartX.current = e.touches[0].clientX;
  };

  const handleBuildingFuturesTouchMove = (e) => {
    buildingFuturesTouchEndX.current = e.touches[0].clientX;
  };

  const handleBuildingFuturesTouchEnd = () => {
    if (buildingFuturesTouchStartX.current - buildingFuturesTouchEndX.current > 50) {
      goToNextBuildingFuturesSlide();
    } else if (buildingFuturesTouchStartX.current - buildingFuturesTouchEndX.current < -50) {
      setCurrentBuildingFuturesSlide((prev) =>
        (prev - 1 + buildingFuturesSliderImages.length) % buildingFuturesSliderImages.length
      );
    }
    buildingFuturesTouchStartX.current = 0;
    buildingFuturesTouchEndX.current = 0;
  };

  // Old: Architecture Gallery Section's internal components
  const GalleryCard = ({ item, index }) => {
    const ref = useRef(null);
    // Old: Trigger when 30% in view, re-triggers on scroll out
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const galleryCardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.15,
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={galleryCardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        key={item.title}
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImageUrl(1080, 640, item.title);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {/* Old: Custom CSS for colors and animations */}
      <style>{`
        .text-primary { color: #4F46E5; }
        .bg-primary { background-color: #4F46E5; }
        .text-secondary { color: #10B981; }
        .bg-secondary { background-color: #10B981; }
        .text-accent { color: #EC4899; }
        .bg-accent { background-color: #EC4899; }

        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.7s ease-out forwards;
        }

        .stat-card-glow:hover {
          box-shadow: 0 0 20px rgba(79, 70, 229, 0.4), 0 0 30px rgba(236, 72, 153, 0.3);
          transform: translateY(-5px) scale(1.02);
          transition: all 0.3s ease-in-out;
        }

        .slider-image-transition {
          transition: transform 1s ease-in-out;
        }
      `}</style>

      {/* Old: About Section */}
      <section id="about" className="py-20 bg-neutral-50 text-neutral-900 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in-scale">
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
                Building Futures Through Education <br />
                
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                LNCT Group stands as a beacon of educational excellence, committed to nurturing minds and fostering innovation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-neutral-200 stat-card-glow cursor-pointer">
                  <div className={`${stat.colorClass} text-4xl font-bold mb-2`}>{stat.value}</div>
                  <div className="text-neutral-900 font-semibold mb-1 text-lg">{stat.label}</div>
                  <div className="text-sm text-neutral-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Old: Image Slider Section */}
          <div className="relative animate-fade-in-scale rounded-2xl overflow-hidden shadow-xl"
            onTouchStart={handleBuildingFuturesTouchStart}
            onTouchMove={handleBuildingFuturesTouchMove}
            onTouchEnd={handleBuildingFuturesTouchEnd}
          >
            <img
              alt="LNCT Campus"
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-2xl slider-image-transition"
              loading="lazy"
              src={buildingFuturesSliderImages[currentBuildingFuturesSlide]}
              key={currentBuildingFuturesSlide}
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1024, 1024, 'Campus Image'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {buildingFuturesSliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBuildingFuturesSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentBuildingFuturesSlide === index ? 'bg-primary' : 'bg-white bg-opacity-50'} transition-colors duration-300`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Old: ARCHITECTURE GALLERY */}
      <section className="bg-neutral-900 text-white py-20 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Modern Campus Architecture</h3>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Explore the innovative design and cutting-edge facilities that define our campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "public/lnctprojectpic/Incubation.jpg", title: "Incubation Center", desc: "State-of-the-art facilities" },
              { src: "public/lnctprojectpic/idealab.jpg", title: "Idea Lab", desc: "Collaborative spaces" },
              { src: "public/lnctprojectpic/Sports-LNCT-12.jpeg", title: "Sports Facilities", desc: "Champions built, futures take flight." },
              { src: "public/lnctprojectpic/lnct lab.jpg", title: "Computer Labs", desc: "Advanced laboratories" },
              { src: "public/lnctprojectpic/hostel.jpeg", title: "Student Housing", desc: "Modern living spaces" },
              { src: "public/lnctprojectpic/Lnct_mainpic.jpg", title: "Academic Block", desc: "Smart classrooms" },
            ].map((item, i) => (
              <GalleryCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
