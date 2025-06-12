import React from 'react'

const Programmes = () => {
    const imageUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg";
  const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

  const programCategories = [
    {
      title: "Undergraduate",
      subtitle: "Bachelor's Degree Programs",
      tag: "UG",
      duration: "4 Year Programs",
      url: "https://lnctgroup.co.in/undergraduate/",
      tagColorClass: "bg-primary",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-primary"
    },
    {
      title: "Postgraduate",
      subtitle: "Master's Degree Programs",
      tag: "PG",
      duration: "2 Year Programs",
      url: "https://lnctgroup.co.in/postgraduate/",
      tagColorClass: "bg-secondary",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-secondary"
    },
    {
      title: "Doctoral",
      subtitle: "PhD Research Programs",
      tag: "PhD",
      duration: "3-5 Year Programs",
      url: "https://lnctgroup.co.in/doctoral/",
      tagColorClass: "bg-accent",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-accent"
    },
    {
      title: "Professional",
      subtitle: "Certificate & Diploma",
      tag: "CERT",
      duration: "6 Month - 2 Years",
      url: "https://lnctgroup.co.in/professional/",
      tagColorClass: "bg-primary",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-primary"
    },
  ];

  const featuredPrograms = [
    {
      title: "Engineering",
      description: "Computer Science, Mechanical, Civil, Electrical & Electronics",
      tag: "B.Tech/M.Tech",
      duration: "4 Years",
      url: "https://lnctgroup.co.in/engineering/",
      tagColorClass: "text-primary bg-primary/10",
      gradientClass: "from-primary/80",
      hoverTextColorClass: "group-hover:text-primary"
    },
    {
      title: "Management",
      description: "MBA, BBA, Finance, Marketing, HR, Operations",
      tag: "MBA/BBA",
      duration: "2-3 Years",
      url: "https://lnctgroup.co.in/management/",
      tagColorClass: "text-secondary bg-secondary/10",
      gradientClass: "from-secondary/80",
      hoverTextColorClass: "group-hover:text-secondary"
    },
    {
      title: "Medical & Health",
      description: "MBBS, Pharmacy, Nursing, Physiotherapy",
      tag: "MBBS/B.Pharm",
      duration: "4-5 Years",
      url: "https://lnctgroup.co.in/medical/",
      tagColorClass: "text-accent bg-accent/10",
      gradientClass: "from-accent/80",
      hoverTextColorClass: "group-hover:text-accent"
    },
    {
      title: "Arts & Sciences",
      description: "Literature, Psychology, Mathematics, Physics, Chemistry",
      tag: "BA/BSc/MA/MSc",
      duration: "3-4 Years",
      url: "https://lnctgroup.co.in/arts-sciences/",
      tagColorClass: "text-primary bg-primary/10",
      gradientClass: "from-primary/80",
      hoverTextColorClass: "group-hover:text-primary"
    },
  ];

  const programFeatures = [
    {
      icon: "🎓",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      title: "Industry-Aligned Curriculum",
      description: "Programs designed with industry input to ensure job readiness",
    },
    {
      icon: "👨‍🏫",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      title: "Expert Faculty",
      description: "Learn from experienced professionals and renowned academics",
    },
    {
      icon: "🔬",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      title: "Research Opportunities",
      description: "Engage in cutting-edge research and innovation projects",
    },
  ];

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  return (
    <div>
        {/* Custom CSS for animations and colors (typically in a global CSS file or Tailwind config)
          Included here for self-containment in this immersive artifact. */}
      <style>{`
        /* Custom colors - these are illustrative; actual values depend on your Tailwind config */
        .text-primary { color: #4F46E5; } /* indigo-600 */
        .bg-primary { background-color: #4F46E5; }
        .bg-primary\\/10 { background-color: rgba(79, 70, 229, 0.1); }

        .text-secondary { color: #10B981; } /* emerald-500 */
        .bg-secondary { background-color: #10B981; }
        .bg-secondary\\/10 { background-color: rgba(16, 185, 129, 0.1); }

        .text-accent { color: #EC4899; } /* pink-500 */
        .bg-accent { background-color: #EC4899; }
        .bg-accent\\/10 { background-color: rgba(236, 72, 153, 0.1); }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateY(0deg); }
          25% { transform: translateY(-5px) rotateY(1deg); }
          50% { transform: translateY(-10px) rotateY(0deg); }
          75% { transform: translateY(-5px) rotateY(-1deg); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>

      <section id="programs" className="py-20 bg-neutral-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Programs</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our comprehensive range of academic programs designed to prepare you for success in your chosen field.
            </p>
          </div>

          {/* Program Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {programCategories.map((program, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleCardClick(program.url)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={program.title + " Programs"}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, program.title); }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradientClass} via-transparent to-transparent`}></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                    <p className="text-sm opacity-90">{program.subtitle}</p>
                  </div>
                  <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${program.tagColorClass}`}>
                    {program.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">{program.duration}</span>
                    <div className={`w-8 h-8 ${program.tagColorClass}/10 rounded-full flex items-center justify-center group-hover:${program.tagColorClass} group-hover:text-white transition-all duration-300`}>
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Academic Programs Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Featured Academic Programs
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredPrograms.map((program, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-float"
                  style={{ animationDelay: `${index * 150 + 600}ms` }} // Staggered delay for featured programs
                  onClick={() => handleCardClick(program.url)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={program.title + " Programs"}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, program.title); }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.gradientClass} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>
                  <div className="p-6">
                    <h4 className={`text-lg font-bold text-neutral-900 mb-2 transition-colors duration-300 ${program.hoverTextColorClass}`}>
                      {program.title}
                    </h4>
                    <p className="text-sm text-neutral-600 mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded ${program.tagColorClass}`}>{program.tag}</span>
                      <span className="text-xs text-neutral-500">{program.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Features */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
              Why Choose Our Programs?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-2xl ${feature.iconColor}`}>{feature.icon}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-neutral-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-neutral-600 mb-6">
              Ready to start your academic journey? Explore our admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Programmes
