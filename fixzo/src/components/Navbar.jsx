import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Zap, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  {
    label: 'Platform',
    children: [
      { to: '/features', label: 'Special Features' },
      { to: '/multi-skilled', label: 'Multi-Skilled Pros' },
      { to: '/subscriptions', label: 'Subscription Plans' },
    ],
  },
  { to: '/professionals', label: 'Join as Pro' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const closeAll = () => { setOpen(false); setDropdown(null) }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg" onClick={closeAll}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-accent" fill="currentColor" />
          </div>
          <span className="text-xl font-extrabold text-navy tracking-tight">
            Fix<span className="text-accent">Zo</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 transition-colors"
                  onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                  aria-expanded={dropdown === link.label}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                </button>
                {dropdown === link.label && (
                  <ul className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-gray-100 py-2 z-50 animate-fade-in">
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm font-medium rounded-lg mx-1 transition-colors ${isActive ? 'text-primary bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'}`
                          }
                          onClick={closeAll}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-primary bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'}`
                  }
                  onClick={closeAll}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => { navigate('/emergency'); closeAll() }}
            className="btn-accent text-sm px-5 py-2.5 flex items-center gap-2 shadow-lg shadow-orange-200"
            aria-label="Emergency Help"
          >
            <Zap className="w-4 h-4" />
            Emergency Help
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <ul className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700"
                    onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdown === link.label && (
                    <ul className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `block px-4 py-2.5 rounded-xl text-sm font-medium ${isActive ? 'text-primary bg-primary-50' : 'text-gray-600 hover:text-primary hover:bg-primary-50'}`
                            }
                            onClick={closeAll}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium ${isActive ? 'text-primary bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'}`
                    }
                    onClick={closeAll}
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
            <li className="pt-2">
              <button
                onClick={() => { navigate('/emergency'); closeAll() }}
                className="btn-accent w-full text-sm py-3 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Emergency Help
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
