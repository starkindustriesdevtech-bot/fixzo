import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Quick Services', to: '/services' },
    { label: 'Planned Services', to: '/services' },
    { label: 'Subscriptions', to: '/subscriptions' },
    { label: 'Emergency Help', to: '/emergency' },
  ],
  Platform: [
    { label: 'Special Features', to: '/features' },
    { label: 'Multi-Skilled Pros', to: '/multi-skilled' },
    { label: 'Join as Professional', to: '/professionals' },
    { label: 'About Us', to: '/about' },
  ],
  Support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/#faq' },
    { label: 'Service Areas', to: '/about' },
    { label: 'Trust & Safety', to: '/features' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" fill="currentColor" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight">
                Fix<span className="text-accent">Zo</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Emergency household services in one simple platform. Trusted, verified professionals at your doorstep — fast.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+91 1800-FIXZO-24 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>support@fixzo.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Local hubs across major cities — expanding nationwide</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency CTA strip */}
        <div className="mt-12 rounded-2xl bg-accent/10 border border-accent/30 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white">Need help right now?</p>
            <p className="text-sm text-gray-300">Our professionals are on standby 24/7 for emergencies.</p>
          </div>
          <Link to="/emergency" className="btn-accent text-sm px-6 py-3 whitespace-nowrap">
            <Zap className="w-4 h-4" />
            One-Tap Emergency
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} FixZo Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
