import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logo from '../assets/TopNotchGrowth.png'

// Define the Google Calendar configuration URL (same as Contact.jsx)
const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/AcZssZ1KKwKHvRZzLO2VsgHc57HM8ohjLRxYf_nqSIw=?gv=true';

const Navigation = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="container-width mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="TopNotch Growth" className="h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${isActive(item.path)
                    ? 'text-[#5fc36b]'
                    : 'text-[#0a1a3b] hover:text-[#5fc36b]'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* UPDATED: Desktop Book a Call Button with Google Calendar Link */}
            <Button
              className="ml-4 px-6 py-2 bg-black text-white rounded-md hover:bg-[#5fc36b] transition-colors duration-200"
              asChild 
            >
              <a href={GOOGLE_CALENDAR_URL} target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#0a1a3b]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0a1a3b]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive(item.path)
                      ? 'text-[#5fc36b] bg-gray-50'
                      : 'text-[#0a1a3b] hover:text-[#5fc36b] hover:bg-gray-50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                {/* UPDATED: Mobile Book a Call Button with Google Calendar Link */}
                <Button
                  className="w-full px-6 py-2 bg-black text-white rounded-md hover:bg-[#5fc36b] transition-colors duration-200"
                  asChild
                >
                  <a
                    href={GOOGLE_CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    Book a Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation