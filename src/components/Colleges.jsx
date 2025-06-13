// src/components/Colleges.jsx
import React, { useState, useRef } from 'react';
import CollegeCard from './CollegeCard'; // Import the new component

// Re-add placeholderImageUrl here for dummyColleges generation
const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

const Colleges = () => {
    const collegesSectionRef = useRef(null);

    // IMPORTANT: Make sure your college data has unique 'id' properties
    const initialCollegesData = [
        {
            id: 'lnct-tech', // Unique ID
            name: "LNCT College of Technology",
            category: "Engineering",
            description: "Premier engineering education with cutting-edge technology and industry partnerships.",
            established: "Est. 1994",
            url: "https://lnct.ac.in/",
            tagColorClass: "bg-primary",
            hoverTextColorClass: "group-hover:text-primary",
            image: "public/lnctprojectpic/lnct_mainpic.jpg"
        },
        {
            id: 'lnct-science', // Unique ID
            name: "LNCT & Science",
            category: "Management",
            description: "Developing future business leaders through innovative management programs.",
            established: "MBA Programs",
            url: "https://lnct.ac.in/lnct-and-science/",
            tagColorClass: "bg-secondary",
            hoverTextColorClass: "group-hover:text-secondary",
            image: "public/lnctprojectpic/lnct&S.jpg"
        },
        {
            id: 'lnct-excellence', // Unique ID
            name: "LNCT Excellence",
            category: "Pharmacy",
            description: "Excellence in pharmaceutical education and research for healthcare advancement.",
            established: "Healthcare",
            url: "https://lnct.ac.in/lnct-excellence-college/",
            tagColorClass: "bg-accent",
            hoverTextColorClass: "group-hover:text-accent",
            image: "public/lnctprojectpic/lnctExcellence.jpg"
        },
        {
            id: 'lnct-university', // Unique ID
            name: "LNCT University",
            category: "Technology",
            description: "Advanced technology programs preparing students for the digital future.",
            established: "IT & CS",
            url: "https://lnctu.ac.in/",
            tagColorClass: "bg-primary",
            hoverTextColorClass: "group-hover:text-primary",
            image: "public/lnctprojectpic/Lnct_university.jpg"
        },
        {
            id: 'lnct-indore', // Unique ID
            name: "LNCT Indore",
            category: "Liberal Arts",
            description: "Comprehensive liberal arts education fostering critical thinking and creativity.",
            established: "Liberal Arts",
            url: "https://www.lnctgroup.in/lnct-indore/",
            tagColorClass: "bg-secondary",
            hoverTextColorClass: "group-hover:text-secondary",
            image: "public/lnctprojectpic/lnctIndore.jpg"
        },
        {
            id: 'lnct-design', // Unique ID
            name: "JNCT Bhopal",
            category: "Design",
            description: "Creative design programs nurturing artistic vision and innovative thinking.",
            established: "Creative Arts",
            url: "https://lnctgroup.co.in/lnct-raipur/",
            tagColorClass: "bg-accent",
            hoverTextColorClass: "group-hover:text-accent",
            image: "public/lnctprojectpic/Jnctbhopal.webp"
        },
        {
            id: 'lnct-research', // Unique ID
            name: "LNCT MCA",
            category: "Research",
            description: "Leading research initiatives driving innovation and scientific advancement.",
            established: "R&D",
            url: "https://lnct.ac.in/mca/",
            tagColorClass: "bg-primary",
            hoverTextColorClass: "group-hover:text-primary",
            image: "public/lnctprojectpic/LNCT_MCA.jpg"
        },
        {
            id: 'lnct-graduate', // Unique ID
            name: "LNCT Pharmacy",
            category: "Graduate",
            description: "Advanced graduate programs for specialized expertise and professional growth.",
            established: "Masters & PhD",
            url: "https://lnct.ac.in/lnct-pharmacy/",
            tagColorClass: "bg-secondary",
            hoverTextColorClass: "group-hover:text-secondary",
            image: "public/lnctprojectpic/LNCT_Pharmacy.jpg"
        }
    ];

    const dummyColleges = Array.from({ length: 25 }, (_, i) => ({
        id: `dummy-college-${i + 1}`, // Ensure truly unique IDs
        name: `Dummy College ${i + 1}`,
        category: `Field ${(i % 3) + 1}`,
        description: `This is a dummy description for college ${i + 1}. More details coming soon.`,
        established: `Est. 20${5 + i}`,
        url: "#",
        tagColorClass: `bg-${['primary', 'secondary', 'accent'][i % 3]}`,
        hoverTextColorClass: `group-hover:text-${['primary', 'secondary', 'accent'][i % 3]}`,
        image: placeholderImageUrl(400, 200, `Dummy College ${i + 1} Image`)
    }));

    const allCollegesData = [...initialCollegesData, ...dummyColleges];

    const initialCardsToShow = 8;
    const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

    const handleCardClick = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    const handleViewAllPrograms = () => {
        setCardsToShow(prev => Math.min(prev + 25, allCollegesData.length));
    };

    const handleShowLessPrograms = () => {
        setCardsToShow(initialCardsToShow);
        if (collegesSectionRef.current) {
            collegesSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const hasMoreCards = cardsToShow < allCollegesData.length;
    const showLessButtonVisible = cardsToShow > initialCardsToShow;

    return (
        <div>
            {/* Custom CSS for animations and colors (keep this in Colleges.jsx or a global file) */}
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

            <section id="colleges" ref={collegesSectionRef} className="py-16 bg-black text-white font-inter">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-center text-white mb-12">Colleges</h2>
                        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                            Explore our diverse range of colleges and institutes, each designed to nurture excellence in specialized fields.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {allCollegesData.slice(0, cardsToShow).map((college, index) => (
                            <CollegeCard
                                key={college.id} // Use the unique ID as the key
                                college={college}
                                onCardClick={handleCardClick}
                                index={index} // Pass index for stagger animation
                            />
                        ))}
                    </div>

                    {(hasMoreCards || showLessButtonVisible) && (
                        <div className="text-center mt-16">
                            <p className="text-lg text-neutral-300 mb-6">
                                Can't find what you're looking for? Explore all our programs and campuses.
                            </p>
                            <div className="flex justify-center gap-4">
                                {hasMoreCards && (
                                    <button
                                        onClick={handleViewAllPrograms}
                                        className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
                                    >
                                        View More Programs ({allCollegesData.length - cardsToShow} remaining)
                                    </button>
                                )}
                                {showLessButtonVisible && (
                                    <button
                                        onClick={handleShowLessPrograms}
                                        className="bg-neutral-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-neutral-600 transition-colors duration-300 transform hover:scale-105"
                                    >
                                        Show Less
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Colleges;