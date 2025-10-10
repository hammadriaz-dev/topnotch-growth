import { useState, useEffect } from 'react'
import AnimatedNumber from './AnimatedNumber'
import { ArrowRight, TrendingUp, Users, Target, BarChart3, Phone, Mail, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const Home = () => {


  const services = [
    {
      icon: <Target className="h-12 w-12 text-electric-green" />,
      title: "Lead Generation",
      description: "Verified leads. Real conversations."
    },
    {
      icon: <Phone className="h-12 w-12 text-electric-green" />,
      title: "Cold Calling",
      description: "Turning calls into qualified meetings."
    },
    {
      icon: <Mail className="h-12 w-12 text-electric-green" />,
      title: "Email Outreach",
      description: "Messages that get noticed — and answered."
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-electric-green" />,
      title: "Appointment Setting",
      description: "Your calendar, fully booked with qualified prospects."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-electric-green" />,
      title: "Paid Ads Management",
      description: "High-ROI campaigns that scale your business."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-electric-green" />,
      title: "Growth Strategy",
      description: "Data-driven frameworks for sustainable growth."
    }
  ]

  const trustFactors = [
    {
      title: "Data-Driven Approach",
      description: "Every decision backed by analytics and proven methodologies."
    },
    {
      title: "Systematic Growth",
      description: "Strategy before execution. We build systems, not just campaigns."
    },
    {
      title: "Transparent Collaboration",
      description: "Weekly reports and open communication throughout your journey."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="container-width mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Build Predictable Growth Systems — 
                <span className="text-electric-green"> Not Just Leads</span>
              </h1>
              <p className="text-xl text-light-text mb-8 max-w-2xl leading-relaxed">
                Data-driven outreach and sales systems that turn cold prospects into loyal clients — across every industry.
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
                  onClick={() => document.getElementById('services-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="slide-in-right">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-light-text">Lead Generation</span>
                      <span className="text-electric-green font-semibold">+127%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-electric-green h-2 rounded-full w-4/5"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-light-text">Conversion Rate</span>
                      <span className="text-electric-green font-semibold">+89%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-electric-green h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-light-text">Revenue Growth</span>
                      <span className="text-electric-green font-semibold">+156%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-electric-green h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
              Smart Growth Services Tailored for Your Business
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              From lead generation to conversion optimization, we provide comprehensive solutions that drive measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-deep-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.location.href = '/services'}
            >
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="stats-section" className="section-padding bg-deep-blue">
        <div className="container-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Businesses Trust TopNotch Growth
            </h2>
            <p className="text-xl text-light-text max-w-3xl mx-auto">
              We combine proven strategies with cutting-edge technology to deliver consistent, measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {trustFactors.map((factor, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {factor.title}
                </h3>
                <p className="text-light-text leading-relaxed">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-electric-green mb-2">
                <AnimatedNumber value={999999} />+
              </div>
              <div className="text-light-text text-lg">Leads Generated</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-electric-green mb-2">
                <AnimatedNumber value={70000} />+
              </div>
              <div className="text-light-text text-lg">Appointments Booked</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-electric-green mb-2">
                <AnimatedNumber value={100} />+
              </div>
              <div className="text-light-text text-lg">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-width mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-deep-blue rounded-lg p-4 text-white text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-electric-green" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm">Team Members</div>
                  </div>
                  <div className="bg-electric-green rounded-lg p-4 text-white text-center">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">3X</div>
                    <div className="text-sm">Avg ROI</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <Target className="h-8 w-8 mx-auto mb-2 text-deep-blue" />
                    <div className="text-2xl font-bold text-deep-blue">24/7</div>
                    <div className="text-sm text-gray-text">Support</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-deep-blue" />
                    <div className="text-2xl font-bold text-deep-blue">100%</div>
                    <div className="text-sm text-gray-text">Transparent</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                More Than a Lead Gen Agency — We're Your Growth Partners
              </h2>
              <p className="text-xl text-gray-text mb-8 leading-relaxed">
                We blend strategy, psychology, and technology to help brands grow smarter and scale faster. 
                Our systems work across industries — from real estate and SaaS to eCommerce and marketing agencies.
              </p>
              <Button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => window.location.href = '/about'}
              >
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-width mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Growth System Starts with One Conversation
          </h2>
          <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
            Let's map out a data-driven plan to scale your business and turn your potential into performance.
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

export default Home
