import { useState } from 'react'
import { ArrowRight, MapPin, Phone, Mail, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    industry: '',
    services: [],
    message: ''
  })
  const [expandedFaq, setExpandedFaq] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
  }

  const industries = [
    'Real Estate',
    'SaaS',
    'eCommerce',
    'Agency',
    'Technology',
    'Healthcare',
    'Finance',
    'Other'
  ]

  const services = [
    'Lead Generation',
    'Cold Calling',
    'Email Outreach',
    'Appointment Setting',
    'Paid Ads',
    'Growth Strategy'
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
    <div className="min-h-screen pt-20">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Email Us Directly
            </Button>
          </div>
          
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-electric-green"
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

                    <Button type="submit" className="btn-primary w-full text-lg py-3">
                      Submit Inquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    
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
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
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
          <Button 
            className="btn-primary text-xl px-12 py-6 glow-effect"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            Book a Free Strategy Call
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-blue py-12">
        <div className="container-width mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/" className="block text-light-text hover:text-electric-green transition-colors">Home</a>
                <a href="/about" className="block text-light-text hover:text-electric-green transition-colors">About</a>
                <a href="/services" className="block text-light-text hover:text-electric-green transition-colors">Services</a>
                <a href="/contact" className="block text-light-text hover:text-electric-green transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <div className="space-y-2">
                <div className="text-light-text">Lead Generation</div>
                <div className="text-light-text">Cold Calling</div>
                <div className="text-light-text">Email Outreach</div>
                <div className="text-light-text">Appointment Setting</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Industries</h3>
              <div className="space-y-2">
                <div className="text-light-text">Real Estate</div>
                <div className="text-light-text">Technology</div>
                <div className="text-light-text">eCommerce</div>
                <div className="text-light-text">SaaS</div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="text-light-text">hello@topnotchgrowth.com</div>
                <div className="text-light-text">+1 (555) 123-4567</div>
                <div className="text-light-text">Lahore, Pakistan</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center">
            <p className="text-light-text">
              © 2025 TopNotch Growth. Smart Systems. Real Results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
