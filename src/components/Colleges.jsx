
import React, { useState } from 'react';

const Colleges = () => {
    const imageUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg";
    const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
        `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

    // Initial college data (can be extended with more real data if available)
    const initialCollegesData = [
        {
            name: "LNCT College of Engineering",
            category: "Engineering",
            description: "Premier engineering education with cutting-edge technology and industry partnerships.",
            established: "Est. 1994",
            url: "https://lnctgroup.co.in/lnct-bhopal/",
            tagColorClass: "bg-primary",
            hoverTextColorClass: "group-hover:text-primary"
        },
        {
            name: "LNCT Institute of Management",
            category: "Management",
            description: "Developing future business leaders through innovative management programs.",
            established: "MBA Programs",
            url: "https://lnctgroup.co.in/lnims/",
            tagColorClass: "bg-secondary",
            hoverTextColorClass: "group-hover:text-secondary"
        },
        {
            name: "LNCT College of Pharmacy",
            category: "Pharmacy",
            description: "Excellence in pharmaceutical education and research for healthcare advancement.",
            established: "Healthcare",
            url: "https://lnctgroup.co.in/lncp/",
            tagColorClass: "bg-accent",
            hoverTextColorClass: "group-hover:text-accent"
        },
        {
            name: "LNCT Institute of Technology",
            category: "Technology",
            description: "Advanced technology programs preparing students for the digital future.",
            established: "IT & CS",
            url: "https://lnctgroup.co.in/lnct-indore/",
            tagColorClass: "bg-primary",
            hoverTextColorClass: "group-hover:text-primary"
        },
        {
            name: "LNCT College of Arts & Sciences",
            category: "Liberal Arts",
            description: "Comprehensive liberal arts education fostering critical thinking and creativity.",
            established: "Liberal Arts",
            url: "https://lnctgroup.co.in/lnct-jabalpur/",
            tagColorClass: "bg-secondary",
            hoverTextColorClass: "group-hover:text-secondary"
        },
        {
            name: "LNCT Institute of Design",
            category: "Design",
            description: "Creative design programs nurturing artistic vision and innovative thinking.",
            established: "Creative Arts",
            url: "https://lnctgroup.co.in/lnct-raipur/",
            tagColorClass: "bg-accent",
            hoverTextColorClass: "group-hover:text-accent"
        },
        {
            name: "LNCT Research Institute",
            category: "Research",
            description: "Leading research initiatives driving innovation and scientific advancement.",
            established: "R&D",
            url: "https://lnctgroup.co.in/research/",
            tagColorClass: "bg-primary",
            hoverTextColorClass: "group-hover:text-primary"
        },
        {
            name: "LNCT Graduate Studies",
            category: "Graduate",
            description: "Advanced graduate programs for specialized expertise and professional growth.",
            established: "Masters & PhD",
            url: "https://lnctgroup.co.in/graduate-studies/",
            tagColorClass: "bg-secondary",
            hoverTextColorClass: "group-hover:text-secondary"
        }
    ];

    // Generate 25 additional dummy cards for demonstration
    const dummyColleges = Array.from({ length: 25 }, (_, i) => ({
        name: `Dummy College ${i + 1}`,
        category: `Field ${i % 3 + 1}`,
        description: `This is a dummy description for college ${i + 1}. More details coming soon.`,
        established: `Est. 20XX`,
        url: "#", // Placeholder URL for dummy cards
        tagColorClass: `bg-${['primary', 'secondary', 'accent'][i % 3]}`,
        hoverTextColorClass: `group-hover:text-${['primary', 'secondary', 'accent'][i % 3]}`
    }));

    // Combine initial and dummy data
    const allCollegesData = [...initialCollegesData, ...dummyColleges];

    // State to manage the number of visible cards
    const initialCardsToShow = 8; // Display first 8 cards initially
    const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

    // Handler for college card clicks
    const handleCardClick = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    // Handler for "View All Programs" button click
    const handleViewAllPrograms = () => {
        // Increase the number of cards shown by 25, or show all if less than 25 remain
        setCardsToShow(prev => Math.min(prev + 25, allCollegesData.length));
    };

    const hasMoreCards = cardsToShow < allCollegesData.length;
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

            <section id="colleges" className="py-20 bg-white font-inter">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Colleges</h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                            Explore our diverse range of colleges and institutes, each designed to nurture excellence in specialized fields.
                        </p>
                    </div>

                    {/* College Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {allCollegesData.slice(0, cardsToShow).map((college, index) => (
                            <div
                                key={index} // Using index as key is acceptable here as the list is static, but consider unique IDs for production
                                className={`group relative bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-float`}
                                style={{ animationDelay: `${index * 50}ms` }} // Staggering the float animation for a smoother effect
                                onClick={() => handleCardClick(college.url)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={imageUrl}
                                        alt={college.name}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                        onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, college.name); }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${college.tagColorClass}`}>
                                        {college.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className={`text-xl font-bold text-neutral-900 mb-2 transition-colors duration-300 ${college.hoverTextColorClass}`}>
                                        {college.name}
                                    </h3>
                                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                                        {college.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">{college.established}</span>
                                        <div className={`w-8 h-8 ${college.tagColorClass}/10 rounded-full flex items-center justify-center group-hover:${college.tagColorClass} group-hover:text-white transition-all duration-300`}>
                                            <span className="text-sm">→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA and Load More Button */}
                    {hasMoreCards && (
                        <div className="text-center mt-16">
                            <p className="text-lg text-neutral-600 mb-6">
                                Can't find what you're looking for? Explore all our programs and campuses.
                            </p>
                            <button
                                onClick={handleViewAllPrograms}
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
                            >
                                View More Programs ({allCollegesData.length - cardsToShow} remaining)
                            </button>
                        </div>
                    )}
                </div>
            </section>
        
      
    </div >
  );
}

export default Colleges
