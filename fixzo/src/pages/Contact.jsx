import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle, Send, MessageSquare, Zap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const contactDetails = [
  { icon: Phone, title: 'Phone', lines: ['+91 1800-FIXZO-24 (Toll Free)', 'Mon–Sun · 24 hours'], action: 'tel:+911800349624', actionLabel: 'Call Now' },
  { icon: Mail, title: 'Email', lines: ['support@fixzo.in', 'business@fixzo.in'], action: 'mailto:support@fixzo.in', actionLabel: 'Send Email' },
  { icon: Clock, title: 'Emergency', lines: ['Available 24/7', '30–60 min response'], action: '/emergency', actionLabel: 'Get Help Now', accent: true },
]

const serviceAreas = [
  { city: 'Bangalore', status: 'active', note: 'All zones covered' },
  { city: 'Chennai', status: 'active', note: 'All zones covered' },
  { city: 'Hyderabad', status: 'active', note: 'All zones covered' },
  { city: 'Kochi', status: 'active', note: 'Select zones' },
  { city: 'Pune', status: 'upcoming', note: 'Launching Q1 2025' },
  { city: 'Mumbai', status: 'upcoming', note: 'Launching Q2 2025' },
  { city: 'Delhi / NCR', status: 'upcoming', note: 'Launching Q2 2025' },
  { city: 'Ahmedabad', status: 'future', note: 'Phase 3 expansion' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }))
    setErrors(er => ({ ...er, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-white/20 text-white mb-4">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">We're here to help</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Questions, feedback, business enquiries, or just want to know if we serve your area — reach out.
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {contactDetails.map(({ icon: Icon, title, lines, action, actionLabel, accent }) => (
              <div key={title} className={`card text-center ${accent ? 'border-2 border-accent/40 bg-orange-50' : ''}`}>
                <div className={`w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center ${accent ? 'bg-accent' : 'bg-primary-50'}`}>
                  <Icon className={`w-6 h-6 ${accent ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                {lines.map(l => <p key={l} className="text-sm text-gray-500">{l}</p>)}
                <a
                  href={action}
                  className={`mt-4 inline-flex items-center gap-2 text-sm font-semibold ${accent ? 'text-accent' : 'text-primary'} hover:underline`}
                >
                  {actionLabel}
                </a>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <SectionHeader
                badge="Send a Message"
                title="Get in touch"
                subtitle="We aim to respond within 4 hours during business hours."
              />
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-fade-up">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-extrabold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thanks, <strong>{form.name}</strong>. We'll get back to you at <strong>{form.email}</strong> within 4 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Your Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Full name" value={form.name} onChange={set('name')}
                        className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? 'border-red-400' : 'border-gray-300'}`} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Email <span className="text-red-500">*</span></label>
                      <input type="email" placeholder="your@email.com" value={form.email} onChange={set('email')}
                        className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-400' : 'border-gray-300'}`} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={set('phone')}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Subject</label>
                    <select value={form.subject} onChange={set('subject')}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                      <option value="">Select a topic…</option>
                      {['General Enquiry', 'Service Complaint', 'Business Partnership', 'Professional Application', 'Subscription Query', 'Press / Media', 'Other'].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea rows={5} placeholder="Tell us what's on your mind…" value={form.message} onChange={set('message')}
                      className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-base">
                    <Send className="w-5 h-5" /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Service areas */}
            <div>
              <SectionHeader
                badge="Service Areas"
                title="Where we operate"
                subtitle="Actively expanding. Don't see your city? Register your interest and we'll notify you."
              />
              <div className="grid grid-cols-2 gap-3 mb-6">
                {serviceAreas.map(({ city, status, note }) => (
                  <div key={city} className={`rounded-2xl p-4 border ${
                    status === 'active' ? 'bg-green-50 border-green-200' :
                    status === 'upcoming' ? 'bg-blue-50 border-blue-200' :
                    'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className={`w-4 h-4 ${
                        status === 'active' ? 'text-green-600' :
                        status === 'upcoming' ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                      <span className="font-bold text-navy text-sm">{city}</span>
                    </div>
                    <div className={`text-xs ${
                      status === 'active' ? 'text-green-600' :
                      status === 'upcoming' ? 'text-blue-600' : 'text-gray-400'
                    }`}>{note}</div>
                  </div>
                ))}
              </div>
              <div className="bg-primary-50 rounded-2xl p-5 border border-primary/20">
                <h4 className="font-bold text-navy mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" /> Not in the list?
                </h4>
                <p className="text-sm text-gray-600 mb-4">Leave your city and email below and we'll notify you when we launch near you.</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Your city"
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="btn-primary text-sm px-4 py-2.5">Notify Me</button>
                </div>
              </div>

              {/* Emergency quick link */}
              <div className="mt-6 bg-gradient-to-br from-accent to-orange-500 rounded-2xl p-6 text-white">
                <h4 className="font-bold text-lg mb-1">Need help right now?</h4>
                <p className="text-white/80 text-sm mb-4">Don't fill a contact form — book emergency help instantly.</p>
                <a href="/emergency" className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors">
                  <Zap className="w-4 h-4" /> Emergency Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
