import React from 'react';
import {
    ArrowRight, Briefcase, HardHat, Handshake, Banknote, Cpu,
    HeartPulse, Globe, Truck, Factory, Video, UserPlus,
    Cloud, Radio, Star, Calculator, Calendar, Compass
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/AcZssZ1KKwKHvRZzLO2VsgHc57HM8ohjLRxYf_nqSIw=?gv=true';

const Industries = () => {
    const industriesList = [
        {
            title: "Agencies",
            icon: <Briefcase className="h-8 w-8 text-electric-green" />,
            desc: "We help creative and marketing firms eliminate the prospecting bottleneck, allowing them to focus purely on client strategy and scaling."
        },
        {
            title: "Construction",
            icon: <HardHat className="h-8 w-8 text-electric-green" />,
            desc: "Our systems navigate the complex procurement cycles of the construction industry to secure high-value contracts and steady project flow."
        },
        {
            title: "Consulting",
            icon: <Handshake className="h-8 w-8 text-electric-green" />,
            desc: "We translate complex consulting value propositions into clear, compelling messages that resonate with C-suite decision-makers."
        },
        {
            title: "Financial services",
            icon: <Banknote className="h-8 w-8 text-electric-green" />,
            desc: "Compliant and professional outreach designed to build trust and authority with high-net-worth prospects and financial institutions."
        },
        {
            title: "Fintech",
            icon: <Cpu className="h-8 w-8 text-electric-green" />,
            desc: "Accelerating growth for financial technology brands by targeting high-intent users and streamlining the B2B sales cycle by up to 30%."
        },
        {
            title: "Healthcare",
            icon: <HeartPulse className="h-8 w-8 text-electric-green" />,
            desc: "Strategic appointment setting within the medical and health sectors, connecting your solutions with hospital leads and clinical directors."
        },
        {
            title: "Information technologies",
            icon: <Globe className="h-8 w-8 text-electric-green" />,
            desc: "Scaling IT and software service providers in hyper-competitive markets through technical and data-driven prospecting."
        },
        {
            title: "Logistics",
            icon: <Truck className="h-8 w-8 text-electric-green" />,
            desc: "We identify and engage key logistics partners for complex supply chain offerings, ensuring a filled pipeline of quality meetings."
        },
        {
            title: "Manufacturing",
            icon: <Factory className="h-8 w-8 text-electric-green" />,
            desc: "B2B outreach specialized for the manufacturing sector, focusing on long-term industrial partnerships and volume contracts."
        },
        {
            title: "Media production",
            icon: <Video className="h-8 w-8 text-electric-green" />,
            desc: "Custom outreach for media and advertising agencies to secure projects with high-tier brands and production houses."
        },
        {
            title: "Recruitment and staffing",
            icon: <UserPlus className="h-8 w-8 text-electric-green" />,
            desc: "We bridge the gap between agencies and premium clients, attracting top-tier companies while maximizing your agency's ROI."
        },
        {
            title: "SaaS services",
            icon: <Cloud className="h-8 w-8 text-electric-green" />,
            desc: "Specialized lead generation for software-as-a-service platforms, focusing on user acquisition and enterprise-level subscriptions."
        },
        {
            title: "Telecommunication",
            icon: <Radio className="h-8 w-8 text-electric-green" />,
            desc: "Modernizing telecom sales through omnichannel strategies that generate a consistent volume of high-quality enterprise leads."
        }
    ];

    const testimonials = [
        {
            name: "Jason Wong",
            role: "CEO at Omnicharge",
            content: "The research-first approach was impressive. Their team didn't just find leads; they learned our industry language and delivered results immediately.",
            rating: 5
        },
        {
            name: "Audrey Wyrick",
            role: "Senior Product Marketing Manager",
            content: "Exceeded all our expectations. They helped us increase brand awareness while consistently hitting our target meeting goals every month.",
            rating: 5
        },
        {
            name: "Maria Barroca",
            role: "Global Campaigns Manager",
            content: "Their ability to adapt to our internal workflows was seamless. It truly feels like an extension of our own sales team rather than an agency.",
            rating: 5
        }
    ];

    return (
        <div className="min-h-screen bg-light-bg">
            {/* Header Section */}
            <section className="pt-24 pb-16 bg-white border-b border-gray-100">
                <div className="container-width mx-auto px-4 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-deep-blue mb-6">
                        Industries <span className="text-electric-green">we serve</span>
                    </h1>
                    <p className="text-xl text-gray-text max-w-3xl mx-auto mb-8">
                        Leveraging TopNotch Growth's expertise across 50+ specialized sectors to target the right audience and acquire qualified B2B leads.
                    </p>

                </div>
            </section>

            {/* Industry Grid */}
            <section className="section-padding">
                <div className="container-width mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industriesList.map((industry, index) => (
                            <Card key={index} className="card-hover border-0 shadow-md bg-white p-6 relative group transition-all duration-300">
                                <CardContent className="p-0">
                                    <div className="mb-4 bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-electric-green/10 transition-colors">
                                        {industry.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-deep-blue mb-3 flex items-center justify-between">
                                        {industry.title}
                                        <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-electric-green transition-colors" />
                                    </h3>
                                    <p className="text-gray-text leading-relaxed">
                                        {industry.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-deep-blue overflow-hidden relative">
                <div className="container-width mx-auto px-4">
                    <h2 className="text-4xl font-bold text-white mb-12 text-center">
                        What our clients say <span className="text-electric-green">about our services</span>
                    </h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{t.name}</h4>
                                        <p className="text-light-text text-sm">{t.role}</p>
                                    </div>
                                </div>
                                <div className="flex text-electric-green mb-4">
                                    {[...Array(5)].map((_, star) => <Star key={star} className="h-4 w-4 fill-current" />)}
                                    <span className="ml-2 text-white text-sm">5.0</span>
                                </div>
                                <p className="text-light-text italic leading-relaxed">"{t.content}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dive Deeper Section */}
            <section className="section-padding bg-white">
                <div className="container-width mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-deep-blue mb-12">Dive deeper and see how we deliver</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-light-bg hover:shadow-lg transition-all text-center group">
                            <Calculator className="h-10 w-10 text-electric-green mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3">ROI calculator</h3>
                            <p className="text-gray-text mb-6">Estimate the potential revenue growth and return on investment with our systems.</p>
                            <a href="#" className="text-electric-green font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                Try calculator for free <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="p-8 rounded-2xl bg-light-bg hover:shadow-lg transition-all text-center group">
                            <Calendar className="h-10 w-10 text-electric-green mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3">Appointment setting</h3>
                            <p className="text-gray-text mb-6">See how we secure up to 20+ monthly appointments with ready-to-buy leads.</p>
                            <a href={GOOGLE_CALENDAR_URL} className="text-electric-green font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                Find out more <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="p-8 rounded-2xl bg-light-bg hover:shadow-lg transition-all text-center group">
                            <Compass className="h-10 w-10 text-electric-green mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3">Our approach</h3>
                            <p className="text-gray-text mb-6">Learn about the philosophy and the data-driven systems that drive TopNotch Growth.</p>
                            <a href="/about" className="text-electric-green font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                                Discover <ArrowRight className="h-4 w-4" />
                            </a>
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
    );
};

export default Industries;