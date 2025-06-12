import React, { useState, useRef } from 'react';

const Contact = () => {
    const imageUrl = "https://lnct.ac.in/wp-content/uploads/2021/04/lnct-slider2-1536x684.jpg";
  const placeholderImageUrl = (width, height, text = 'Image Unavailable') =>
    `https://placehold.co/${width}x${height}/CCCCCC/333333?text=${encodeURIComponent(text)}`;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFormRef = useRef(null);

  const contactInfo = [
    {
      icon: "📍",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      title: "Main Campus",
      details: ["Kalchuri Nagar, Raisen Road", "Bhopal, Madhya Pradesh 462022"],
    },
    {
      icon: "📞",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      title: "Phone",
      details: ["+91 755 2740800", "+91 755 2740900"],
      action: "tel:+917552740800"
    },
    {
      icon: "✉️",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      title: "Email",
      details: ["info@lnctgroup.co.in", "admissions@lnctgroup.co.in"],
      action: "mailto:info@lnctgroup.co.in"
    },
    {
      icon: "🕒",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
    },
  ];

  const campusLocations = [
    {
      title: "Bhopal Campus",
      subtitle: "Main Campus - Engineering & Management",
      tag: "Main",
      location: "Kalchuri Nagar, Bhopal",
      url: "https://lnctgroup.co.in/bhopal-campus/",
      tagColorClass: "bg-primary",
      hoverTextColorClass: "group-hover:text-primary",
    },
    {
      title: "Indore Campus",
      subtitle: "Technology & Innovation Hub",
      tag: "Tech",
      location: "Indore, Madhya Pradesh",
      url: "https://lnctgroup.co.in/indore-campus/",
      tagColorClass: "bg-secondary",
      hoverTextColorClass: "group-hover:text-secondary",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setValidationMessage('Please fill in all required fields.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationMessage('Please enter a valid email address.');
      return false;
    }
    setValidationMessage('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
      setIsSubmitting(false);
      setIsModalOpen(true); // Show success modal
    }, 1500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleQuickContactCall = () => {
    window.location.href = 'tel:+917552740800';
  };

  const handleQuickContactSchedule = () => {
    setFormData(prev => ({
      ...prev,
      interest: 'campus-visit',
      message: 'I would like to schedule a campus visit.',
    }));
    contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickContactChat = () => {
    setValidationMessage('Live chat feature will be available soon. Please use the contact form or call us directly.');
    setIsModalOpen(true); // Re-use modal for simple messages
  };

  const handleCampusCardClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  return (
    <div>
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section id="contact" className="py-20 bg-neutral-50 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">Contact</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Get in touch with us to start your educational journey or learn more about our programs.
            </p>
          </div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Form */}
            <div ref={contactFormRef} className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-2">Area of Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your area of interest</option>
                    <option value="engineering">Engineering</option>
                    <option value="management">Management</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="arts-sciences">Arts &amp; Sciences</option>
                    <option value="research">Research Programs</option>
                    <option value="campus-visit">Campus Visit</option> {/* Added for schedule visit */}
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your inquiry or questions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information & Image */}
            <div className="space-y-8">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={imageUrl}
                  alt="Student with book on modern campus"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, 'Visit Campus'); }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-1">Visit Our Campus</h4>
                  <p className="text-sm opacity-90">Experience our world-class facilities</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${item.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className={`${item.iconColor} text-xl`}>{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                        {item.details.map((detail, dIndex) => (
                          <p key={dIndex} className="text-neutral-600 text-sm">
                            {item.action ? <a href={item.action} className="hover:underline">{detail}</a> : detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Campus Locations */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-neutral-900 text-center mb-12">
              Our Campus Locations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campusLocations.map((campus, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-float"
                  style={{ animationDelay: `${index * 300}ms` }}
                  onClick={() => handleCampusCardClick(campus.url)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={campus.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = placeholderImageUrl(1080, 640, campus.title); }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold mb-1">{campus.title}</h4>
                      <p className="text-sm opacity-90">{campus.subtitle}</p>
                    </div>
                    <div className={`absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-semibold transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${campus.tagColorClass}`}>
                      {campus.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500">{campus.location}</span>
                      <div className={`w-8 h-8 ${campus.tagColorClass}/10 rounded-full flex items-center justify-center group-hover:${campus.tagColorClass} group-hover:text-white transition-all duration-300`}>
                        <span className="text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-lg mb-8 opacity-90">
              Our admissions team is ready to help you with any questions about programs, applications, or campus visits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleQuickContactCall}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors duration-300 transform hover:scale-105"
              >
                📞 Call Now
              </button>
              <button
                onClick={handleQuickContactSchedule}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
              >
                📅 Schedule Campus Visit
              </button>
              <button
                onClick={handleQuickContactChat}
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300 transform hover:scale-105"
              >
                💬 Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" aria-hidden="false" aria-modal="true">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform scale-100 opacity-100 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {validationMessage ? "Heads Up!" : "Message Sent Successfully!"}
              </h3>
              <p className="text-neutral-600 mb-6">
                {validationMessage || "Thank you for your inquiry. Our team will get back to you within 24 hours."}
              </p>
              <button
                onClick={closeModal}
                className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
              >
                Close
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600 transition-colors duration-300"
              aria-label="Close modal"
            >
              <span className="text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact
