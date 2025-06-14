import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion";

const Achievements = () => {
    // Placeholder image URLs for robustness
    const imageUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg"; // Example central image
    const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
        `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

    // Core high-level statistics (for the main hero section)
    const heroAchievementStats = [
        { value: "98%", label: "Placement Rate", colorClass: "text-accent", targetValue: 98 },
        { value: "500+", label: "Industry Partners", colorClass: "text-primary", targetValue: 500 },
        { value: "25+", label: "Years Excellence", colorClass: "text-secondary", targetValue: 25 },
    ];

    // General success narratives (e.g., alumni impact) - REVERTED TO PREVIOUS STYLE
    const successStories = [
        {
            title: "Global Tech Leaders",
            description: "Our alumni lead innovation at Fortune 500 companies including Google, Microsoft, and Apple.",
            tags: ["Tech Industry", "500+ Placements"],
            hoverTextColorClass: "group-hover:text-primary",
            tagBgColorClass: "bg-primary/10",
            tagTextColorClass: "text-primary",
            imageSrc: imageUrl, // Using general image for simplicity or specific if provided
        },
        {
            title: "Startup Entrepreneurs",
            description: "Alumni have founded 200+ successful startups with combined valuation exceeding $2 billion.",
            tags: ["Entrepreneurship", "200+ Startups"],
            hoverTextColorClass: "group-hover:text-secondary",
            tagBgColorClass: "bg-secondary/10",
            tagTextColorClass: "text-secondary",
            imageSrc: imageUrl, // Using general image for simplicity or specific if provided
        },
    ];

    // Overall impact statistics (for dynamic numbers)
    const initialImpactStats = [
        { value: "50,000+", label: "Graduates", target: 50000, current: 0, suffix: "+" },
        { value: "98%", label: "Placement Rate", target: 98, current: 0, suffix: "%" },
        { value: "500+", label: "Industry Partners", target: 500, current: 0, suffix: "+" },
        { value: "200+", label: "Research Patents", target: 200, current: 0, suffix: "+" },
    ];

    const [impactStatistics, setImpactStatistics] = useState(initialImpactStats);
    const impactStatsRef = useRef(null);
    const impactStatsInView = useInView(impactStatsRef, { once: true, amount: 0.5 }); // Trigger animation once when 50% in view

    useEffect(() => {
        if (impactStatsInView) {
            impactStatistics.forEach((stat, index) => {
                let start = 0;
                const end = stat.target;
                const duration = 2000; // milliseconds
                let startTime = null;

                const animateCount = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const progress = (currentTime - startTime) / duration;

                    if (progress < 1) {
                        const newCount = Math.min(end, Math.ceil(progress * end));
                        setImpactStatistics(prevStats => {
                            const newStats = [...prevStats];
                            newStats[index] = { ...newStats[index], current: newCount };
                            return newStats;
                        });
                        requestAnimationFrame(animateCount);
                    } else {
                        setImpactStatistics(prevStats => {
                            const newStats = [...prevStats];
                            newStats[index] = { ...newStats[index], current: end };
                            return newStats;
                        });
                    }
                };
                requestAnimationFrame(animateCount);
            });
        }
    }, [impactStatsInView]);


    // Detailed achievement data based on the provided list
    const prestigiousAwards = [
        { icon: "🏆", title: "Dr. A.P.J. Abdul Kalam Inspiration Award 2023", subtitle: "Most Trusted Education Brand in MP", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "🏅", title: "ATAL Achievement Awards 2022", subtitle: "Highest Placement in Central India", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "✨", title: "Global Education Achievement Awards 2022", subtitle: "Best Educational Group in MP", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
        { icon: "🎓", title: "Collegedunia Education Awards 2024", subtitle: "Excellence in Higher Education (Central Zone)", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "🌟", title: "Iconic Education Summit 2021", subtitle: "Best Private Engg. Educational Group (Central India)", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "📖", title: "Competition Success Review 2021", subtitle: "Excellence in Education", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
        { icon: "🎖️", title: "ASSOCHAM National Excellence Award (2015)", subtitle: "Recognized for Education Excellence", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "🛡️", title: "News18 BizNext 2019", subtitle: "Most Trusted Education Brand (MP)", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
    ];

    const rankingsAccreditations = [
        { icon: "📈", title: "Outlook 2022 Ranking", subtitle: "#1 Private Engg. College (Central India), #38 in India", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
        { icon: "📰", title: "India Today 2021 Ranking", subtitle: "#1 in MP, #50 in India", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "🏛️", title: "NIRF 2021 Ranking", subtitle: "#184 nationally", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "✅", title: "NAAC A+ Grade", subtitle: "Highest Academic Rating", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "📜", title: "NBA Accreditation", subtitle: "Accredited in 2003, 2007, 2017", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
        { icon: "📄", title: "ISO 9001 Certification", subtitle: "Commitment to Quality Management Systems", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "💻", title: "TCS B-Level Accreditation", subtitle: "Recognized by Tata Consultancy Services", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "✨", title: "Pioneering Status", subtitle: "First self-financed engineering college in MP; multiple firsts", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
    ];

    const innovationCompetitive = [
        { icon: "💡", title: "Smart India Hackathon Nodal Center", subtitle: "Consistently hosted national-level hackathons (SIH)", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "🥇", title: "SIH National Winners", subtitle: "Numerous victories in SIH (2017–2023) across software & hardware", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "🔒", title: "Kavach Hackathon 2023", subtitle: "Winner of the prestigious Kavach Hackathon", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
        { icon: "🔬", title: "STEM Competition Finalist 2021", subtitle: "Finalist in national STEM competition", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "⚙️", title: "AICTE IDEA Lab", subtitle: "Selected for AICTE IDEA Lab 2021", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "📚", title: "RGPV Approved Research Centers", subtitle: "Fostering advanced research and development", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
        { icon: "📣", title: "National Conferences Organized", subtitle: "Actively organizes and hosts national-level conferences", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
    ];

    const placementIndustryHighlights = [
        { icon: "📈", title: "Exceptional Placements", subtitle: "90%+ placement rate, 125+ recruiters annually; Day-one offers ~800+", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "💲", title: "Top Recruiters & Packages", subtitle: "Includes Amazon, Microsoft; alumni achieved ₹1 Cr packages abroad", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "🤝", title: "Strong MOUs", subtitle: "Partnerships with TCS, Oracle, Ericsson, Infosys, Amdocs, Wipro, etc.", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
        { icon: "🏅", title: "Industry Certifications", subtitle: "Oracle, Red Hat, AWS, EC-Council, Pearson-VUE programs", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "📜", title: "Wipro & NASSCOM Certifications (2024)", subtitle: "961 Gold / 234 Silver / 96 Bronze Wipro & NASSCOM certifications", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
    ];

    const studentLifeSports = [
        { icon: "🎉", title: "Vibrant Student Culture", subtitle: "Active student community with various clubs and events", iconColorClass: "text-primary", iconBgClass: "bg-primary/10" },
        { icon: "🎤", title: "LNUniverse 2025 Fest", subtitle: "Annual cultural fest featuring prominent industry speakers", iconColorClass: "text-secondary", iconBgClass: "bg-secondary/10" },
        { icon: "🏅", title: "Sports Champions", subtitle: "Winners of various Inter-University and State-level Sports Championships", iconColorClass: "text-accent", iconBgClass: "bg-accent/10" },
    ];

    // Card component for animating sections with zoom effect
    const AnimatedCard = ({ children, index }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false, amount: 0.3 }); // Trigger when 30% in view

        const cardVariants = {
            hidden: { opacity: 0, y: 50, scale: 0.95 }, // Start slightly smaller
            visible: {
                opacity: 1,
                y: 0,
                scale: 1, // Zoom to normal size
                transition: {
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1, // Stagger animation
                },
            },
        };

        return (
            <motion.div
                ref={ref}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        );
    };


    return (
        <div>
            {/* Custom CSS for animations and colors (can be moved to a global CSS file or Tailwind config) */}
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

        /* New animation for cards popping out */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards;
        }
      `}</style>

            <section id="achievements" className="py-20 bg-black text-white font-inter">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Achievements & Milestones</h2>
                        <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                            Celebrating excellence, innovation, and the remarkable accomplishments of our students, faculty, and the institution as a whole.
                        </p>
                    </div>

                    {/* Hero Achievement - Prominent display of key stats */}
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

                    {/* Prestigious Awards Section - Detailed awards */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            Prestigious Awards & Accolades
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {prestigiousAwards.map((award, index) => (
                                <AnimatedCard key={index} index={index}>
                                    <div
                                        className="text-center p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className={`w-16 h-16 ${award.iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <span className={`text-2xl ${award.iconColorClass}`}>{award.icon}</span>
                                        </div>
                                        <h4 className="font-semibold text-white mb-1">{award.title}</h4>
                                        <p className="text-xs text-neutral-400">{award.subtitle}</p>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>

                    {/* Rankings & Accreditations Section - Institutional recognition */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            Rankings & Quality Accreditations
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {rankingsAccreditations.map((item, index) => (
                                <AnimatedCard key={item.title} index={index}>
                                    <div
                                        className="text-center p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className={`w-16 h-16 ${item.iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <span className={`text-2xl ${item.iconColorClass}`}>{item.icon}</span>
                                        </div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-neutral-400">{item.subtitle}</p>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>

                    {/* Innovation & Competitive Excellence Section - Hackathons, research, etc. */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            Innovation & Competitive Excellence
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {innovationCompetitive.map((item, index) => (
                                <AnimatedCard key={item.title} index={index}>
                                    <div
                                        className="text-center p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className={`w-16 h-16 ${item.iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <span className={`text-2xl ${item.iconColorClass}`}>{item.icon}</span>
                                        </div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-neutral-400">{item.subtitle}</p>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>

                    {/* Placements & Industry Collaboration Section - Career success */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            Placements & Industry Collaboration
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {placementIndustryHighlights.map((item, index) => (
                                <AnimatedCard key={item.title} index={index}>
                                    <div
                                        className="text-center p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className={`w-16 h-16 ${item.iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <span className={`text-2xl ${item.iconColorClass}`}>{item.icon}</span>
                                        </div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-neutral-400">{item.subtitle}</p>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>

                    {/* Student Life & Sports Section - Campus vibrancy */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            Vibrant Student Life & Sports
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {studentLifeSports.map((item, index) => (
                                <AnimatedCard key={item.title} index={index}>
                                    <div
                                        className="text-center p-6 bg-neutral-900 rounded-lg border border-neutral-700 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className={`w-16 h-16 ${item.iconBgClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                            <span className={`text-2xl ${item.iconColorClass}`}>{item.icon}</span>
                                        </div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-xs text-neutral-400">{item.subtitle}</p>
                                    </div>
                                </AnimatedCard>
                            ))}
                        </div>
                    </div>

                    {/* Success Stories - REVERTED TO PREVIOUS STYLE */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-white text-center mb-12">
                            Our Alumni's Success Stories
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {successStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-neutral-900 rounded-xl shadow-lg border border-neutral-700 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl opacity-0 animate-fadeInUp"
                                    style={{ animationDelay: `${index * 200 + 600}ms` }}
                                >
                                    <div className="flex">
                                        <div className="w-1/3 overflow-hidden">
                                            <img
                                                src={story.imageSrc || imageUrl}
                                                alt={story.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                                onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, story.title); }}
                                            />
                                        </div>
                                        <div className="w-2/3 p-6">
                                            <h4 className={`text-lg font-bold text-white mb-2 transition-colors duration-300 ${story.hoverTextColorClass}`}>
                                                {story.title}
                                            </h4>
                                            <p className="text-sm text-neutral-400 mb-4">
                                                {story.description}
                                            </p>
                                            <div className="flex items-center space-x-4">
                                                <span className={`text-xs px-2 py-1 rounded ${story.tagBgColorClass} ${story.tagTextColorClass}`}>{story.tags[0]}</span>
                                                <span className="text-xs text-neutral-300">{story.tags[1]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Statistics - Key performance indicators with dynamic numbers */}
                    <div ref={impactStatsRef} className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-16">
                        <h3 className="text-3xl font-bold text-center mb-12">
                            Our Impact in Numbers
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {impactStatistics.map((stat, index) => (
                                <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                                    <div className="text-4xl font-bold mb-2">
                                        {impactStatsInView ? stat.current.toLocaleString() : "0"}
                                        {stat.suffix}
                                    </div>
                                    <div className="text-sm opacity-90">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* "View All Achievements" button (now purely decorative) */}
                    <div className="text-center">
                        <button
                            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 transform hover:scale-105"
                        >
                            Explore All Milestones
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Achievements;