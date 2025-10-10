import { ArrowRight, Target, Rocket, Shield, Lightbulb, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-electric-green" />,
      title: "Integrity First",
      description: "We believe in transparency, honesty, and long-term relationships built on trust and mutual success."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-electric-green" />,
      title: "Data Over Guesswork",
      description: "Every decision is backed by insights and analytics. We let the numbers guide our strategies."
    },
    {
      icon: <Users className="h-12 w-12 text-electric-green" />,
      title: "Client Success = Our Success",
      description: "Your growth defines ours — we win together. Your success is our primary measure of achievement."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-electric-green" />,
      title: "Innovation Always",
      description: "We stay ahead of trends to keep our clients ahead of the market with cutting-edge strategies."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-width mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 fade-in">
            We Don't Just Generate Leads — 
            <span className="text-electric-green"> We Build Growth Machines</span>
          </h1>
          <p className="text-xl text-light-text mb-8 max-w-4xl mx-auto leading-relaxed">
            TopNotch Growth empowers businesses across industries with performance-driven systems 
            that attract, convert, and retain clients through data-backed strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Let's Talk Growth
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              className="btn-secondary text-lg px-8 py-4"
              onClick={() => window.location.href = '/services'}
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="slide-in-left">
              <div className="relative">
                <div className="bg-gradient-to-br from-deep-blue to-electric-green rounded-2xl p-8 text-white">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Mission Focused</div>
                        <div className="text-sm opacity-90">Growth-driven strategies</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Results Oriented</div>
                        <div className="text-sm opacity-90">Measurable outcomes</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-semibold">Client Centric</div>
                        <div className="text-sm opacity-90">Your success first</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-in-right">
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-text leading-relaxed">
                <p>
                  TopNotch Growth was founded with one goal — to help businesses grow smarter, not harder. 
                  After years in sales, marketing, and outreach across multiple industries, we saw the gap: 
                  companies were chasing leads instead of building sustainable growth systems.
                </p>
                <p>
                  Today, we bridge that gap with proven strategies, data-backed insights, and a relentless 
                  focus on results. From real estate to SaaS, our mission remains simple — to turn potential 
                  into performance through systematic, scalable growth frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-light-bg">
        <div className="container-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Driving our commitment to excellence and innovation in every client relationship.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-electric-green rounded-full flex items-center justify-center mr-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-blue">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-text leading-relaxed">
                  To empower businesses of every size to grow through data-driven outreach, 
                  meaningful relationships, and conversion-focused strategies that deliver 
                  sustainable, measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-deep-blue rounded-full flex items-center justify-center mr-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-blue">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-text leading-relaxed">
                  To become the world's most trusted growth partner — where every lead, 
                  call, and campaign creates measurable impact and drives long-term 
                  business success across all industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
              The Principles Behind Every Campaign
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              Our core values guide every decision, strategy, and client interaction, 
              ensuring consistent excellence in everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-deep-blue mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-text leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="section-padding bg-light-bg">
        <div className="container-width mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
            Meet the Minds Behind the Growth
          </h2>
          <p className="text-xl text-gray-text mb-12 max-w-3xl mx-auto">
            Our team of lead generation experts, cold callers, and strategists bring years of 
            experience and creativity to every client project.
          </p>
          
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-24 h-24 bg-gradient-to-br from-deep-blue to-electric-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Expert Team</h3>
                <p className="text-gray-text">Seasoned professionals with proven track records</p>
              </div>
              <div>
                <div className="w-24 h-24 bg-gradient-to-br from-electric-green to-deep-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Growth Focused</h3>
                <p className="text-gray-text">Every strategy designed for scalable results</p>
              </div>
              <div>
                <div className="w-24 h-24 bg-gradient-to-br from-deep-blue to-electric-green rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Innovation Driven</h3>
                <p className="text-gray-text">Cutting-edge approaches to modern challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-width mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Your Growth Engine Today
          </h2>
          <p className="text-xl text-light-text mb-8 max-w-2xl mx-auto">
            Whether you need more leads, meetings, or a complete outreach system — 
            we're ready to deliver results that matter.
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

export default About
