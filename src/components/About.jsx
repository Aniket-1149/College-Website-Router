import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Ensure these imports are present

const About = () => {
  const imageUrl =
    "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg";
  const placeholderImageUrl = (width, height, text = "Image Unavailable") =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(
      text
    )}`;

  // --- Start of Vision For Tomorrow Section's internal components ---
  const visionSlides = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      heading: 'Empowering Future Leaders',
      description: 'LNCT fosters a dynamic academic ecosystem that shapes professionals with leadership, ethics, and technical excellence.',
    },
    {
      image: 'public/lnctprojectpic/Innovate.webp',
      heading: 'Innovating Through Research',
      description: 'We emphasize cutting-edge research and innovation, fostering a culture of curiosity and impactful problem-solving.',
    },
    {
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
      heading: 'Global Vision & Collaboration',
      description: 'LNCT nurtures global partnerships and multicultural values to prepare students for global opportunities and cultural diversity.',
    },
    {
      image: 'public/lnctprojectpic/Sustain.webp',
      heading: 'Sustainability & Social Impact',
      description: 'We promote eco-consciousness and social responsibility, integrating sustainability deeply into education and campus life.',
    },
    {
      image: 'https://images.unsplash.com/photo-1517457375823-bff760341773?q=80&w=1200',
      heading: 'Community & Beyond',
      description: 'Engaging with local and global communities to foster a sense of belonging and contribute positively to society.',
    },
  ];

  const VisionCard = ({ slide, index }) => {
    const ref = useRef(null);
    // Keep 'once: true' for VisionCard as it's a simple one-time reveal
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const cardVariants = {
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
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full p-4"
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col group transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-xl">
          <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.heading}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = placeholderImageUrl(600, 400, slide.heading);
              }}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-blue-700 transition-colors">
              {slide.heading}
            </h3>
            <p className="text-neutral-700 text-base leading-relaxed mb-4">
              {slide.description}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };
  // --- End of Vision For Tomorrow Section's internal components ---


  // --- Architecture Gallery Section's internal components ---
  // Reusable component for each Gallery Item with dynamic scroll-reveal/hide
  const GalleryCard = ({ item, index }) => {
    const ref = useRef(null);
    // *** IMPORTANT CHANGE: `once: false` for GalleryCard ***
    // This allows the cards to animate in AND out of view as you scroll
    const isInView = useInView(ref, { once: false, amount: 0.3 }); // Trigger when 30% in view, re-triggers on scroll out

    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: index * 0.15, // Staggered delay for appearance
        },
      },
    };

    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        // Animate based on isInView status (visible when in view, hidden when out of view)
        animate={isInView ? "visible" : "hidden"}
        key={item.title} // Ensure a unique key for each item
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
  // --- End of Architecture Gallery Section's internal components ---


  return (
    <div className="font-inter">
      {/* ====== TOP SECTION WITH BLACK BACKGROUND ====== */}

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">About</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Pioneering excellence in education for over 25 years, shaping
          tomorrow's leaders through innovation and dedication.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Building Futures Through Education
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              LNCT Group stands as a beacon of educational excellence, committed
              to nurturing minds and fostering innovation across multiple
              disciplines.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our state-of-the-art facilities and world-class faculty create an
              environment where students thrive and achieve their full
              potential.
            </p>
          </div>

          {/* Key Features Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white text-black p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary text-2xl font-bold mb-2">25+</div>
              <div className="font-semibold mb-1">Years of Excellence</div>
              <div className="text-sm text-neutral-700">
                Trusted educational legacy
              </div>
            </div>
            <div className="bg-white text-black p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent text-2xl font-bold mb-2">15+</div>
              <div className="font-semibold mb-1">Campus Locations</div>
              <div className="text-sm text-neutral-700">
                Across multiple cities
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={imageUrl}
            alt="Modern college campus"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImageUrl(1536, 684);
            }}
          />
        </div>
      </div>

      {/* ====== ARCHITECTURE GALLERY SECTION (NOW WITH DYNAMIC SCROLL-REVEAL/HIDE) ====== */}
      <div className="bg-black text-white py-16">
        {/* Architecture Gallery Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Modern Campus Architecture
          </h3>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery Items - Now using the GalleryCard component with `once: false` */}
            {[
              {
                src: "public/lnctprojectpic/Incubation.jpg",
                title: "Incubation Center",
                desc: "State-of-the-art facilities",
              },
              {
                src: "public/lnctprojectpic/idealab.jpg",
                title: "Idea Lab",
                desc: "Collaborative spaces",
              },
              {
                src: "public/lnctprojectpic/Sports-LNCT-12.jpeg",
                title: "Sports Facilities",
                desc: "Champions built, futures take flight.",
              },
              {
                src: "public/lnctprojectpic/lnct lab.jpg",
                title: "Computer Labs",
                desc: "Advanced laboratories",
              },
              {
                src: "public/lnctprojectpic/hostel.jpeg",
                title: "Student Housing",
                desc: "Modern living spaces",
              },
              {
                src: imageUrl, // Reusing main image for Academic Block
                title: "Academic Block",
                desc: "Smart classrooms",
              },
            ].map((item, i) => (
              <GalleryCard key={i} item={item} index={i} /> // Render GalleryCard
            ))}
          </div>
        </div>
      </div>
      {/* ====== END OF ARCHITECTURE GALLERY SECTION ====== */}
    </div>
  );
};

export default About;
