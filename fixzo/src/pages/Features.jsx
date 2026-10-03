import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users, Zap, Globe, Star, Shield, Bell, TrendingUp,
  ArrowRight, CheckCircle, Smartphone, Eye
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const features = [
  {
    icon: Users,
    title: 'Elderly Care Mode',
    tagline: 'Designed for simplicity and safety',
    desc: 'A simplified interface with larger text, high-contrast colors, and step-by-step guidance. Elderly users can book, track, and communicate with professionals without confusion.',
    highlights: ['Extra-large tap targets', 'Simplified 3-step booking', 'Voice-friendly design', 'Emergency one-tap call'],
    color: 'from-teal-500 to-emerald-500',
    bg: 'bg-teal-50',
    iconBg: 'bg-teal-100 text-teal-600',
    tag: 'Accessibility',
  },
  {
    icon: Zap,
    title: 'One-Tap Emergency Service',
    tagline: 'Help in one tap, no form filling needed',
    desc: 'Tap once from the home screen to trigger an emergency request. We use your saved address and profile to dispatch the nearest available professional in under 60 seconds.',
    highlights: ['No login required in crisis', 'Uses saved address', 'Instant dispatch', 'SMS confirmation sent'],
    color: 'from-accent to-orange-400',
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100 text-orange-600',
    tag: 'Speed',
  },
  {
    icon: Globe,
    title: 'Family Remote Access',
    tagline: 'Manage your parents\' home from anywhere',
    desc: 'Add family members to your account and book, track, and pay for services on their behalf. Perfect for NRIs and people managing elderly parents from another city.',
    highlights: ['Multi-property management', 'Real-time tracking for family', 'Remote payment', 'Visit history and reports'],
    color: 'from-primary to-blue-500',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-600',
    tag: 'Remote',
  },
  {
    icon: Star,
    title: 'Trust Score Ratings',
    tagline: 'Transparency after every single job',
    desc: 'Every professional has a live trust score built from customer ratings, job completion rates, punctuality, and communication. No hiding, no inflated numbers.',
    highlights: ['Post-job customer ratings', 'Punctuality score', 'Completion rate tracking', 'Response time history'],
    color: 'from-yellow-500 to-amber-400',
    bg: 'bg-yellow-50',
    iconBg: 'bg-yellow-100 text-yellow-600',
    tag: 'Trust',
  },
  {
    icon: Shield,
    title: 'Service Warranty',
    tagline: 'If it\'s not right, we fix it — free',
    desc: 'Every completed job comes with a warranty period. If the same issue reappears or the work quality falls short, we send a professional back at zero extra cost.',
    highlights: ['7-day warranty on all jobs', 'Free re-service if needed', 'Quality guarantee', 'No questions asked'],
    color: 'from-green-500 to-emerald-400',
    bg: 'bg-green-50',
    iconBg: 'bg-green-100 text-green-600',
    tag: 'Guarantee',
  },
  {
    icon: Bell,
    title: 'Smart Maintenance Reminders',
    tagline: 'Stay ahead of every problem',
    desc: 'FixZo learns your home\'s history and sends proactive reminders for maintenance tasks — water filter changes, AC servicing, plumbing checks — before they become emergencies.',
    highlights: ['Personalized home schedule', 'Seasonal reminders', 'Appliance lifecycle tracking', 'One-tap to schedule'],
    color: 'from-purple-500 to-violet-400',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-600',
    tag: 'Smart',
  },
  {
    icon: TrendingUp,
    title: 'Worker Skill Growth System',
    tagline: 'Professionals who keep getting better',
    desc: 'Every professional on FixZo has access to training modules, certifications, and skill tracks that unlock higher-value job categories and better earnings over time.',
    highlights: ['Structured skill modules', 'Certification tracks', 'Performance bonuses', 'Career progression path'],
    color: 'from-navy to-primary-700',
    bg: 'bg-slate-50',
    iconBg: 'bg-slate-100 text-slate-600',
    tag: 'Growth',
  },
]

export default function Features() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-white/20 text-white mb-4">Platform Features</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Built different, by design</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            FixZo isn't just a booking app. It's a platform built around the real problems people face — from emergencies to elderly care to property management abroad.
          </p>
        </div>
      </section>

      {/* Feature cards */}
      <section className="section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {features.map(({ icon: Icon, title, tagline, desc, highlights, color, bg, iconBg, tag }, i) => (
              <div
                key={title}
                className={`bg-white rounded-3xl shadow-card overflow-hidden flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} group hover:shadow-card-hover transition-shadow`}
              >
                {/* Color panel */}
                <div className={`lg:w-2/5 bg-gradient-to-br ${color} p-10 flex flex-col justify-center`}>
                  <span className="badge bg-white/20 text-white mb-4 w-fit">{tag}</span>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-white mb-2">{title}</h2>
                  <p className="text-white/80 text-sm font-medium">{tagline}</p>
                </div>

                {/* Content */}
                <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {highlights.map(h => (
                      <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeader
            badge="Get Started"
            title="Experience all features from day one"
            subtitle="Every feature is available across all plans. No hidden paywalls on core functionality."
            center
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency" className="btn-accent px-8 py-4">
              <Zap className="w-5 h-5" /> Try Emergency Now
            </Link>
            <Link to="/subscriptions" className="btn-outline px-8 py-4">
              View Plans <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
