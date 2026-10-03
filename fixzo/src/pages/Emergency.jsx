import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Zap, MapPin, Phone, ChevronRight, CheckCircle, Clock,
  User, MessageSquare, CreditCard, Shield, Star, ArrowLeft
} from 'lucide-react'

const serviceTypes = [
  'Plumbing Emergency',
  'Electrical Emergency',
  'Emergency Cleaning',
  'Appliance Breakdown',
  'Gas / Water Leak',
  'Lock / Door Issue',
  'Roof / Water Damage',
  'Other Emergency',
]

const trackingSteps = [
  { label: 'Request Received', desc: 'Your request is confirmed', done: true },
  { label: 'Professional Assigned', desc: 'Ravi Kumar is on your job', done: true },
  { label: 'On the Way', desc: 'ETA: 18 minutes', done: false, active: true },
  { label: 'Arrived', desc: 'Professional has arrived', done: false },
  { label: 'Completed', desc: 'Job done & verified', done: false },
]

function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({ service: '', location: '', description: '', phone: '' })
  const [errors, setErrors] = useState({})
  const [locating, setLocating] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.service) e.service = 'Please select a service type'
    if (!form.location.trim()) e.location = 'Location is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    onSubmit(form)
  }

  const useMyLocation = () => {
    setLocating(true)
    if (!navigator.geolocation) {
      setForm(f => ({ ...f, location: 'Koramangala, Bangalore, Karnataka' }))
      setLocating(false)
      return
    }
    navigator.geolocation.getCurrentPosition(
      () => {
        setForm(f => ({ ...f, location: 'Current Location (GPS detected)' }))
        setLocating(false)
      },
      () => {
        setForm(f => ({ ...f, location: 'Koramangala, Bangalore, Karnataka' }))
        setLocating(false)
      }
    )
  }

  const field = (name) => ({
    value: form[name],
    onChange: (e) => { setForm(f => ({ ...f, [name]: e.target.value })); setErrors(er => ({ ...er, [name]: '' })) },
  })

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Service type */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="service">
          What do you need help with? <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          {...field('service')}
          className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white ${errors.service ? 'border-red-400' : 'border-gray-300'}`}
        >
          <option value="">Select service type…</option>
          {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="location">
          Your Location <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="location"
            type="text"
            placeholder="Enter your address or area…"
            {...field('location')}
            className={`w-full rounded-xl border px-4 py-3 pr-36 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.location ? 'border-red-400' : 'border-gray-300'}`}
          />
          <button
            type="button"
            onClick={useMyLocation}
            disabled={locating}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-60"
          >
            <MapPin className="w-3.5 h-3.5" />
            {locating ? 'Locating…' : 'Use My Location'}
          </button>
        </div>
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="description">
          Brief Description <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id="description"
          rows={3}
          placeholder="Describe the issue briefly — e.g. 'water leaking from under the sink'"
          {...field('description')}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-navy mb-1.5" htmlFor="phone">
          Your Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-medium">+91</span>
          <input
            id="phone"
            type="tel"
            placeholder="98765 43210"
            {...field('phone')}
            className={`w-full rounded-xl border px-4 py-3 pl-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
          />
        </div>
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <button type="submit" className="btn-accent w-full text-base py-4 mt-2">
        <Zap className="w-5 h-5" /> Send Emergency Request
      </button>
      <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
        <Shield className="w-3.5 h-3.5" /> Your information is secure and never shared
      </p>
    </form>
  )
}

function ConfirmationScreen({ form }) {
  const [paymentDone, setPaymentDone] = useState(false)

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Confirmation banner */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex gap-4 items-start">
        <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-bold text-green-800 text-lg">Request Confirmed!</h3>
          <p className="text-green-700 text-sm mt-1">
            A verified professional has been assigned to your job. Estimated arrival: <strong>18–35 minutes</strong>.
          </p>
        </div>
      </div>

      {/* Job summary */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
        <h4 className="font-bold text-navy">Job Summary</h4>
        {[
          { icon: Zap, label: 'Service', val: form.service },
          { icon: MapPin, label: 'Location', val: form.location },
          { icon: Phone, label: 'Contact', val: `+91 ${form.phone}` },
          { icon: Clock, label: 'ETA', val: '18–35 minutes' },
        ].map(({ icon: Icon, label, val }) => (
          <div key={label} className="flex items-start gap-3 text-sm">
            <Icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-500 w-24 flex-shrink-0">{label}</span>
            <span className="font-medium text-navy">{val}</span>
          </div>
        ))}
      </div>

      {/* Assigned professional */}
      <div className="bg-primary-50 rounded-2xl p-5">
        <h4 className="font-bold text-navy mb-4">Your Professional</h4>
        <div className="flex items-center gap-4">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=Ravi&backgroundColor=1d4ed8&fontColor=ffffff"
            alt="Ravi Kumar"
            className="w-14 h-14 rounded-full border-2 border-white shadow"
          />
          <div className="flex-1">
            <div className="font-bold text-navy">Ravi Kumar</div>
            <div className="text-sm text-gray-500">Multi-Skilled Professional · Plumbing & Electrical</div>
            <div className="flex items-center gap-1 mt-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
              <span className="text-xs text-gray-500 ml-1">4.9 · 312 jobs</span>
            </div>
          </div>
          <a href="tel:+911234567890" className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <Phone className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>

      {/* Live Tracking */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5">
        <h4 className="font-bold text-navy mb-5">Live Tracking</h4>
        <ol className="space-y-4">
          {trackingSteps.map(({ label, desc, done, active }, i) => (
            <li key={label} className="flex items-start gap-4">
              <div className="relative flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${done ? 'bg-primary text-white' : active ? 'bg-accent text-white ring-4 ring-orange-100' : 'bg-gray-100 text-gray-400'}`}>
                  {done ? <CheckCircle className="w-4 h-4" /> : active ? <Clock className="w-4 h-4 animate-pulse" /> : <span className="text-xs font-bold">{i + 1}</span>}
                </div>
                {i < trackingSteps.length - 1 && (
                  <div className={`w-0.5 h-6 mt-1 ${done ? 'bg-primary' : 'bg-gray-200'}`} />
                )}
              </div>
              <div className="pt-1">
                <p className={`font-semibold text-sm ${done || active ? 'text-navy' : 'text-gray-400'}`}>{label}</p>
                <p className={`text-xs mt-0.5 ${active ? 'text-accent font-medium' : 'text-gray-400'}`}>{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Payment placeholder */}
      {!paymentDone ? (
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-5 h-5 text-primary" />
            <h4 className="font-bold text-navy">Payment</h4>
            <span className="badge bg-yellow-100 text-yellow-700 ml-auto">Pay after service</span>
          </div>
          <p className="text-sm text-gray-500 mb-5">
            You'll be charged after the professional completes the job and you confirm the service.
          </p>
          <div className="grid grid-cols-3 gap-3 mb-5">
            {['UPI / GPay', 'Card', 'Net Banking'].map(m => (
              <button key={m} className="border border-gray-200 rounded-xl p-3 text-xs font-medium text-gray-600 hover:border-primary hover:text-primary transition-colors">
                {m}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPaymentDone(true)}
            className="btn-primary w-full py-3 text-sm"
          >
            <CreditCard className="w-4 h-4" /> Confirm Payment Method
          </button>
        </div>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex gap-3 items-center">
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
          <div>
            <p className="font-bold text-green-800">Payment method saved</p>
            <p className="text-sm text-green-700">You'll be charged only after job completion.</p>
          </div>
        </div>
      )}

      <Link to="/" className="btn-outline w-full py-3 text-sm justify-center">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
    </div>
  )
}

export default function Emergency() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState(null)

  const handleSubmit = (data) => {
    setFormData(data)
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Live dispatch available now
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Emergency Help</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            One form. One tap. A verified professional at your door in 30–60 minutes.
          </p>
        </div>
      </section>

      <section className="section bg-neutral-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <ConfirmationScreen form={formData} />
          ) : (
            <div className="card shadow-card-hover animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" fill="currentColor" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-navy">Request Emergency Help</h2>
                  <p className="text-sm text-gray-500">Takes less than 60 seconds</p>
                </div>
              </div>
              <BookingForm onSubmit={handleSubmit} />
            </div>
          )}
        </div>
      </section>

      {/* Assurance strip */}
      {!submitted && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: Clock, title: '30–60 Min Response', desc: 'Nearest available professional dispatched instantly' },
                { icon: Shield, title: 'Verified Professionals', desc: 'License-checked and background-verified workers' },
                { icon: CheckCircle, title: 'Service Warranty', desc: 'We fix it right or come back at no charge' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-navy">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
