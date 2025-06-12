import React from 'react'

const Achievements = () => {
    const imageUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg";
  const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

  const heroAchievementStats = [
    { value: "98%", label: "Placement Rate", colorClass: "text-accent" },
    { value: "500+", label: "Industry Partners", colorClass: "text-primary" },
    { value: "25+", label: "Years Excellence", colorClass: "text-secondary" },
  ];

  const achievementCategories = [
    {
      title: "Academic Excellence",
      description: "Top university rankings and outstanding academic performance records",
      tag: "Academic",
      info: "NAAC A+ Grade",
      url: "https://lnctgroup.co.in/academic-excellence/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
    },
    {
      title: "Research Innovation",
      description: "Groundbreaking research projects and patents driving technological advancement",
      tag: "Research",
      info: "200+ Patents",
      url: "https://lnctgroup.co.in/research-innovation/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
    },
    {
      title: "Industry Recognition",
      description: "Awards and recognition from leading industry bodies and organizations",
      tag: "Industry",
      info: "50+ Awards",
      url: "https://lnctgroup.co.in/industry-recognition/",
      tagColorClass: "bg-accent",
      hoverTextColorClass: "group-hover:text-accent",
    },
  ];

  const successStories = [
    {
      title: "Global Tech Leaders",
      description: "Our alumni lead innovation at Fortune 500 companies including Google, Microsoft, and Apple.",
      tags: ["Tech Industry", "500+ Placements"],
      url: "https://lnctgroup.co.in/success-stories/",
      hoverTextColorClass: "group-hover:text-primary",
      tagBgColorClass: "bg-primary/10",
      tagTextColorClass: "text-primary"
    },
    {
      title: "Startup Entrepreneurs",
      description: "Alumni have founded 200+ successful startups with combined valuation exceeding $2 billion.",
      tags: ["Entrepreneurship", "200+ Startups"],
      url: "https://lnctgroup.co.in/entrepreneurship/",
      hoverTextColorClass: "group-hover:text-secondary",
      tagBgColorClass: "bg-secondary/10",
      tagTextColorClass: "text-secondary"
    },
  ];

  const impactStatistics = [
    { value: "50,000+", label: "Graduates" },
    { value: "98%", label: "Placement Rate" },
    { value: "500+", label: "Industry Partners" },
    { value: "200+", label: "Research Patents" },
  ];

  const awardsRecognition = [
    { icon: "🏆", title: "NAAC A+ Grade", subtitle: "Highest Academic Rating", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
    { icon: "🎖️", title: "Best Engineering College", subtitle: "State Government Award", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
    { icon: "🌟", title: "Excellence in Research", subtitle: "National Recognition", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
    { icon: "🚀", title: "Innovation Hub", subtitle: "Industry Partnership", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section id="achievements" className="py-20 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Achievements</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Celebrating excellence, innovation, and the remarkable accomplishments of our students and faculty.
            </p>
          </div>

          {/* Hero Achievement */}
          <div className="relative mb-20 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={imageUrl}
              alt="Graduation ceremony celebration"
              className="w-full h-96 object-cover"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 960, 'Graduation Celebration'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl mx-auto px-8 text-white">
                <h3 className="text-4xl font-bold mb-4">50,000+ Graduates</h3>
                <p className="text-xl mb-6">Proud alumni making their mark across industries worldwide</p>
                <div className="flex items-center space-x-8">
                  {heroAchievementStats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${stat.colorClass}`}>{stat.value}</div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievementCategories.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-neutral-50 rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-float"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleCardClick(achievement.url)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={achievement.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, achievement.title); }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${achievement.tagColorClass}`}>
                    {achievement.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold text-neutral-900 mb-2 transition-colors duration-300 ${achievement.hoverTextColorClass}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 bg-neutral-200 px-2 py-1 rounded">{achievement.info}</span>
                    <div className={`w-8 h-8 ${achievement.tagColorClass}/10 rounded-full flex items-center justify-center group-hover:${achievement.tagColorClass} group-hover:text-white transition-all duration-300`}>
                      <span className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Success Stories
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-float"
                  style={{ animationDelay: `${index * 200 + 600}ms` }}
                  onClick={() => handleCardClick(story.url)}
                >
                  <div className="flex">
                    <div className="w-1/3 overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, story.title); }}
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <h4 className={`text-lg font-bold text-neutral-900 mb-2 transition-colors duration-300 ${story.hoverTextColorClass}`}>
                        {story.title}
                      </h4>
                      <p className="text-sm text-neutral-600 mb-4">
                        {story.description}
                      </p>
                      <div className="flex items-center space-x-4">
                        <span className={`text-xs px-2 py-1 rounded ${story.tagBgColorClass} ${story.tagTextColorClass}`}>{story.tags[0]}</span>
                        <span className="text-xs text-neutral-500">{story.tags[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Statistics */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Our Impact in Numbers
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStatistics.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-neutral-900 mb-8">
              Awards &amp; Recognition
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {awardsRecognition.map((award, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-neutral-50 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300"
                  style={{ animationDelay: `${index * 100}ms` }} // Staggered delay for awards
                >
                  <div className={`w-16 h-16 ${award.iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={`text-2xl ${award.iconColorClass}`}>{award.icon}</span>
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-1">{award.title}</h4>
                  <p className="text-xs text-neutral-600">{award.subtitle}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleCardClick("https://lnctgroup.co.in/all-achievements/")} // Placeholder for 'View All Achievements' page
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
            >
              View All Achievements
            </button>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Achievements
