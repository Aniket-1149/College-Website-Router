import React, { useState, useRef } from "react";
import CollegeCard from "./CollegeCard"; // Import the CollegeCard component

const placeholderImageUrl = (width, height, text = "Image Unavailable") =>
  `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(
    text
  )}`;

const Colleges = () => {
  const collegesSectionRef = useRef(null);

  // Consolidated list of unique and relevant colleges/institutions
  // Descriptions are now specifically tailored to what the linked site offers.
  const allCollegesData = [
    // --- First 8 Cards (Images remain unchanged as per request) ---
    {
      id: "lnct-tech",
      name: "LNCT College of Technology",
      description:
        "Visit our main site for comprehensive details on B.Tech, M.Tech, and diploma programs, admission criteria, and vibrant campus life.",
      established: "Est. 1994",
      url: "https://lnct.ac.in/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/lnct_mainpic.jpg",
    },
    {
      id: "lnct-science",
      name: "LNCT & Science",
      description:
        "Explore our diverse range of MBA programs, along with BBA, BCA, and B.Com offerings. Apply online for the upcoming academic year.",
      established: "MBA Programs",
      url: "https://lnct.ac.in/lnct-and-science/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
      image: "public/lnctprojectpic/lnct&S.jpg",
    },
    {
      id: "lnct-excellence",
      name: "LNCT Excellence",
      description:
        "Discover our D.Pharm, B.Pharm, and M.Pharm courses, state-of-the-art research facilities, and detailed admission guidelines.",
      established: "Healthcare",
      url: "https://lnct.ac.in/lnct-excellence-college/",
      tagColorClass: "bg-accent",
      hoverTextColorClass: "group-hover:text-accent",
      image: "public/lnctprojectpic/lnctExcellence.jpg",
    },
    {
      id: "lnct-university-main",
      name: "LNCT University",
      description:
        "Access a wide array of university courses, explore faculty profiles, read research publications, and download admission forms directly.",
      established: "IT & CS",
      url: "https://lnctu.ac.in/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/Lnct_university.jpg",
    },
    {
      id: "lnct-indore",
      name: "LNCT Indore",
      description:
        "Learn more about our engineering, management, and pharmacy programs offered at our vibrant Indore campus.",
      established: "Liberal Arts",
      url: "https://www.lnctgroup.in/lnct-indore/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
      image: "public/lnctprojectpic/lnctIndore.jpg",
    },
    {
      id: "jnct-professional-university",
      name: "JNCT Professional University",
      description:
        "Explore professional degree programs, skill development, and industry-oriented courses at JNCT PU.",
      established: "Professional",
      url: "https://jnctpu.edu.in/",
      tagColorClass: "bg-accent",
      hoverTextColorClass: "group-hover:text-accent",
      image: "public/lnctprojectpic/Jnctbhopal.webp",
    },
    {
      id: "lnct-mca", // Simplified ID
      name: "LNCT MCA",
      description:
        "Find comprehensive details on our Master of Computer Applications (MCA) curriculum, program highlights, and admission procedures.",
      established: "R&D",
      url: "https://lnct.ac.in/mca/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/LNCT_MCA.jpg",
    },
    {
      id: "lnct-pharmacy", // Simplified ID
      name: "LNCT Pharmacy",
      description:
        "Access comprehensive information on our pharmacy courses, state-of-the-art facilities, and diverse academic programs.",
      established: "Masters & PhD",
      url: "https://lnct.ac.in/lnct-pharmacy/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
      image: "public/lnctprojectpic/LNCT_Pharmacy.jpg",
    },

    // --- NEW COLLEGES BASED ON YOUR PROVIDED LINKS (Duplicates and non-colleges removed) ---
    // Images are now from the image_retrieval tool or user uploads
    {
      id: "lnct-vocational-university",
      name: "LNCT Vocational University",
      description:
        "Explore industry-aligned vocational courses, skill development programs, and career-focused education at LNCT VU.",
      established: "Skill-based",
      url: "https://lnctvu.ac.in/",
      tagColorClass: "bg-accent",
      hoverTextColorClass: "group-hover:text-accent",
      image: "public/lnctprojectpic/LNCT_vocotion_university.jpg", // From image_retrieval
    },
    {
      id: "lnct-medical-college-indore",
      name: "LNCT Medical College & Hospital, Indore",
      description:
        "Discover our MBBS programs, advanced medical facilities, research opportunities, and healthcare services.",
      established: "Est. 2009",
      url: "https://indorelnmc.in/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/LNCT_medical_indore.jpg", // From user upload
    },
    {
      id: "jn-college-nursing",
      name: "Jawaharlal Nehru College of Nursing",
      description:
        "Find details on nursing courses, practical training, and career opportunities in healthcare at JNCN.",
      established: "Nursing",
      url: "https://jncn.ac.in/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
      image: "public/lnctprojectpic/JNU_medical.jpg", // From user upload
    },
    {
      id: "cec-bilaspur",
      name: "Central Engineering College Bilaspur",
      description:
        "Find details on engineering disciplines, academic excellence, and campus infrastructure at CEC Bilaspur.",
      established: "Est. 2008",
      url: "https://cecbilaspur.ac.in/",
      tagColorClass: "bg-accent",
      hoverTextColorClass: "group-hover:text-accent",
      image: "public/lnctprojectpic/Central_Engineering_Bilaspur.jpg", // From user upload
    },
    {
      id: "lnct-polytechnic-college",
      name: "LNCT Polytechnic College",
      description:
        "Explore diploma courses in various engineering and technical fields, practical training, and industry linkages.",
      established: "Vocational",
      url: "https://lnctps.in/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/Lnct_university.jpg", // From image_retrieval
    },
    {
      id: "lnct-university-jabalpur",
      name: "LNCT University Jabalpur",
      description:
        "Discover a wide range of undergraduate and postgraduate programs, research facilities, and campus life at LNCTU Jabalpur.",
      established: "Est. 2020",
      url: "https://lnctuj.com/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
      image: "public/lnctprojectpic/LNCT_jabalpur.jpg", // From image_retrieval (reused generic LNCT University image)
    },
    {
      id: "lnct-world-schools",
      name: "LNCT World Schools",
      description:
        "Learn about our K-12 education, curriculum, facilities, and holistic development approach for students.",
      established: "K-12",
      url: "https://lnctworldschools.com/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/LNCT_world_school.jpg", // From image_retrieval
    },
    {
      id: "lnct-rishiraj-institute",
      name: "LNCT Rishiraj Institute of Technology",
      description:
        "Discover engineering and technology programs, faculty expertise, and placement records at LNCT Rishiraj.",
      established: "Technology",
      url: "https://lnctrishiraj.ac.in/",
      tagColorClass: "bg-accent",
      hoverTextColorClass: "group-hover:text-accent",
      image: "public/lnctprojectpic/rishirajCollege.jpg", // From image_retrieval
    },
    {
      id: "lnct-school-pharmacy-indore",
      name: "LNCT School of Pharmacy Indore",
      description:
        "Comprehensive details on pharmacy courses, practical training, and academic excellence at LNCT SOP Indore.",
      established: "Pharmacy",
      url: "https://lnctsopindore.in/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/LNCT Medical College & Sewakunj Hospital Indore.jpg", // From image_retrieval
    },
    {
      id: "clc-homeopathy",
      name: "CLC Homeopathy Medical College",
      description:
        "Explore Bachelor of Homeopathic Medicine and Surgery (BHMS) programs, clinics, and traditional healing approaches.",
      established: "Holistic Health",
      url: "https://clchomeopathy.in/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
      image: "public/lnctprojectpic/CLC_Homopathy.jpg", // From user upload
    },
    {
      id: "lnct-guru",
      name: "LNCT Guru (Educational Portal)",
      description:
        "An educational portal offering resources, learning materials, and updates related to various LNCT group institutions.",
      established: "E-Learning",
      url: "https://lnctguru.com/",
      tagColorClass: "bg-accent",
      hoverTextColorClass: "group-hover:text-accent",
      image: "public/lnctprojectpic/LNCT_Guru.png", // From image_retrieval
    },
    {
      id: "ips-bilaspur",
      name: "IPS Bilaspur (Institute of Professional Studies)",
      description:
        "Discover professional courses, skill-based training, and career development programs at IPS Bilaspur.",
      established: "Vocational",
      url: "https://ipsbilaspur.com/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
      image: "public/lnctprojectpic/ipsbliashpur.jpg", // From user upload
    },
    {
      id: "ln-ayurved-college",
      name: "LN Ayurved College",
      description:
        "Learn about traditional Ayurvedic medicine courses, clinical practices, and holistic healthcare education.",
      established: "Ayurveda",
      url: "https://lnayurvedcollege.com/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
      image: "public/lnctprojectpic/lnct_ayurveda.jpg", // From image_retrieval
    },
  ];

  const initialCardsToShow = 8;
  const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleViewAllPrograms = () => {
    // Increase by a reasonable amount (e.g., 8 more cards) or show all remaining
    setCardsToShow((prev) => Math.min(prev + 8, allCollegesData.length));
  };

  const handleShowLessPrograms = () => {
    setCardsToShow(initialCardsToShow);
    if (collegesSectionRef.current) {
      collegesSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
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

      <section
        id="colleges"
        ref={collegesSectionRef}
        className="py-16 bg-black text-white font-inter"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Colleges
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Explore our diverse range of colleges and institutes, each
              designed to nurture excellence in specialized fields.
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
                Can't find what you're looking for? Explore all our programs and
                campuses.
              </p>
              <div className="flex justify-center gap-4">
                {hasMoreCards && (
                  <button
                    onClick={handleViewAllPrograms}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
                  >
                    View More Programs ({allCollegesData.length - cardsToShow}{" "}
                    remaining)
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
};

export default Colleges;
