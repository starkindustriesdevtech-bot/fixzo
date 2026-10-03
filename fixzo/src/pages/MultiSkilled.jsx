import React from 'react'
import { Link } from 'react-router-dom'
import {
  X, CheckCircle, Zap, Clock, DollarSign, Users,
  Wrench, Droplets, Bolt, Sparkles, ArrowRight, Star, BadgeCheck
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const beforeItems = [
  { icon: Droplets, label: 'Plumber', time: 'Wait 1–2 hrs', cost: '₹500' },
  { icon: Bolt, label: 'Electrician', time: 'Wait 1–2 hrs', cost: '₹450' },
  { icon: Sparkles, label: 'Cleaner', time: 'Wait 1–2 hrs', cost: '₹399' },
]

const benefits = [
  { icon: Clock, title: 'Faster completion', desc: 'One visit covers multiple tasks instead of waiting for three separate bookings.' },
  { icon: DollarSign, title: 'Lower total cost', desc: 'One travel cost, one dispatch fee — not three separate call-out charges.' },
  { icon: Users, title: 'Better coordination', desc: 'One professional understands the full picture of your home, not just one small piece.' },
  { icon: Wrench, title: 'Comprehensive fixes', desc: 'Our multi-skilled pros are trained to identify related issues — fixing the root, not just the symptom.' },
]

const professionals = [
  { name: 'Arjun Nair', skills: ['Plumbing', 'Electrical', 'Minor Carpentry'], rating: 4.9, jobs: 312, city: 'Bangalore' },
  { name: 'Priya Menon', skills: ['Deep Cleaning', 'Appliance Care', 'Kitchen Maintenance'], rating: 5.0, jobs: 198, city: 'Kochi' },
  { name: 'Suresh Babu', skills: ['Appliance Repair', 'AC Servicing', 'Electrical'], rating: 4.8, jobs: 445, city: 'Chennai' },
  { name: 'Divya Sharma', skills: ['Cleaning', 'Painting', 'Minor Carpentry'], rating: 4.9, jobs: 276, city: 'Hyderabad' },
]

export default function MultiSkilled() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-white/20 text-white mb-4">The FixZo Innovation</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">One professional. Multiple skills.</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Instead of calling a plumber, an electrician, and a cleaner separately — FixZo sends one trained multi-skilled professional who handles everything in a single visit.
          </p>
        </div>
      </section>

      {/* Before / After visual */}
      <section className="section bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Before vs After"
            title="The old way vs the FixZo way"
            subtitle="Three separate bookings, three separate waits, three separate bills — or one smart visit."
            center
          />
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-extrabold text-red-800 text-xl">The Old Way</h3>
                  <p className="text-sm text-red-600">3 bookings · 3 waits · 3 bills</p>
                </div>
              </div>

              <div className="space-y-4">
                {beforeItems.map(({ icon: Icon, label, time, cost }) => (
                  <div key={label} className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{label}</div>
                      <div className="text-xs text-red-500">{time}</div>
                    </div>
                    <span className="font-bold text-red-600">{cost}</span>
                  </div>
                ))}

                <div className="bg-red-100 rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-red-700 font-medium">Total wait time</div>
                    <div className="font-extrabold text-red-800 text-xl">4–6 hours</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-700 font-medium">Total cost</div>
                    <div className="font-extrabold text-red-800 text-xl">₹1,349+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 border-2 border-green-300 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-extrabold text-green-800 text-xl">The FixZo Way</h3>
                  <p className="text-sm text-green-600">1 booking · 1 visit · 1 bill</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-green-200 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/initials/svg?seed=Arjun&backgroundColor=1d4ed8&fontColor=ffffff"
                    alt="Arjun"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-navy">Arjun Nair</div>
                    <div className="text-xs text-gray-500">Multi-Skilled Professional</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                      <span className="text-xs text-gray-500 ml-1">4.9 · 312 jobs</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Plumbing ✓', 'Electrical ✓', 'Minor Carpentry ✓'].map(s => (
                    <span key={s} className="badge bg-primary-50 text-primary-700 text-xs">{s}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {['Fixes leaking pipe', 'Replaces faulty switch', 'Cleans up and tidies work area'].map(task => (
                  <div key={task} className="flex items-center gap-3 bg-white rounded-xl p-3 text-sm border border-green-100">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-100 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-green-700 font-medium">Total wait time</div>
                  <div className="font-extrabold text-green-800 text-xl">30–60 min</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-700 font-medium">Total cost</div>
                  <div className="font-extrabold text-green-800 text-xl">₹799</div>
                </div>
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className="mt-8 bg-primary rounded-2xl p-6 text-white text-center">
            <p className="text-2xl font-extrabold mb-1">Save up to 40% and 5 hours of your day</p>
            <p className="text-white/70">by booking one multi-skilled professional instead of three separate ones.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why It Works"
            title="The benefits of multi-skilled professionals"
            subtitle="Smarter, faster, cheaper — and better quality because one person owns the whole job."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Featured professionals */}
      <section className="section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Professionals"
            title="Meet some of our multi-skilled team"
            subtitle="Trained, verified, and ready to handle your whole home."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionals.map(({ name, skills, rating, jobs, city }) => (
              <div key={name} className="card text-center group">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=1d4ed8&fontColor=ffffff`}
                  alt={name}
                  className="w-16 h-16 rounded-2xl mx-auto mb-3 border-2 border-primary-100"
                />
                <h3 className="font-bold text-navy">{name}</h3>
                <div className="text-xs text-gray-400 mb-3">{city}</div>
                <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                  {skills.map(s => (
                    <span key={s} className="badge bg-primary-50 text-primary-700 text-xs">{s}</span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1 text-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-navy">{rating}</span>
                  <span className="text-gray-400">· {jobs} jobs</span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary font-medium">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">Want to join as a multi-skilled professional?</h2>
          <p className="text-gray-500 mb-8">We offer training and certification for professionals who want to expand their skills and earn more.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/professionals" className="btn-primary px-8 py-4">
              Join as a Professional <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/emergency" className="btn-accent px-8 py-4">
              <Zap className="w-5 h-5" /> Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
