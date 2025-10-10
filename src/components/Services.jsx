import { ArrowRight, Target, Phone, Mail, Calendar, BarChart3, TrendingUp, Users, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Services = () => {
  const serviceCategories = [
    {
      icon: <Target className="h-16 w-16 text-electric-green" />,
      title: "Lead Generation & Prospecting",
      description: "Identify and qualify your ideal customers with precision targeting."
    },
    {
      icon: <Phone className="h-16 w-16 text-electric-green" />,
      title: "Outreach & Sales Development",
      description: "Connect with prospects through multi-channel communication strategies."
    },
    {
      icon: <BarChart3 className="h-16 w-16 text-electric-green" />,
      title: "Paid Advertising & Marketing Systems",
      description: "Scale your reach with high-ROI advertising campaigns."
    }
  ]

  const detailedServices = [
    {
      icon: <Target className="h-12 w-12 text-electric-green" />,
      title: "Lead Generation That Converts",
      subtitle: "We find your ideal customers — and bring them to you.",
      description: "Using premium tools like Apollo, LinkedIn Sales Navigator, and ZoomInfo, we identify your ICP, validate data, and build targeted lead lists that fuel your outreach campaigns.",
      deliverables: [
        "ICP Research & Data Strategy",
        "Verified Leads (B2B & B2C)",
        "CRM Integration Support",
        "Lead Scoring & Qualification"
      ],
      cta: "Get Qualified Leads"
    },
    {
      icon: <Phone className="h-12 w-12 text-electric-green" />,
      title: "Cold Calls That Create Warm Opportunities",
      subtitle: "Our trained experts turn introductions into booked meetings.",
      description: "We connect directly with decision-makers, using proven conversation frameworks that build trust, overcome objections, and secure meetings for your sales team.",
      deliverables: [
        "Call Scripts & Strategy",
        "Live Reporting Dashboard",
        "Performance Tracking",
        "Objection Handling Training"
      ],
      cta: "Book a Call Session"
    },
    {
      icon: <Mail className="h-12 w-12 text-electric-green" />,
      title: "Personalized Email Campaigns That Drive Replies",
      subtitle: "Automation + personalization = results.",
      description: "We craft compelling cold email sequences designed to engage prospects and convert interest into conversations — backed by A/B testing and deliverability optimization.",
      deliverables: [
        "Cold Email Copy & Templates",
        "Campaign Setup & Monitoring",
        "Performance Analytics",
        "Deliverability Optimization"
      ],
      cta: "Start Email Campaign"
    },
    {
      icon: <Calendar className="h-12 w-12 text-electric-green" />,
      title: "Your Calendar, Fully Booked",
      subtitle: "We handle the outreach, you focus on closing.",
      description: "Our expert appointment setters engage, nurture, and qualify leads so you can focus on what matters most — growing your business and closing deals.",
      deliverables: [
        "Multi-Channel Outreach (Call + Email + DM)",
        "Qualification Process",
        "Calendar Integration",
        "Follow-up Sequences"
      ],
      cta: "Let's Fill Your Calendar"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-electric-green" />,
      title: "High-ROI Ad Campaigns That Scale",
      subtitle: "From clicks to conversions — we optimize every step.",
      description: "We design, launch, and manage ad campaigns on Meta and Google that attract ready-to-buy customers while keeping your ROI in focus and scaling efficiently.",
      deliverables: [
        "Audience Targeting",
        "Ad Copy & Creative",
        "Monthly Performance Report",
        "ROI Optimization"
      ],
      cta: "Launch Your Campaign"
    }
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8 text-electric-green" />,
      title: "Transparent Results Dashboard",
      description: "Real-time visibility into campaign performance and ROI."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-electric-green" />,
      title: "100% Custom Growth Frameworks",
      description: "Tailored strategies designed specifically for your business."
    },
    {
      icon: <Users className="h-8 w-8 text-electric-green" />,
      title: "Industry-Wide Expertise",
      description: "Proven success across 40+ different industries."
    },
    {
      icon: <Clock className="h-8 w-8 text-electric-green" />,
      title: "24/7 Client Support",
      description: "Dedicated support team available whenever you need us."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-width mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Growth Engine 
                <span className="text-electric-green"> Starts Here</span>
              </h1>
              <p className="text-xl text-light-text mb-8 max-w-2xl leading-relaxed">
                From lead generation to appointment setting — we craft complete systems 
                that drive real business growth and measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                >
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  className="btn-secondary text-lg px-8 py-4"
                  onClick={() => document.getElementById('services-detail').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-white text-xl font-semibold mb-6">Growth Metrics Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-light-text">Lead Quality Score</span>
                    <span className="text-electric-green font-bold">94%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-electric-green h-2 rounded-full w-[94%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-light-text">Conversion Rate</span>
                    <span className="text-electric-green font-bold">23%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-electric-green h-2 rounded-full w-[23%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-light-text">Client Satisfaction</span>
                    <span className="text-electric-green font-bold">98%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-electric-green h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
              Comprehensive Growth Solutions, Built for Results
            </h2>
            <p className="text-xl text-gray-text max-w-4xl mx-auto">
              Whether you're a startup, real estate agency, or enterprise brand — our systems are 
              built to generate qualified leads, improve conversions, and scale your revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-deep-blue mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section id="services-detail" className="section-padding bg-light-bg">
        <div className="container-width mx-auto">
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} slide-in-left`}>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        {service.icon}
                        <div className="ml-4">
                          <div className="text-sm text-electric-green font-semibold uppercase tracking-wide">
                            Service {index + 1}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-deep-blue mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg text-electric-green mb-4 font-medium">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-text mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-deep-blue mb-3">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-text">
                              <div className="w-2 h-2 bg-electric-green rounded-full mr-3"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="btn-primary">
                        {service.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} slide-in-right`}>
                  <div className="bg-gradient-to-br from-deep-blue to-electric-green rounded-2xl p-8 text-white">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">
                          {index === 0 ? '10,000+' : index === 1 ? '500+' : index === 2 ? '25%' : index === 3 ? '95%' : '3X'}
                        </div>
                        <div className="text-lg opacity-90">
                          {index === 0 ? 'Leads Generated' : index === 1 ? 'Calls Made Daily' : index === 2 ? 'Open Rate' : index === 3 ? 'Show Rate' : 'Average ROI'}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold">
                            {index === 0 ? '94%' : index === 1 ? '23%' : index === 2 ? '8%' : index === 3 ? '78%' : '156%'}
                          </div>
                          <div className="text-sm opacity-80">
                            {index === 0 ? 'Accuracy' : index === 1 ? 'Connect Rate' : index === 2 ? 'Reply Rate' : index === 3 ? 'Conversion' : 'Growth'}
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold">
                            {index === 0 ? '48h' : index === 1 ? '15min' : index === 2 ? '72h' : index === 3 ? '24h' : '30d'}
                          </div>
                          <div className="text-sm opacity-80">
                            {index === 0 ? 'Delivery' : index === 1 ? 'Avg Call' : index === 2 ? 'Response' : index === 3 ? 'Setup' : 'Results'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                Why Businesses Choose TopNotch Growth
              </h2>
              <p className="text-xl text-gray-text mb-8 leading-relaxed">
                We blend human expertise with smart systems. Every campaign we launch is built on 
                precision, personalization, and performance metrics that drive real results.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-electric-green/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-blue mb-2">{item.title}</h3>
                      <p className="text-gray-text">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                className="btn-primary text-lg px-8 py-4 mt-8"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Let's Build Your Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="slide-in-right">
              <div className="bg-light-bg rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-deep-blue mb-6 text-center">
                  Client Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-deep-blue to-electric-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-deep-blue">127%</div>
                    <div className="text-sm text-gray-text">Avg Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-electric-green to-deep-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-deep-blue">98%</div>
                    <div className="text-sm text-gray-text">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-deep-blue to-electric-green rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-deep-blue">40+</div>
                    <div className="text-sm text-gray-text">Industries</div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-electric-green to-deep-blue rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-deep-blue">24/7</div>
                    <div className="text-sm text-gray-text">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding gradient-bg">
        <div className="container-width mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Turn Outreach into Growth?
          </h2>
          <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
            Let's map out a strategy that fits your business and budget. 
            Your growth journey starts with one conversation.
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

export default Services
