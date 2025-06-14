import React from 'react';
import { motion, useInView } from 'framer-motion';

const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

const CollegeCard = ({ college, onCardClick, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key={college.id}
            className={`group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                        transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10`}
            onClick={() => onCardClick(college.url)}
        >
            <div className="relative overflow-hidden">
                <img
                    src={college.image} // This is the crucial line
                    alt={college.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, college.name); }} // Fallback
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Category div has been removed from here */}
            </div>
            <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className={`text-xl font-bold text-neutral-900 mb-2 transition-colors duration-300 ${college.hoverTextColorClass}`}>
                    {college.name}
                </h3>
                {/* This paragraph will now display the link-related description */}
                <p className="text-neutral-700 text-base leading-relaxed mb-4 line-clamp-2">
                    {college.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-700 bg-neutral-100 px-2 py-1 rounded">{college.established}</span>
                    <div className={`w-8 h-8 ${college.tagColorClass}/10 rounded-full flex items-center justify-center group-hover:${college.tagColorClass} group-hover:text-white transition-all duration-300`}>
                        <span className="text-sm">→</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CollegeCard;