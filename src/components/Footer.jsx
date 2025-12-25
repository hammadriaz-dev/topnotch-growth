import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-deep-blue py-12">
      <div className="container-width mx-auto px-4">

        {/* Top Sections */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-light-text hover:text-electric-green transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-light-text hover:text-electric-green transition-colors">
                About
              </Link>
              <Link to="/services" className="block text-light-text hover:text-electric-green transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-light-text hover:text-electric-green transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-light-text">

              <Link to="/services#sales-development" className="block hover:text-electric-green">
                Sales Development
              </Link>

              <Link to="/services#outsourced-sdrs" className="block hover:text-electric-green">
                Outsourced SDRs
              </Link>

              <Link to="/services#lead-generation" className="block hover:text-electric-green">
                Lead Generation
              </Link>

              <Link to="/services#sales-enablement" className="block hover:text-electric-green">
                Sales Enablement
              </Link>

              <Link to="/services#lead-nurturing" className="block hover:text-electric-green">
                Lead Nurturing
              </Link>

              <Link to="/services#lead-generation-training" className="block hover:text-electric-green">
                Lead Generation Training
              </Link>

              <Link to="/services#demand-generation" className="block hover:text-electric-green">
                Demand Generation
              </Link>

              <Link to="/services#hubspot-crm-consulting" className="block hover:text-electric-green">
                HubSpot CRM Consulting
              </Link>

              <Link to="/services#deliverability-consulting" className="block hover:text-electric-green">
                Deliverability Consulting
              </Link>

              <Link to="/services#account-based-marketing" className="block hover:text-electric-green">
                Account-Based Marketing
              </Link>

            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <div className="space-y-2 text-light-text">

              <Link to="/industries" className="block hover:text-electric-green">Agencies</Link>
              <Link to="/industries" className="block hover:text-electric-green">Construction</Link>
              <Link to="/industries" className="block hover:text-electric-green">Consulting</Link>
              <Link to="/industries" className="block hover:text-electric-green">Financial Services</Link>
              <Link to="/industries" className="block hover:text-electric-green">Fintech</Link>
              <Link to="/industries" className="block hover:text-electric-green">Healthcare</Link>
              <Link to="/industries" className="block hover:text-electric-green">Information Technology</Link>
              <Link to="/industries" className="block hover:text-electric-green">Logistics</Link>
              <Link to="/industries" className="block hover:text-electric-green">Manufacturing</Link>
              <Link to="/industries" className="block hover:text-electric-green">Media Production</Link>
              <Link to="/industries" className="block hover:text-electric-green">Recruitment & Staffing</Link>
              <Link to="/industries" className="block hover:text-electric-green">SaaS Services</Link>
              <Link to="/industries" className="block hover:text-electric-green">Telecommunication</Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-light-text">
              <div>hello@topnotchgrowth.com</div>
              <div>+1 (555) 123-4567</div>
              <div>Lahore, Pakistan</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-light-text">
            © 2025 TopNotch Growth. Smart Systems. Real Results.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
