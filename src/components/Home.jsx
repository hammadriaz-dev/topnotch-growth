import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AnimatedNumber from './AnimatedNumber'
import {
  ArrowRight, TrendingUp, Users, Target, BarChart3, Phone, Mail, MessageSquare,
  Handshake, Zap, Layers, Activity, BookOpen, Settings, Send, Users2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import OmniChannelImage from '../assets/Omnichannel.png'

const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/AcZssZ1KKwKHvRZzLO2VsgHc57HM8ohjLRxYf_nqSIw=?gv=true';

const Home = () => {

  const services = [
    {
      icon: <Zap className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Sales development",
    },
    {
      icon: <Users className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Outsourced SDRs",
    },
    {
      icon: <Target className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Lead generation",
    },
    {
      icon: <Handshake className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Sales enablement",
    },
    {
      icon: <Layers className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Lead nurturing",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Lead generation training",
    },
    {
      icon: <Activity className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Demand generation",
    },
    {
      icon: <Settings className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "HubSpot CRM consulting",
    },
    {
      icon: <Send className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Deliverability consulting",
    },
    {
      icon: <Users2 className="h-10 w-10 text-electric-green" />, // Icon size reduced
      title: "Account-based marketing",
    },
  ];

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

  const omnichannelChannels = [
    "Cold email outreach",
    "Cold and intent calling",
    "Voicemails",
    "SMS / WhatsApp",
    "LinkedIn lead generation",
    "Paid advertising"
  ];

  const pipelineSteps = [
  {
    title: 'Omnichannel Engagement',
    description:
      'We design multi-touch outbound systems combining email, LinkedIn, calling, and intent signals to reach prospects at the right moment.',
  },
  {
    title: 'Activation',
    description:
      'We engage leads with personalized messaging, value-driven follow-ups, and qualification frameworks.',
  },
  {
    title: 'Conversion',
    description:
      'Qualified conversations turn into booked meetings with real buying intent.',
  },
  {
    title: 'Deal Closure',
    description:
      'Your sales team focuses purely on closing while we keep the pipeline full.',
  },
]

 const [activeStep, setActiveStep] = useState(0)


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
                >
                  <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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

        {/* Service Section */}
      <section id="services-section" className="section-padding bg-white">
        <div className="container-width mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-4">
              Smart Growth Services Tailored for Your Business
            </h2>
            <p className="text-xl text-gray-text max-w-3xl mx-auto">
              We offer comprehensive solutions across the entire growth and sales funnel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 items-stretch">
            <div className="flex">
              <div className="w-full p-4 lg:p-6 bg-light-bg rounded-2xl shadow-xl relative flex flex-col justify-between">

                <div className="mb-4">
                  <div className="relative overflow-hidden rounded-xl bg-white/50 border border-gray-100">
                    <div className="w-full h-auto pt-[50%] relative">
                     
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${OmniChannelImage})`}}
                      >
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-deep-blue my-8">
                    Omnichannel appointment setting
                  </h3>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {omnichannelChannels.map((channel, index) => (
                      <div key={index} className="flex items-start text-sm text-gray-text">
                        <span className="inline-block h-1.5 w-1.5 bg-black rounded-full mr-2 mt-1 flex-shrink-0"></span>
                        {channel}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Button (Green) */}
                <div className="mt-4 flex justify-end">
                  <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white border-2 border-electric-green shadow-lg hover:bg-electric-green/10 transition-colors">
                    <ArrowRight className="h-5 w-5 text-electric-green" />
                  </a>
                </div>
              </div>
            </div>


            {/* RIGHT COLUMN: Regular Services Grid (Unchanged in this revision) */}
            {/* RIGHT COLUMN: Services Grid (links to Services page details) */}
<div className="grid md:grid-cols-2 gap-4">
  {services.map((service, index) => {
    const slug = service.title.replace(/\s+/g, '-').toLowerCase();
    const to = `/services#${slug}`;

    return (
     <Link
  key={index}
  to={to}
  className="block"
  aria-label={`Go to ${service.title} details`}
>
  <Card className="card-hover border-0 shadow-lg flex items-center p-4 hover:translate-y-[-4px] transition-transform">
    <CardContent className="p-0 flex items-center text-left w-full">
      <div className="mr-3 flex-shrink-0">
        {service.icon}
      </div>

      <div className="flex-1 flex items-center justify-between">
        <h3 className="text-lg text-deep-blue leading-tight">
          {service.title}
        </h3>

        <div className="ml-4">
          <ArrowRight className="h-4 w-4 text-electric-green" />
        </div>
      </div>
    </CardContent>
  </Card>
</Link>
    );
  })}
</div>

          </div>

        </div>
      </section>


      {/* Pipeline */}

      {/* Pipeline Section */}
<section className="section-padding bg-[#0b1220] text-white">
  <div className="container-width mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4">
        How Your Growth Pipeline Works
      </h2>
      <p className="text-light-text max-w-3xl mx-auto">
        Focus on scaling your business while we build and manage a predictable, sales-ready pipeline.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* LEFT – Journey Steps */}
      <div className="border border-white/10 rounded-2xl p-6 space-y-4">
        {pipelineSteps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`w-full text-left p-5 rounded-xl transition-all ${
              activeStep === index
                ? 'bg-[#1a2337] border border-electric-green'
                : 'bg-[#111827] hover:bg-[#1a2337]'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <ArrowRight className="h-4 w-4 text-electric-green" />
            </div>

            {activeStep === index && (
              <p className="text-light-text mt-3 leading-relaxed">
                {step.description}
              </p>
            )}
          </button>
        ))}
      </div>

      {/* RIGHT – Funnel */}
      <div className="space-y-4">

        <div className="bg-[#60CC55] text-white rounded-xl p-6 text-center font-semibold shadow-xl">
          Up to <span className="text-2xl">18,000+</span> prospects
          <div className="text-sm mt-1 opacity-90">
            within your ideal customer profile
          </div>
        </div>

        <div className="bg-[#1a2337] rounded-xl p-5 text-center shadow">
          Up to <span className="font-semibold">9,000+</span>
          <div className="text-sm text-light-text">
            marketing-qualified leads (MQLs)
          </div>
        </div>

        <div className="bg-[#1a2337] rounded-xl p-5 text-center shadow">
          <span className="font-semibold">200+</span>
          <div className="text-sm text-light-text">
            sales-qualified meetings (SQLs)
          </div>
        </div>

        <div className="bg-[#1a2337] rounded-xl p-5 text-center shadow">
          <span className="font-semibold">10–30+</span>
          <div className="text-sm text-light-text">
            closed deals
          </div>
        </div>

      </div>
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
          >
            <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Call
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
        </div>
      </section>

      
    </div>
  )
}

export default Home
