import React from 'react';

const Programmes = () => {
  // Public image URL helper
  // const imageUrl = (fileName) => `${process.env.PUBLIC_URL}/lnctprojectpic/${fileName}`;

  const programCategories = [
    {
      title: "Undergraduate",
      subtitle: "Bachelor's Degree Programs",
      tag: "UG",
      duration: "3 - 5 Year Programs",
      url: "https://lnct.ac.in/unleash-your-potential-with-lncts-prestigious-undergraduate-degrees/",
      image: "/Programpics/Undergraduate.jpg",
      tagColorClass: "bg-primary",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-primary"
    },
    {
      title: "Postgraduate",
      subtitle: "Master's Degree Programs",
      tag: "PG",
      duration: "2 Year Programs",
      url: "https://lnct.ac.in/lnct-mba/",
      image: "/Programpics/Post garduate.jpg",
      tagColorClass: "bg-secondary",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-secondary"
    },
    {
      title: "Doctoral",
      subtitle: "Ph.D Research Programs",
      tag: "PhD",
      duration: "3-5 Years",
      url: "https://lnct.ac.in/",
      image: "/Programpics/Doctoral image.jpeg",
      tagColorClass: "bg-accent",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-accent"
    },
    {
      title: "Vocational",
      subtitle: "Diploma and Certificate Courses",
      tag: "Diploma",
      duration: "6 months - 2 Years",
      url: "https://lnctgroup.in/vocational/",
      image: "/Programpics/Vocational Image.jpg",
      tagColorClass: "bg-primary",
      gradientClass: "from-neutral-900/70",
      hoverTextColorClass: "group-hover:text-primary"
    },
  ];

  const featuredPrograms = [
    {
      title: "Engineering",
      description: "B.Tech, M.Tech in CSE, ME, Civil, ECE, EE",
      tag: "B.Tech/M.Tech",
      duration: "4 Years",
      url: "https://lnct.ac.in/#",
      image: "/Programpics/Engineering Image.jpg",
      tagColorClass: "text-primary bg-primary/10",
      gradientClass: "from-primary/80",
      hoverTextColorClass: "group-hover:text-primary"
    },
    {
      title: "Management",
      description: "BBA, MBA in HR, Marketing, Finance",
      tag: "BBA/MBA",
      duration: "3-2 Years",
      url: "https://lnct.ac.in/lnct-mba/",
      image: "/Programpics/Management Image.jpg",
      tagColorClass: "text-secondary bg-secondary/10",
      gradientClass: "from-secondary/80",
      hoverTextColorClass: "group-hover:text-secondary"
    },
    {
      title: "Medical",
      description: "MBBS, Nursing, Physiotherapy",
      tag: "MBBS/BPT",
      duration: "4.5 - 5 Years",
      url: "https://lnctu.ac.in/lnmc/",
      image: "/Programpics/Medical Image.jpg",
      tagColorClass: "text-accent bg-accent/10",
      gradientClass: "from-accent/80",
      hoverTextColorClass: "group-hover:text-accent"
    },
    {
      title: "Pharmacy",
      description: "B.Pharm, M.Pharm, D.Pharm",
      tag: "B.Pharm",
      duration: "2-4 Years",
      url: "https://lnct.ac.in/lnct-pharmacy/",
      image: "/Programpics/Pharma image.jpeg",
      tagColorClass: "text-primary bg-primary/10",
      gradientClass: "from-primary/80",
      hoverTextColorClass: "group-hover:text-primary"
    },
    {
      title: "Ayurveda",
      description: "BAMS - Ayurvedic Medical Sciences",
      tag: "BAMS",
      duration: "5.5 Years",
      url: "https://lnct.ac.in/ayurveda-for-mental-health-addressing-mental-health/",
      image: "/Programpics/Ayurveda.jpg",
      tagColorClass: "text-secondary bg-secondary/10",
      gradientClass: "from-secondary/80",
      hoverTextColorClass: "group-hover:text-secondary"
    },
    {
      title: "Paramedical",
      description: "MLT, Radiology, OT Technology, Optometry",
      tag: "BMLT/BSc",
      duration: "3-4 Years",
      url: "https://lnct.ac.in/health-care/",
      image: "/Programpics/paramedical.webp",
      tagColorClass: "text-accent bg-accent/10",
      gradientClass: "from-accent/80",
      hoverTextColorClass: "group-hover:text-accent"
    },
    {
      title: "Law",
      description: "LLB, BA-LLB, BBA-LLB",
      tag: "LLB",
      duration: "3-5 Years",
      url: "https://lnct.ac.in/lnct-group/",
      image: "/Programpics/law image.webp",
      tagColorClass: "text-primary bg-primary/10",
      gradientClass: "from-primary/80",
      hoverTextColorClass: "group-hover:text-primary"
    },
    {
      title: "Arts & Sciences",
      description: "BA, B.Sc, MA, M.Sc",
      tag: "BA/B.Sc",
      duration: "3-4 Years",
      url: "https://lnct.ac.in/lnct-group/",
      image: "/Programpics/Arts & Science IMage.jpg",
      tagColorClass: "text-secondary bg-secondary/10",
      gradientClass: "from-secondary/80",
      hoverTextColorClass: "group-hover:text-secondary"
    },
  ];

  const handleCardClick = (url) => {
    if (url) window.open(url, '_blank');
  };

  return (
    <div className="py-20 bg-neutral-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Programs</h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our diverse and industry-oriented programs at LNCT Group of Colleges.
          </p>
        </div>

        {/* Program Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programCategories.map((program, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(program.url)}
              className="group bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.gradientClass} via-transparent to-transparent`}></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                  <p className="text-sm opacity-90">{program.subtitle}</p>
                </div>
              </div>
              <div className="p-6 flex items-center justify-between">
                <span className="text-sm text-neutral-500">{program.duration}</span>
                <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${program.tagColorClass}`}>
                  {program.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Programs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">Featured Academic Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPrograms.map((program, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(program.url)}
                className="group bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradientClass} via-transparent to-transparent`}></div>
                </div>
                <div className="p-6">
                  <h4 className={`text-lg font-bold text-neutral-900 mb-2 ${program.hoverTextColorClass}`}>{program.title}</h4>
                  <p className="text-sm text-neutral-600 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded ${program.tagColorClass}`}>{program.tag}</span>
                    <span className="text-xs text-neutral-500">{program.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Programmes;
