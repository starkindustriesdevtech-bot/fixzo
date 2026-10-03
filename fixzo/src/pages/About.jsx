import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin, Package, Wrench, Users, TrendingUp, Zap, Globe,
  CheckCircle, ArrowRight, Heart, Home as HomeIcon, Building,
  Cpu, ChevronRight
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const hubFeatures = [
  { icon: Users, title: 'Worker Management', desc: 'Each hub manages its own team of verified professionals with schedules, training, and performance tracking.' },
  { icon: Package, title: 'Equipment & Inventory', desc: 'Hubs stock all necessary tools, cleaning supplies, and replacement parts for fast dispatch without delays.' },
  { icon: Zap, title: 'Emergency Dispatch', desc: 'Local dispatch means 30–60 minute response times. No central call center bottlenecks.' },
  { icon: MapPin, title: 'One office every 50 km', desc: 'Starting in cities and expanding outward — until every town and rural area has access to trusted services.' },
]

const roadmapPhases = [
  {
    phase: 'Phase 1',
    title: 'City Launch',
    desc: 'Establish first local hub in a major city. Build core team, verify first batch of professionals, and launch Quick Services.',
    status: 'current',
    items: ['Core service categories live', 'Verified professional network', 'Emergency response system', 'Rating & trust system'],
  },
  {
    phase: 'Phase 2',
    title: 'Nearby Cities',
    desc: 'Expand to 5–10 nearby cities using the same hub model. Launch Planned Services and Subscription plans.',
    status: 'upcoming',
    items: ['Subscription plan rollout', 'Multi-city dispatcher', 'Planned service professionals', 'Family Remote Access'],
  },
  {
    phase: 'Phase 3',
    title: 'Statewide',
    desc: 'Cover the full state with regional hubs every 50 km. Include semi-urban and smaller towns.',
    status: 'upcoming',
    items: ['Rural area coverage', 'Semi-urban hubs', 'Elderly Care Mode launch', 'Multi-skilled pro network'],
  },
  {
    phase: 'Phase 4',
    title: 'National + Smart Features',
    desc: 'National rollout with smart-home integration, predictive maintenance, and AI-assisted scheduling.',
    status: 'future',
    items: ['National coverage', 'Smart home integration', 'Predictive maintenance AI', 'Full property intelligence'],
  },
]

const impact = [
  { icon: Users, value: '10,000+', label: 'Jobs created for skilled workers', color: 'bg-primary-50 text-primary' },
  { icon: MapPin, value: '50+ towns', label: 'Rural workforce inclusion planned', color: 'bg-green-50 text-green-600' },
  { icon: Heart, value: '5,000+', label: 'Elderly households supported', color: 'bg-rose-50 text-rose-600' },
  { icon: TrendingUp, value: '3×', label: 'Average income growth for pros', color: 'bg-amber-50 text-amber-700' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge bg-white/20 text-white mb-4">About FixZo</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">We're fixing how home services work</h1>
            <p className="text-white/70 text-lg leading-relaxed">
              FixZo is a local-hub-based platform that connects verified home-service professionals with households who need fast, trusted help. We're building city by city — with the goal of making professional home services accessible to every household in India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="Our Mission"
                title="Trusted help, available to everyone"
                subtitle="From a leaking pipe at midnight to a full home inspection before guests arrive — FixZo is built for the moments that matter."
              />
              <div className="space-y-4">
                {[
                  'Make professional home services as easy as ordering food',
                  'Build a trustworthy network of skilled, well-trained professionals',
                  'Support elderly households with safe, simple access to help',
                  'Give skilled workers stable income and career growth',
                  'Expand from cities to every rural town across India',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2024', color: 'bg-primary-50' },
                { label: 'Cities', value: 'Growing', color: 'bg-green-50' },
                { label: 'Professionals', value: '500+', color: 'bg-amber-50' },
                { label: 'Uptime', value: '24/7', color: 'bg-rose-50' },
              ].map(({ label, value, color }) => (
                <div key={label} className={`${color} rounded-2xl p-6 text-center`}>
                  <div className="text-3xl font-extrabold text-navy mb-1">{value}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we operate — Local hubs */}
      <section className="section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How We Operate"
            title="Local hubs, not a call center"
            subtitle="FixZo is built around physical local offices — each one handling dispatch, workers, equipment, and inventory for its area."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {hubFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card group">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Hub visual */}
          <div className="bg-white rounded-3xl shadow-card p-8">
            <h3 className="font-bold text-navy text-lg mb-6 text-center">What a FixZo local hub does</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { icon: Users, label: 'Manage professionals', sub: 'Schedules & performance' },
                { icon: Package, label: 'Store equipment', sub: 'Tools & supplies' },
                { icon: Zap, label: 'Dispatch jobs', sub: 'Real-time assignment' },
                { icon: Wrench, label: 'Quality control', sub: 'Inspections & reviews' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-primary-50 rounded-2xl p-5">
                  <Icon className="w-7 h-7 text-primary mx-auto mb-2" />
                  <div className="font-bold text-navy text-sm">{label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Roadmap */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Expansion Roadmap"
            title="City to national — step by step"
            subtitle="We're growing deliberately — one hub at a time, ensuring quality before scale."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            <div className="space-y-8 lg:space-y-0">
              {roadmapPhases.map(({ phase, title, desc, status, items }, i) => (
                <div key={phase} className={`lg:grid lg:grid-cols-2 lg:gap-8 relative ${i % 2 === 0 ? '' : ''} mb-8 lg:mb-16`}>
                  {/* Phase badge (center on lg) */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-0 z-10">
                    <div className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-lg text-xs font-bold
                      ${status === 'current' ? 'bg-primary text-white' : status === 'upcoming' ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {i + 1}
                    </div>
                  </div>

                  <div className={`${i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="card mb-4 lg:mb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`badge text-xs ${
                          status === 'current' ? 'bg-green-100 text-green-700' :
                          status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-500'
                        }`}>
                          {status === 'current' ? '🟢 Active' : status === 'upcoming' ? '🔵 Planned' : '⚪ Future'}
                        </span>
                        <span className="text-xs font-bold text-gray-400">{phase}</span>
                      </div>
                      <h3 className={`text-xl font-extrabold text-navy mb-2`}>{title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                      <ul className={`space-y-1.5 ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                        {items.map(item => (
                          <li key={item} className={`flex items-center gap-2 text-sm text-gray-600 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <CheckCircle className={`w-4 h-4 flex-shrink-0 ${status === 'current' ? 'text-green-500' : 'text-gray-300'}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i % 2 !== 0 && <div className="lg:col-start-1 lg:row-start-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="section bg-gradient-to-br from-navy to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Social Impact"
            title="Building more than a business"
            subtitle="FixZo is a platform with a purpose — creating jobs, including underserved communities, and protecting vulnerable households."
            center
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impact.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all">
                <div className="text-4xl font-extrabold text-accent mb-2">{value}</div>
                <p className="text-white/70 text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Job Creation', desc: 'Every new hub creates stable employment for 20–50 local professionals, giving them organized work, fair pay, and career growth.' },
              { icon: MapPin, title: 'Rural Workforce Inclusion', desc: 'Phase 3 and beyond will bring FixZo to semi-urban and rural areas — connecting talented workers in small towns to a national platform.' },
              { icon: Heart, title: 'Elderly Safety Support', desc: 'Dedicated Elderly Care Mode and trained professionals who understand the specific needs of older users and their families.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/10 rounded-2xl p-6">
                <Icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">Want to be part of what we're building?</h2>
          <p className="text-gray-500 mb-8">Whether you're a customer, a professional, or a business — there's a place for you in the FixZo ecosystem.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/professionals" className="btn-primary px-8 py-4">Join as a Professional</Link>
            <Link to="/contact" className="btn-outline px-8 py-4">Get in Touch <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
