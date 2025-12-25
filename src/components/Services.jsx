import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom' 
import {
  ArrowRight, Target, Phone, Mail, Calendar, BarChart3, TrendingUp, Users, Shield, Clock,
  Handshake, Zap, Layers, Activity, BookOpen, Settings, Send, Users2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'




// Define the Google Calendar configuration URL (Use your actual URL)
const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/AcZssZ1KKwKHvRZzLO2VsgHc57HM8ohjLRxYf_nqSIw=?gv=true';


const Services = () => {

  const location = useLocation()

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)

    if (el) {
      // delay ensures DOM is fully rendered
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }
}, [location])




  const serviceCategories = [
    {
      icon: <Zap className="h-6 w-10 text-electric-green" />,
      title: "Sales development",
    },
    {
      icon: <Users className="h-6 w-10 text-electric-green" />,
      title: "Outsourced SDRs",
    },
    {
      icon: <Target className="h-6 w-10 text-electric-green" />,
      title: "Lead generation",
    },
    {
      icon: <Handshake className="h-6 w-10 text-electric-green" />,
      title: "Sales enablement",
    },
    {
      icon: <Layers className="h-6 w-10 text-electric-green" />,
      title: "Lead nurturing",
    },
    {
      icon: <BookOpen className="h-6 w-10 text-electric-green" />,
      title: "Lead generation training",
    },
    {
      icon: <Activity className="h-6 w-10 text-electric-green" />,
      title: "Demand generation",
    },
    {
      icon: <Settings className="h-6 w-10 text-electric-green" />,
      title: "HubSpot CRM consulting",
    },
    {
      icon: <Send className="h-6 w-10 text-electric-green" />,
      title: "Deliverability consulting",
    },
    {
      icon: <Users2 className="h-6 w-10 text-electric-green" />,
      title: "Account-based marketing",
    },
  ]

  const detailedServices = [
    {
      icon: <TrendingUp className="h-12 w-12 text-electric-green" />,
      title: "Sales Development",
      subtitle: "Transform your sales process and pipeline.",
      description: "We implement strategic sales development programs to increase prospect engagement, accelerate pipeline velocity, and boost revenue.",
      deliverables: [
        "Prospecting Strategy & Playbooks",
        "Outbound Outreach Programs",
        "KPIs & Sales Metrics Setup",
        "Custom Sales Workflow Design"
      ],
      cta: "Boost Sales Performance",
      metrics: {
        mainValue: "150%",
        mainLabel: "Pipeline Growth",
        stats: [
          { value: "95%", label: "Lead Conversion" },
          { value: "2X", label: "Engagement Rate" }
        ]
      }
    },
    {
      icon: <Users className="h-12 w-12 text-electric-green" />,
      title: "Outsourced SDRs",
      subtitle: "Extend your sales team with expert SDRs.",
      description: "Our remote SDRs handle prospecting, lead qualification, and initial outreach so your internal sales team can focus on closing deals.",
      deliverables: [
        "Dedicated SDR Hiring & Onboarding",
        "Multi-Channel Outreach Execution",
        "Daily & Weekly Reporting",
        "CRM & Lead Management Support"
      ],
      cta: "Hire SDR Team",
      metrics: {
        mainValue: "50+",
        mainLabel: "SDRs Deployed",
        stats: [
          { value: "20k", label: "Calls Made" },
          { value: "1,200", label: "Leads Qualified" }
        ]
      }
    },
    {
      icon: <Mail className="h-12 w-12 text-electric-green" />,
      title: "Lead Generation",
      subtitle: "Drive a steady flow of qualified leads.",
      description: "We identify, target, and deliver high-quality leads for your sales team using advanced tools and precise market research.",
      deliverables: [
        "Ideal Customer Profile Research",
        "Lead List Verification",
        "Segmentation & Targeting",
        "CRM Integration & Tracking"
      ],
      cta: "Generate Leads",
      metrics: {
        mainValue: "999,999+",
        mainLabel: "Leads Delivered",
        stats: [
          { value: "92%", label: "Data Accuracy" },
          { value: "30d", label: "Avg Delivery" }
        ]
      }
    },
    {
      icon: <Shield className="h-12 w-12 text-electric-green" />,
      title: "Sales Enablement",
      subtitle: "Empower your team with tools to close more deals.",
      description: "We create resources, processes, and training that equip sales teams to engage prospects effectively and drive higher conversion rates.",
      deliverables: [
        "Sales Playbooks & Templates",
        "Training Workshops",
        "Content Management",
        "Dashboard & Performance Metrics"
      ],
      cta: "Enable Your Sales Team",
      metrics: {
        mainValue: "85%",
        mainLabel: "Rep Productivity",
        stats: [
          { value: "120", label: "Workflows Created" },
          { value: "98%", label: "Content Utilization" }
        ]
      }
    },
    {
      icon: <Target className="h-12 w-12 text-electric-green" />,
      title: "Lead Nurturing",
      subtitle: "Build long-term relationships with prospects.",
      description: "We design personalized, multi-channel nurture campaigns to keep leads engaged and guide them seamlessly through your sales funnel.",
      deliverables: [
        "Email & SMS Nurture Sequences",
        "Automated Follow-Up Cadences",
        "Behavioral Lead Scoring",
        "Pipeline Conversion Optimization"
      ],
      cta: "Nurture Leads Effectively",
      metrics: {
        mainValue: "75%",
        mainLabel: "Lead Engagement",
        stats: [
          { value: "40%", label: "Reply Rate" },
          { value: "28d", label: "Avg Nurture Time" }
        ]
      }
    },
    {
      icon: <Calendar className="h-12 w-12 text-electric-green" />,
      title: "Lead Generation Training",
      subtitle: "Train your team to generate quality leads.",
      description: "We offer hands-on training for your sales and marketing teams on modern lead generation, prospecting techniques, and automation tools.",
      deliverables: [
        "Live Training Sessions",
        "Scripts & Email Templates",
        "Tool Setup & Optimization",
        "Ongoing Coaching & Support"
      ],
      cta: "Train Your Team",
      metrics: {
        mainValue: "100+",
        mainLabel: "Trained Reps",
        stats: [
          { value: "95%", label: "Training Satisfaction" },
          { value: "20h", label: "Avg Training Hours" }
        ]
      }
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-electric-green" />,
      title: "Demand Generation",
      subtitle: "Increase awareness and pipeline opportunities.",
      description: "We execute marketing programs designed to create interest in your products, educate prospects, and drive qualified demand to your sales team.",
      deliverables: [
        "Integrated Marketing Campaigns",
        "Content Strategy & Creation",
        "Lead Scoring & Qualification",
        "Analytics & Reporting Dashboards"
      ],
      cta: "Generate Demand",
      metrics: {
        mainValue: "200%",
        mainLabel: "Pipeline Growth",
        stats: [
          { value: "150%", label: "Lead Engagement" },
          { value: "12", label: "Campaigns Run" }
        ]
      }
    },
    {
      icon: <Phone className="h-12 w-12 text-electric-green" />,
      title: "HubSpot CRM Consulting",
      subtitle: "Optimize your CRM for efficiency and growth.",
      description: "Our experts configure HubSpot CRM to match your sales process, automate workflows, and provide actionable insights to improve performance.",
      deliverables: [
        "CRM Setup & Customization",
        "Sales Pipeline Design",
        "Dashboard & Reporting Configuration",
        "Team Onboarding & Training"
      ],
      cta: "Optimize HubSpot CRM",
      metrics: {
        mainValue: "99%",
        mainLabel: "CRM Adoption",
        stats: [
          { value: "50", label: "Workflows Automated" },
          { value: "24/7", label: "Support" }
        ]
      }
    },
    {
      icon: <Mail className="h-12 w-12 text-electric-green" />,
      title: "Deliverability Consulting",
      subtitle: "Ensure your emails reach the inbox every time.",
      description: "We audit your email infrastructure, improve sending reputation, and optimize campaigns to increase open rates and engagement.",
      deliverables: [
        "Email Deliverability Audit",
        "Domain & Authentication Setup",
        "Campaign Optimization",
        "Ongoing Monitoring & Reporting"
      ],
      cta: "Improve Email Deliverability",
      metrics: {
        mainValue: "98%",
        mainLabel: "Inbox Rate",
        stats: [
          { value: "85%", label: "Open Rate" },
          { value: "75%", label: "Click Rate" }
        ]
      }
    },
    {
      icon: <ArrowRight className="h-12 w-12 text-electric-green" />,
      title: "Account-Based Marketing",
      subtitle: "Target and convert high-value accounts efficiently.",
      description: "We plan and execute ABM campaigns tailored to engage specific high-value accounts with personalized messaging to accelerate deals.",
      deliverables: [
        "Target Account Selection",
        "Personalized Campaign Design",
        "Multi-Channel Engagement",
        "Performance Tracking & Optimization"
      ],
      cta: "Launch ABM Campaigns",
      metrics: {
        mainValue: "50%",
        mainLabel: "Account Conversion",
        stats: [
          { value: "20", label: "High-Value Accounts" },
          { value: "3X", label: "ROI Growth" }
        ]
      }
    }
  ];


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
                {/* 1. Book a Free Strategy Call - Google Calendar Link */}
                <Button
                  className="btn-primary text-lg px-8 py-4"
                  asChild
                >
                  <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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
            {serviceCategories.map((category, index) => {
              const targetId = category.title.replace(/\s+/g, "-").toLowerCase(); // match ID
              return (
                <a
                  key={index}
                  href={`#${targetId}`}
                  className="card-hover border-0 shadow-lg text-center transition-transform hover:scale-105"
                >
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="mb-4 flex justify-center items-center">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-deep-blue flex items-center gap-2">
                      {category.title}
                      <ArrowRight className="h-4 w-4 text-electric-green" />
                    </h3>
                  </CardContent>
                </a>
              );
            })}
          </div>

        </div>
      </section>


      {/* Detailed Services */}
      <section id="services-detail" className="section-padding bg-light-bg">
        <div className="container-width mx-auto">
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                id={service.title.replace(/\s+/g, "-").toLowerCase()} // dynamic ID
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
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
                      <Button className="btn-primary" asChild>
                        <Link to="/contact">
                          {service.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} slide-in-right`}>
                  <div className="bg-gradient-to-br from-deep-blue to-electric-green rounded-2xl p-8 text-white">
                    <div className="space-y-6 text-center">
                      <div className="text-4xl font-bold mb-2">
                        {service.metrics.mainValue}
                      </div>
                      <div className="text-lg opacity-90 mb-4">
                        {service.metrics.mainLabel}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        {service.metrics.stats.map((stat, statIndex) => (
                          <div key={statIndex}>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm opacity-80">{stat.label}</div>
                          </div>
                        ))}
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

              {/* 3. Let's Build Your Strategy Button - Google Calendar Link */}
              <Button
                className="btn-primary text-lg px-8 py-4 mt-8"
                asChild
              >
                <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                  Let's Build Your Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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
          {/* 4. Final CTA Button - Google Calendar Link */}
          <Button
            className="btn-primary text-xl px-12 py-6 glow-effect"
            asChild
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

export default Services