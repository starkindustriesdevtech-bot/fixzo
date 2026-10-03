import React, { useState } from 'react'
import {
  CheckCircle, Briefcase, TrendingUp, Star, Shield, Clock,
  Upload, ChevronRight, Zap, Users, Award, ArrowRight
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const benefits = [
  { icon: Briefcase, title: 'Regular, organized work', desc: 'No more waiting for calls. Jobs come to you — scheduled, confirmed, and mapped.' },
  { icon: TrendingUp, title: 'Earnings tracking', desc: 'Clear dashboard of every job, payment, and payout. No confusion, no surprises.' },
  { icon: Award, title: 'Skill training & certification', desc: 'Structured training to expand your skills and unlock higher-value jobs.' },
  { icon: Star, title: 'Ratings-based growth', desc: 'Build your trust score and get access to premium jobs with better rates.' },
  { icon: Shield, title: 'Company backing', desc: 'You\'re part of the FixZo team — with support, equipment, and protection.' },
  { icon: Users, title: 'Community of professionals', desc: 'Join a growing network of skilled workers across the country.' },
]

const paths = [
  {
    type: 'quick',
    title: 'Quick Service Professional',
    subtitle: 'Emergency & on-demand jobs',
    desc: 'Handle urgent, same-day bookings like plumbing, electrical, appliance repairs, and cleaning. Fast-paced, well-paying, flexible hours.',
    steps: [
      'Register with name, skill, and city',
      'Upload your license / ID documents',
      'Complete a short background check',
      'Get onboarded and start receiving jobs',
    ],
    color: 'border-accent',
    badge: 'bg-orange-100 text-orange-700',
    badgeText: 'Fast Onboarding',
    icon: Zap,
  },
  {
    type: 'planned',
    title: 'Planned Service Professional',
    subtitle: 'Scheduled & subscription jobs',
    desc: 'Work on pre-booked deep cleaning, maintenance visits, subscription plans, and specialised jobs. Higher pay, stable schedule, training included.',
    steps: [
      'Apply with your skill profile and experience',
      'Attend an in-person interview',
      'Pass the practical skill assessment',
      'Complete FixZo internal training program',
      'Start with verified subscription clients',
    ],
    color: 'border-primary',
    badge: 'bg-blue-100 text-blue-700',
    badgeText: 'Training Provided',
    icon: Award,
  },
]

const skills = [
  'Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Deep Cleaning',
  'Appliance Repair', 'AC Servicing', 'CCTV / Security', 'WiFi Setup',
  'Smart Home', 'Gardening', 'Vehicle Washing', 'Cooking', 'Other',
]

function ApplicationForm() {
  const [form, setForm] = useState({
    name: '', skill: '', experience: '', city: '', phone: '', email: '', path: '', about: '', license: null,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.type === 'file' ? e.target.files[0] : e.target.value }))
    setErrors(er => ({ ...er, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.skill) e.skill = 'Please select a skill'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number'
    if (!form.path) e.path = 'Please select a professional path'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-up">
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold text-green-800 mb-2">Application Submitted!</h3>
        <p className="text-green-700 mb-4">Thank you, <strong>{form.name}</strong>. Our team will review your application and contact you within 2–3 working days.</p>
        <p className="text-sm text-green-600">We'll reach you at <strong>{form.phone}</strong>{form.email ? ` and ${form.email}` : ''}.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Full Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Your full name" value={form.name} onChange={set('name')}
            className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-400' : 'border-gray-300'}`} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Primary Skill <span className="text-red-500">*</span></label>
          <select value={form.skill} onChange={set('skill')}
            className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.skill ? 'border-red-400' : 'border-gray-300'}`}>
            <option value="">Select your main skill…</option>
            {skills.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.skill && <p className="text-red-500 text-xs mt-1">{errors.skill}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Years of Experience</label>
          <select value={form.experience} onChange={set('experience')}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
            <option value="">Select…</option>
            {['Less than 1 year', '1–2 years', '3–5 years', '5–10 years', '10+ years'].map(e => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">City <span className="text-red-500">*</span></label>
          <input type="text" placeholder="e.g. Bangalore, Chennai…" value={form.city} onChange={set('city')}
            className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.city ? 'border-red-400' : 'border-gray-300'}`} />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Phone Number <span className="text-red-500">*</span></label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium">+91</span>
            <input type="tel" placeholder="98765 43210" value={form.phone} onChange={set('phone')}
              className={`w-full rounded-xl border px-4 py-3 pl-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-400' : 'border-gray-300'}`} />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-navy mb-1.5">Email Address</label>
          <input type="email" placeholder="your@email.com" value={form.email} onChange={set('email')}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>
      </div>

      {/* Path selection */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-3">Which path do you want to join? <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { val: 'quick', label: 'Quick Service Pro', sub: 'Emergency & on-demand jobs' },
            { val: 'planned', label: 'Planned Service Pro', sub: 'Scheduled & subscription jobs' },
          ].map(({ val, label, sub }) => (
            <label key={val} className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${form.path === val ? 'border-primary bg-primary-50' : 'border-gray-200 hover:border-primary/40'}`}>
              <input type="radio" name="path" value={val} checked={form.path === val} onChange={set('path')} className="mt-1 accent-primary" />
              <div>
                <div className="font-semibold text-navy text-sm">{label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
              </div>
            </label>
          ))}
        </div>
        {errors.path && <p className="text-red-500 text-xs mt-1">{errors.path}</p>}
      </div>

      {/* License upload */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">License / ID Document <span className="text-gray-400 font-normal">(optional)</span></label>
        <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-primary cursor-pointer transition-colors bg-gray-50">
          <Upload className="w-6 h-6 text-gray-400" />
          <div>
            <span className="text-sm font-medium text-gray-700">
              {form.license ? form.license.name : 'Click to upload or drag and drop'}
            </span>
            <p className="text-xs text-gray-400 mt-0.5">PDF, JPG, PNG up to 5MB</p>
          </div>
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={set('license')} className="sr-only" />
        </label>
      </div>

      {/* About */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5">Tell us about yourself</label>
        <textarea rows={3} placeholder="Brief description of your experience and what makes you a great professional…"
          value={form.about} onChange={set('about')}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
      </div>

      <button type="submit" className="btn-primary w-full py-4 text-base">
        Submit Application <ArrowRight className="w-5 h-5" />
      </button>
      <p className="text-xs text-gray-400 text-center">Our team will review and contact you within 2–3 working days.</p>
    </form>
  )
}

export default function ForProfessionals() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge bg-white/20 text-white mb-4">Join the Team</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Grow your career with FixZo</h1>
            <p className="text-white/70 text-lg mb-8">
              Regular work. Fair pay. Skill training. A platform that values what you do.
            </p>
            <div className="flex flex-wrap gap-4">
              {['500+ active professionals', 'Work in your own city', 'Weekly payouts', 'Free skill training'].map(b => (
                <span key={b} className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Join FixZo"
            title="A better way to work"
            subtitle="We're building the platform we'd want to work on — organized, fair, and growth-focused."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card group">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Two Ways to Join"
            title="Choose your path"
            subtitle="Whether you want urgent, flexible work or stable, scheduled clients — there's a place for you."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {paths.map(({ icon: Icon, title, subtitle: sub, desc, steps, color, badge, badgeText }) => (
              <div key={title} className={`bg-white rounded-3xl border-2 ${color} p-8`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-extrabold text-navy text-xl">{title}</h3>
                      <span className={`badge ${badge} text-xs`}>{badgeText}</span>
                    </div>
                    <p className="text-sm text-gray-500">{sub}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{desc}</p>
                <h4 className="font-bold text-navy text-sm mb-3">How to join:</h4>
                <ol className="space-y-2">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-6 h-6 rounded-full bg-primary-50 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section bg-neutral-bg" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Apply Now"
            title="Start your application"
            subtitle="Fill in the details below and our team will get back to you within 2–3 working days."
            center
          />
          <div className="card shadow-card-hover">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </div>
  )
}
