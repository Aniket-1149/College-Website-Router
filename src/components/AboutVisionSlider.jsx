import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const visionSlides = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    heading: 'Empowering Future Leaders',
    description: 'LNCT fosters a dynamic academic ecosystem that shapes professionals with leadership, ethics, and technical excellence.',
  },
  {
    image: '/lnctprojectpic/Innovate.webp',
    heading: 'Innovating Through Research',
    description: 'We emphasize cutting-edge research and innovation, fostering a culture of curiosity and impactful problem-solving.',
  },
  {
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
    heading: 'Global Vision & Collaboration',
    description: 'LNCT nurtures global partnerships and multicultural values to prepare students for global opportunities and cultural diversity.',
  },
  {
    image: '/lnctprojectpic/Sustain.webp',
    heading: 'Sustainability & Social Impact',
    description: 'We promote eco-consciousness and social responsibility, integrating sustainability deeply into education and campus life.',
  },
];

const AboutVisionSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % visionSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-inter overflow-hidden">
      {/* Top Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight sm:text-6xl">
          Vision for Tomorrow
        </h1>
        <p className="mt-4 text-xl text-neutral-600 max-w-2xl mx-auto">
          Our commitment to shaping a brighter future.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content Section - Now a Card */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left bg-white p-10 rounded-xl shadow-lg h-[400px] flex flex-col justify-center" // Added p-10, h-full for alignment
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={visionSlides[current].heading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                {visionSlides[current].heading}
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                {visionSlides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Image Section - Now a Card */}
        <motion.div
          className="w-full lg:w-1/2 relative bg-white p-6 rounded-xl shadow-lg flex items-center justify-center h-[400px] overflow-hidden" // Added h-full and overflow-hidden
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={visionSlides[current].image}
              src={visionSlides[current].image}
              alt={visionSlides[current].heading}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/800x500?text=Image+Unavailable";
              }}
              className="w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-12 space-x-3"> {/* Added space-x-3 for spacing between dots */}
        {visionSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-blue-600 w-5' : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutVisionSlider;