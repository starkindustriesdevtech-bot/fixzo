import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle, Zap, Globe, Clock, Shield, Star,
  Home as HomeIcon, Car, Wrench, Sparkles, ArrowRight, X
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    tagline: 'Great for getting started',
    price: '₹1,499',
    period: '/month',
    savings: null,
    color: 'border-gray-200',
    badge: null,
    features: [
      'Weekly home inspection',
      'Cleaning maintenance check',
      'Plumbing & electrical walkthrough',
      'Priority booking (2 hr response)',
      'Digital service report',
      '1 emergency call-out included',
    ],
    notIncluded: [
      'Preventive maintenance',
      'Vehicle monitoring',
      'Dedicated account manager',
    ],
  },
  {
    id: 'biannual',
    name: '6-Month',
    tagline: 'Most popular for homeowners',
    price: '₹7,499',
    period: '/6 months',
    savings: 'Save ₹1,494',
    color: 'border-primary ring-2 ring-primary',
    badge: 'Most Popular',
    features: [
      'Everything in Monthly',
      'Preventive maintenance visits',
      'Deep cleaning (2× in 6 months)',
      'Appliance health checks',
      'Priority booking (1 hr response)',
      '3 emergency call-outs included',
      'Photo report after every visit',
    ],
    notIncluded: [
      'Vehicle monitoring',
      'Dedicated account manager',
    ],
  },
  {
    id: 'yearly',
    name: 'Yearly',
    tagline: 'Complete peace of mind',
    price: '₹12,999',
    period: '/year',
    savings: 'Save ₹4,989',
    color: 'border-navy',
    badge: 'Best Value',
    features: [
      'Everything in 6-Month',
      'Complete property care',
      'Vehicle maintenance monitoring',
      'Smart maintenance reminders',
      'Family Remote Access included',
      'Dedicated account manager',
      '12 emergency call-outs included',
      'Annual property health report',
    ],
    notIncluded: [],
  },
]

const comparisonRows = [
  { feature: 'Weekly home inspection', monthly: true, biannual: true, yearly: true },
  { feature: 'Cleaning maintenance check', monthly: true, biannual: true, yearly: true },
  { feature: 'Preventive maintenance visits', monthly: false, biannual: true, yearly: true },
  { feature: 'Deep cleaning visits', monthly: false, biannual: '2×', yearly: '4×' },
  { feature: 'Emergency call-outs included', monthly: '1', biannual: '3', yearly: '12' },
  { feature: 'Response time', monthly: '2 hr', biannual: '1 hr', yearly: '30 min' },
  { feature: 'Vehicle monitoring', monthly: false, biannual: false, yearly: true },
  { feature: 'Family Remote Access', monthly: false, biannual: false, yearly: true },
  { feature: 'Dedicated account manager', monthly: false, biannual: false, yearly: true },
  { feature: 'Annual property report', monthly: false, biannual: false, yearly: true },
]

function PlanCard({ plan, isPopular }) {
  return (
    <div className={`relative bg-white rounded-3xl border-2 ${plan.color} p-7 flex flex-col transition-shadow hover:shadow-card-hover`}>
      {plan.badge && (
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold shadow ${isPopular ? 'bg-primary text-white' : 'bg-navy text-white'}`}>
          {plan.badge}
        </div>
      )}
      <div className="mb-5">
        <h3 className="text-xl font-extrabold text-navy">{plan.name}</h3>
        <p className="text-sm text-gray-500 mt-0.5">{plan.tagline}</p>
      </div>
      <div className="mb-5">
        <span className="text-4xl font-extrabold text-navy">{plan.price}</span>
        <span className="text-gray-400 text-sm">{plan.period}</span>
        {plan.savings && (
          <span className="ml-3 badge bg-green-100 text-green-700">{plan.savings}</span>
        )}
      </div>
      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
        {plan.notIncluded.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400 line-through">
            <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`${isPopular ? 'btn-primary' : 'btn-outline'} w-full py-3 text-sm justify-center`}
      >
        Get Started <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}

export default function Subscriptions() {
  const [showTable, setShowTable] = useState(false)

  const renderCell = (val) => {
    if (val === true) return <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
    if (val === false) return <X className="w-4 h-4 text-gray-300 mx-auto" />
    return <span className="text-sm font-semibold text-navy">{val}</span>
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-white/20 text-white mb-4">Subscription Plans</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Your home on autopilot</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Recurring care plans that keep your home safe, clean, and running — without lifting a finger.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-5 py-2 text-sm font-semibold text-orange-200">
            <Globe className="w-4 h-4" />
            Perfect for people living outside the city or country
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} isPopular={plan.id === 'biannual'} />
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setShowTable(!showTable)}
              className="text-sm text-primary font-semibold hover:underline"
            >
              {showTable ? 'Hide' : 'Show'} full comparison table
            </button>
          </div>

          {showTable && (
            <div className="mt-8 bg-white rounded-2xl shadow-card overflow-x-auto animate-fade-in">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-6 py-4 text-gray-500 font-medium">Feature</th>
                    {plans.map(p => (
                      <th key={p.id} className="px-6 py-4 text-center font-bold text-navy">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ feature, monthly, biannual, yearly }, i) => (
                    <tr key={feature} className={i % 2 === 0 ? 'bg-gray-50/50' : ''}>
                      <td className="px-6 py-3 text-gray-700">{feature}</td>
                      <td className="px-6 py-3 text-center">{renderCell(monthly)}</td>
                      <td className="px-6 py-3 text-center">{renderCell(biannual)}</td>
                      <td className="px-6 py-3 text-center">{renderCell(yearly)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* For NRIs / remote owners */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                badge="For Remote Property Owners"
                title="Your home is in good hands — even when you're not there"
                subtitle="Whether you're in another city or another country, FixZo's yearly subscription keeps your property safe, clean, and well-maintained."
              />
              <div className="space-y-4">
                {[
                  { icon: Globe, title: 'Family Remote Access', desc: 'Book services, view reports, and track professionals from anywhere in the world.' },
                  { icon: Shield, title: 'Monthly property reports', desc: 'Detailed condition reports with photos sent directly to your inbox.' },
                  { icon: Clock, title: 'Smart reminders', desc: 'Automated alerts for scheduled visits and maintenance tasks.' },
                  { icon: Star, title: 'Dedicated account manager', desc: 'One point of contact who knows your property inside out.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm">{title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary px-8 py-3">
                  Talk to Us About Remote Plans <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8">
              <div className="text-center mb-6">
                <Globe className="w-12 h-12 text-primary mx-auto mb-2" />
                <h3 className="font-extrabold text-navy text-xl">NRI Preferred Plan</h3>
                <p className="text-sm text-gray-500 mt-1">Yearly subscription — full care</p>
              </div>
              {[
                { icon: HomeIcon, label: 'Monthly home inspections' },
                { icon: Sparkles, label: 'Regular cleaning visits' },
                { icon: Wrench, label: 'Preventive maintenance' },
                { icon: Car, label: 'Vehicle monitoring' },
                { icon: Shield, label: 'Security checks' },
                { icon: Star, label: 'Trusted, verified team' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 py-3 border-b border-gray-200 last:border-0">
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-navy">{label}</span>
                  <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">Not sure which plan is right?</h2>
          <p className="text-gray-500 mb-8">Our team will help you pick the right plan based on your property and needs.</p>
          <Link to="/contact" className="btn-primary px-8 py-4">
            <Zap className="w-5 h-5" /> Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
