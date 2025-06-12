import React from "react";

const HeroSection = () => {
  const stats = [
    { value: "25+", label: "Years of Excellence", color: "text-accent" },
    { value: "50,000+", label: "Students Graduated", color: "text-primary" },
    { value: "15+", label: "Campus Locations", color: "text-secondary" },
    { value: "100+", label: "Programs Offered", color: "text-accent" },
  ];

  return (
    <div  
      id="hero"
      className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-black"
      style={{
        backgroundImage: `url('https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white">
        {/* Hero Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="font-Inter text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">LNCT Group Of Colleges</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              of Colleges
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-Inter text-xl sm:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Empowering minds, shaping futures through excellence in education and innovation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-8 py-4 bg-primary text-white font-Inter font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25">
              <span className="relative z-10">Explore Our Colleges</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button className="group px-8 py-4 border-2 border-white text-white font-Inter font-semibold rounded-lg transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-105">
              Learn More
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
            {stats.map(({ value, label, color }, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className={`font-Inter text-3xl sm:text-4xl font-bold ${color}`}>{value}</div>
                <div className="font-Inter text-neutral-400 text-sm sm:text-base">{label}</div>
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
  );
};

export default HeroSection;
