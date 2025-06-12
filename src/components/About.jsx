import React from 'react'

const About = () => {
     const imageUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg";
     const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;
  return (
   <div className="min-h-screen bg-gray-50 py-16 font-inter">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">About</h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Pioneering excellence in education for over 25 years, shaping tomorrow's leaders through innovation and dedication.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-neutral-900">
              Building Futures Through Education
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              LNCT Group stands as a beacon of educational excellence, committed to nurturing minds and fostering innovation across multiple disciplines.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Our state-of-the-art facilities and world-class faculty create an environment where students thrive and achieve their full potential.
            </p>
          </div>

          {/* Key Features Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary text-2xl font-bold mb-2">25+</div>
              <div className="text-neutral-900 font-semibold mb-1">Years of Excellence</div>
              <div className="text-sm text-neutral-600">Trusted educational legacy</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent text-2xl font-bold mb-2">15+</div>
              <div className="text-neutral-900 font-semibold mb-1">Campus Locations</div>
              <div className="text-sm text-neutral-600">Across multiple cities</div>
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
            onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1536, 684); }}
          />
        </div>
      </div>

      {/* Architecture Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
          Our Modern Campus Architecture
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gallery Item 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img
              src={imageUrl}
              alt="Innovation Center"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Innovation Center'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Innovation Center</h4>
                <p className="text-sm">State-of-the-art facilities</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img
              src={imageUrl}
              alt="Central Hub"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Central Hub'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Central Hub</h4>
                <p className="text-sm">Collaborative spaces</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img
              src={imageUrl}
              alt="Cultural Center"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Cultural Center'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Cultural Center</h4>
                <p className="text-sm">Arts &amp; creativity</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 4 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img
              src={imageUrl}
              alt="Research Towers"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Research Towers'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Research Towers</h4>
                <p className="text-sm">Advanced laboratories</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 5 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img
              src={imageUrl}
              alt="Student Housing"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Student Housing'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Student Housing</h4>
                <p className="text-sm">Modern living spaces</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 6 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <img
              src={imageUrl}
              alt="Academic Block"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Academic Block'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-semibold">Academic Block</h4>
                <p className="text-sm">Smart classrooms</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative order-2 lg:order-1">
          <img
            src={imageUrl}
            alt="Worm's-eye view of concrete building architecture"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            loading="lazy"
            onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Vision for Tomorrow'); }}
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-neutral-900">
              Vision for Tomorrow
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Our commitment extends beyond traditional education, embracing technology and innovation to prepare students for the challenges of tomorrow.
            </p>
          </div>

          {/* Mission Points */}
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Excellence in Education</h4>
                <p className="text-neutral-600">Delivering world-class academic programs</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Innovation &amp; Research</h4>
                <p className="text-neutral-600">Fostering cutting-edge research initiatives</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-1">Global Perspective</h4>
                <p className="text-neutral-600">Preparing students for global opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default About
