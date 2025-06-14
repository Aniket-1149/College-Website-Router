import React, { useState } from 'react';

const Footer = () => {
    const imageUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg";
  const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [showNewsletterSuccess, setShowNewsletterSuccess] = useState(false);
  const [isNewsletterSubmitting, setIsNewsletterSubmitting] = useState(false);

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About Us", url: "#about" },
    { name: "Our Colleges", url: "#colleges" },
    { name: "Academic Programs", url: "#programs" },
    { name: "Achievements", url: "#achievements" },
    { name: "Contact Us", url: "#contact" },
    { name: "Admissions", url: "https://lnct.ac.in/admission-process/" },
    { name: "Student Portal", url:"https://lnct.ac.in/user-login/" },
  ];

  const programsAndServices = [
    { name: "Engineering Programs", url: "https://lnct.ac.in/#" },
    { name: "Management Studies", url: "https://lnct.ac.in/lnct-mba" },
    { name: "Medical", url: "https://lnctu.ac.in/lnmc/" },
    { name: "Arts & Sciences", url: "https://lnct.ac.in/lnct-group/" },
    { name: "Research Programs", url: "https://lnct.ac.in/" },
    { name: "Pharmacy", url: "https://lnct.ac.in/lnct-pharmacy/" },
    { name: "Career Services", url: "https://lnct.ac.in/career/" },
    { name: "Alumni Network", url: "https://lnct.ac.in/eminent-alumni/" },
  ];

  const contactDetails = [
    { icon: "📍", text: "Kalchuri Nagar, Raisen Road\nBhopal, MP 462022", colorClass: "text-primary" },
    { icon: "📞", text: "07556185300", colorClass: "text-secondary", action: "tel:+9107556185300" },
    { icon: "✉️", text: "Info@Lnct.Ac.In", colorClass: "text-accent", action: "mailto:info@lnctgroup.co.in" },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      alert('Please enter a valid email address.'); // Using alert for simplicity, can be replaced by a custom modal
      return;
    }

    setIsNewsletterSubmitting(true);
    // Simulate newsletter subscription
    setTimeout(() => {
      console.log("Subscribed email:", newsletterEmail);
      setNewsletterEmail('');
      setShowNewsletterSuccess(true);
      setIsNewsletterSubmitting(false);
      setTimeout(() => setShowNewsletterSuccess(false), 3000); // Hide success message after 3 seconds
    }, 1500);
  };
  return (
    <div>
        {/* Custom CSS for animations and colors */}
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
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <section id="footer" className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">LNCT Group</h3>
                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  Empowering minds and shaping futures through excellence in education and innovation for over 25 years.
                </p>
              </div>
              
              {/* Educational Excellence Image */}
              <div className="relative rounded-lg overflow-hidden mb-6">
                <img
                  src="/footer/footer2.jpg"
                  alt="Educational Excellence"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 320, 'Educational Excellence'); }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-semibold">Excellence in Teaching</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/LNCTGroupOfCollege" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <span className="text-sm">f</span>
                </a>
                <a href="https://www.instagram.com/lnctgroupofcolleges" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <span className="text-sm">Ig</span>
                </a>
                <a href="https://www.linkedin.com/company/lnct-group-of-colleges-bhopal/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <span className="text-sm">in</span>
                </a>
                <a href="https://www.youtube.com/c/LnctBroadcastingChannel" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <span className="text-sm">yt</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a key={index} href={link.url} className="block text-neutral-300 hover:text-secondary transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                ))}
              </nav>
              
              {/* Professional Environment Image */}
              <div className="relative rounded-lg overflow-hidden mt-8">
                <img
                  src="/footer/footer1.jpeg"
                  alt="Professional Environment"
                  className="w-full h-32 object-cover"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 320, 'Professional Environment'); }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <p className="text-xs font-semibold">Professional Environment</p>
                </div>
              </div>
            </div>

            {/* Programs & Services */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Programs &amp; Services</h4>
              <div className="space-y-3">
                {programsAndServices.map((program, index) => (
                  <a key={index} href={program.url} className="block text-neutral-300 hover:text-secondary transition-colors duration-300 text-sm">
                    {program.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
              
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className={`${detail.colorClass} text-sm mt-1`}>{detail.icon}</span>
                    <div>
                      {detail.action ? (
                        <a href={detail.action} className="text-neutral-300 text-sm hover:underline">
                          {detail.text.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < detail.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </a>
                      ) : (
                        <p className="text-neutral-300 text-sm">
                          {detail.text.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < detail.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-neutral-800 rounded-lg p-6">
                <h5 className="text-white font-semibold mb-3">Newsletter</h5>
                <p className="text-neutral-300 text-sm mb-4">Get updates on admissions, events, and news</p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded font-semibold hover:bg-primary/90 transition-colors duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isNewsletterSubmitting}
                  >
                    {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
                {showNewsletterSuccess && (
                  <p className="text-green-400 text-sm mt-2 text-center">Subscribed successfully!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Footer
