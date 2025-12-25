import { useState, useEffect } from 'react'
import { ArrowRight, MapPin, Phone, Mail, Clock, Star, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react'

// -------------------------------------------------------------
// Simplified Mock Components (ONLY for structure/form elements)
// -------------------------------------------------------------
// NOTE: The separate Button component has been removed entirely to prevent duplication.
const Card = ({ children, className }) => <div className={`rounded-2xl ${className}`}>{children}</div>
const CardContent = ({ children, className }) => <div className={className}>{children}</div>
const Input = ({ name, value, onChange, placeholder, required, className, type = 'text' }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={`w-full p-3 rounded-lg text-deep-blue bg-white border ${className}`}
  />
)
const Textarea = ({ name, value, onChange, placeholder, rows, className }) => (
  <textarea
    name="message"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    className={`w-full p-3 rounded-lg text-deep-blue bg-white border ${className}`}
  ></textarea>
)

// Define the Google Calendar configuration
const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/AcZssZ1KKwKHvRZzLO2VsgHc57HM8ohjLRxYf_nqSIw=?gv=true';
const BUTTON_COLOR = '#50fa7b'; // Match the electric-green theme

// -------------------------------------------------------------
// Dedicated Hook for Google Script Loading (Optimized for one-time injection)
// -------------------------------------------------------------
const useGoogleCalendarLoader = (targetId, buttonLabel) => {
  useEffect(() => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Check 1: Prevent duplicates by seeing if the button is already there
    if (targetElement.querySelector('.gcal-scheduling-btn')) {
      return;
    }

    const loadButton = () => {
      if (window.calendar && window.calendar.schedulingButton) {
        // Double-check just before loading
        if (targetElement.querySelector('.gcal-scheduling-btn')) return;

        window.calendar.schedulingButton.load({
          url: GOOGLE_CALENDAR_URL,
          color: BUTTON_COLOR,
          label: buttonLabel,
          target: targetElement,
        });
      }
    };

    // 1. Load CSS (if not present)
    if (!document.querySelector('link[href*="scheduling-button-script.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    // 2. Load JS (if not present)
    let script = document.querySelector('script[src*="scheduling-button-script.js"]');

    if (!script) {
      script = document.createElement('script');
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      document.head.appendChild(script);
      script.onload = loadButton; // Load button after script loads
    } else if (window.calendar && window.calendar.schedulingButton) {
      loadButton(); // Script already loaded, load button immediately
    }
  }, [targetId, buttonLabel]);
};

// -------------------------------------------------------------
// Hero Buttons Component (ONLY ONE BOOK BUTTON + ONE EMAIL BUTTON)
// -------------------------------------------------------------
const HeroButtons = () => {
  useGoogleCalendarLoader('book-call-hero-target', 'Book a Strategy Call');

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">

      {/* 1. GOOGLE CALENDAR BUTTON TARGET (The PRIMARY Button) */}
      <div
        id="book-call-hero-target"
        className="flex-center min-h-[56px] order-1 sm:order-none"
      >
        {/* Google Calendar button is injected here */}
      </div>

      {/* 2. EMAIL BUTTON (The Secondary Button - using a standard button element) */}
      <button
        type="button"
        className="rounded-lg font-semibold transition-all duration-300 shadow-lg btn-secondary text-lg px-8 py-4 order-2 sm:order-none"
        onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
      >
        Email Us Directly
        <ArrowRight className="ml-2 h-5 w-5 inline-block" />
      </button>

    </div>
  );
}

// -------------------------------------------------------------
// Final CTA Button Component (ONLY ONE BOOK BUTTON)
// -------------------------------------------------------------
const FinalCTAButton = () => {
  // Load the CTA button specifically for this target
  useGoogleCalendarLoader('book-call-cta-target', 'Book a Free Strategy Call');

  return (
    <div
      id="book-call-cta-target"
      className="flex-center min-h-[72px] mx-auto w-fit glow-effect"
    >
      {/* Google Calendar button is injected here */}
    </div>
  );
}


// -------------------------------------------------------------
// Main Contact Component
// -------------------------------------------------------------
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', company: '', industry: '', services: [], message: ''
  })
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)

    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 4000)

    setFormData({
      fullName: '', email: '', company: '', industry: '', services: [], message: ''
    });
  }

  const industries = [
    'Real Estate', 'SaaS', 'eCommerce', 'Agency', 'Technology', 'Healthcare', 'Finance', 'Other'
  ]

  const services = [
    'Lead Generation', 'Cold Calling', 'Email Outreach', 'Appointment Setting', 'Paid Ads', 'Growth Strategy'
  ]

  const faqs = [
    {
      question: "How long does it take to start seeing results?",
      answer: "Most clients start seeing qualified leads within 2-3 weeks of campaign launch. However, optimal results typically develop over 4-6 weeks as we refine targeting and messaging based on initial performance data."
    },
    {
      question: "Do you work with startups or only established businesses?",
      answer: "We work with businesses of all sizes, from early-stage startups to enterprise companies. Our strategies are tailored to your specific stage of growth, budget, and objectives."
    },
    {
      question: "Can I get a customized package?",
      answer: "Absolutely! Every client receives a customized growth strategy based on their unique needs, industry, and goals. We don't believe in one-size-fits-all solutions."
    },
    {
      question: "What's your onboarding process?",
      answer: "Our onboarding includes: (1) Strategy call to understand your goals, (2) ICP research and campaign setup, (3) Content creation and approval, (4) Campaign launch with real-time monitoring, (5) Weekly performance reviews and optimization."
    }
  ]

  const trustBadges = [
    { icon: <Star className="h-6 w-6" />, text: "100+ Campaigns Delivered" },
    { icon: <Star className="h-6 w-6" />, text: "Avg. 3X ROI for Clients" },
    { icon: <Star className="h-6 w-6" />, text: "50+ Industries Served" }
  ]

  return (
    <div className="min-h-screen pt-20 font-inter">
      {/* Custom Styles for Tailwind Classes */}
      <style>
        {`
          /* Custom Color/Layout Definitions */
          .font-inter { font-family: 'Inter', sans-serif; }
          .hero-gradient { background: linear-gradient(135deg, #0f172a, #1e293b); }
          .section-padding { padding: 6rem 1rem; }
          .container-width { max-width: 1200px; padding-left: 1rem; padding-right: 1rem; }
          .text-electric-green { color: #50fa7b; }
          .border-electric-green { border-color: #50fa7b; }
          .focus\\:border-electric-green:focus { border-color: #50fa7b; }
          .text-light-text { color: #cbd5e1; }
          .text-deep-blue { color: #0f172a; }
          .bg-deep-blue { background-color: #0f172a; }
          .bg-light-bg { background-color: #f8fafc; }
          .text-gray-text { color: #64748b; }
          .gradient-bg { background: linear-gradient(90deg, #1e293b, #0f172a); }

          /* Button Styling for consistency and target container */
          .btn-secondary { background-color: transparent; border: 2px solid #50fa7b; color: #50fa7b; transition: background-color 0.3s, border-color 0.3s, color 0.3s; }
          .btn-secondary:hover { background-color: #50fa7b1a; }
          .glow-effect { box-shadow: 0 0 15px rgba(80, 250, 123, 0.7); }
          .flex-center { display: flex; justify-content: center; align-items: center; }

          /* Google Calendar Button Customizations (Matching existing Button styles) */
          /* Ensures the container for the injected button is styled */
          #book-call-hero-target .gcal-scheduling-btn,
          #book-call-cta-target .gcal-scheduling-btn {
              padding: 1rem 2.5rem !important; /* px-8 py-4 */
              border-radius: 0.5rem !important; /* rounded-lg */
              font-size: 1.125rem !important; /* text-lg */
              text-transform: none !important; /* Keep capitalization natural */
              font-weight: 600 !important; /* font-semibold */
              min-width: 200px;
              box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          }
        `}
      </style>


      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-width mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 fade-in">
            Let's Talk
            <span className="text-electric-green"> Growth</span>
          </h1>
          <p className="text-xl text-light-text mb-6 max-w-3xl mx-auto leading-relaxed">
            We're ready to help you generate more leads, close more deals, and scale faster —
            no matter your industry or current stage of growth.
          </p>
          <p className="text-lg text-light-text mb-8">
            Reach out to us using the form below, or book a free strategy session to get started.
          </p>

          {/* --- HERO BUTTONS - ONLY ONE GOOGLE CALL BUTTON + ONE EMAIL BUTTON --- */}
          <HeroButtons />

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 text-light-text">
                <div className="text-electric-green">
                  {badge.icon}
                </div>
                <span className="text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Form & Info Section */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-deep-blue mb-6">
                    Tell Us About Your Business
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-deep-blue mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-gray-300 focus:border-electric-green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-blue mb-2">
                          Business Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@company.com"
                          required
                          className="border-gray-300 focus:border-electric-green"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-deep-blue mb-2">
                          Company Name
                        </label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="border-gray-300 focus:border-electric-green"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-blue mb-2">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-electric-green"
                        >
                          <option value="">Select your industry</option>
                          {industries.map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-deep-blue mb-3">
                        Services of Interest (select all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map(service => (
                          <label key={service} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="text-electric-green focus:ring-electric-green"
                              style={{ width: '1rem', height: '1rem', accentColor: '#50fa7b' }}
                            />
                            <span className="text-sm text-gray-text">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-deep-blue mb-2">
                        Tell us what you're looking for...
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your current challenges, goals, and what you'd like to achieve..."
                        rows={4}
                        className="border-gray-300 focus:border-electric-green"
                      />
                    </div>

                    {/* Form Submit Button (Standard React/HTML button) */}
                    <button type="submit" className="rounded-lg font-semibold transition-all duration-300 shadow-lg btn-primary w-full text-lg py-3 bg-electric-green text-deep-blue hover:bg-green-400">
                      Submit Inquiry
                      <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                    </button>

                    <p className="text-sm text-gray-text text-center">
                      We'll get back to you within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>


            </div>

            {/* Contact Info */}
            <div className="slide-in-right">
              <Card className="border-0 shadow-lg bg-light-bg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-deep-blue mb-6">
                    Contact Details
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-electric-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue mb-1">Office</h4>
                        <p className="text-gray-text">Lahore, Pakistan</p>
                        <p className="text-sm text-gray-text">(Expanding globally)</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue mb-1">Phone</h4>
                        <p className="text-gray-text">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-electric-green rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue mb-1">Email</h4>
                        <p className="text-gray-text">hello@topnotchgrowth.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-deep-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue mb-1">Working Hours</h4>
                        <p className="text-gray-text">Mon–Fri: 10:00 AM – 6:00 PM CST</p>
                        <p className="text-gray-text">Sat–Sun: By Appointment Only</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-semibold text-deep-blue mb-4">Why Choose Us?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-electric-green rounded-full"></div>
                        <span className="text-gray-text">100+ Campaigns Delivered</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-electric-green rounded-full"></div>
                        <span className="text-gray-text">Avg. 3X ROI for Clients</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-electric-green rounded-full"></div>
                        <span className="text-gray-text">50+ Industries Served</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-width mx-auto text-center">
          <h2 className="text-4xl font-bold text-deep-blue mb-6">
            Find Us
          </h2>
          <p className="text-xl text-gray-text mb-8">
            We work with clients globally, but here's where our story started.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gradient-to-br from-deep-blue to-electric-green rounded-xl p-12 text-white text-center">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Global Reach, Local Expertise</h3>
              <p className="text-lg opacity-90 mb-6">
                Based in Lahore, Pakistan • Serving clients worldwide
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">US</div>
                  <div className="text-sm opacity-80">North America</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">UK</div>
                  <div className="text-sm opacity-80">Europe</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">UAE</div>
                  <div className="text-sm opacity-80">Middle East</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">PK</div>
                  <div className="text-sm opacity-80">South Asia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-blue mb-6">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Here are some common questions about our services and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <h3 className="font-semibold text-deep-blue pr-4">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-electric-green flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-text leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="section-padding gradient-bg">
        <div className="container-width mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something Extraordinary Together
          </h2>
          <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
            Book your free 30-minute consultation today — no obligations, just strategy
            and actionable insights for your business growth.
          </p>
          {/* ONLY ONE GOOGLE CALL BUTTON TARGET */}
          <FinalCTAButton />
        </div>
      </section>



      {/* Custom Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-deep-blue text-white p-4 rounded-xl shadow-2xl flex items-center space-x-3 transition-opacity duration-300 z-50">
          <CheckCircle className="h-6 w-6 text-electric-green" />
          <p className="font-medium">Thank you! Your inquiry has been submitted successfully.</p>
        </div>
      )}
    </div>
  )
}

export default Contact