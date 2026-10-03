import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Zap, Search, CheckCircle, Star, ShieldCheck, Clock, Wrench,
  Droplets, Bolt, Sparkles, Car, Tv, Hammer, ArrowRight,
  Users, Home as HomeIcon, Building, Globe, HardHat,
  ChevronDown, ChevronUp, Phone, BadgeCheck, Award, TrendingUp
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-primary-800 to-primary-600 text-white min-h-[92vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="badge bg-accent/20 text-orange-200 mb-6 text-sm">
            <Zap className="w-3.5 h-3.5" /> Available 24 / 7 · Response in 30–60 min
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Fix It <span className="text-accent">Fast.</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
            Emergency household services in one simple platform. Connect with verified professionals and get help at your door — fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/emergency" className="btn-accent text-base px-8 py-4 shadow-xl shadow-orange-500/30 text-center">
              <Zap className="w-5 h-5" />
              One-Tap Emergency Help
            </Link>
            <Link to="/services" className="btn-outline-white text-base px-8 py-4 text-center">
              Book a Service
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: '10,000+', label: 'Happy Customers' },
              { value: '500+', label: 'Verified Pros' },
              { value: '4.8★', label: 'Average Rating' },
              { value: '<45 min', label: 'Avg Response' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-accent">{s.value}</div>
                <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – mock card */}
        <div className="hidden lg:flex justify-center animate-fade-in">
          <div className="relative w-full max-w-sm">
            {/* Main booking card */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 text-gray-800">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-navy">Emergency Plumbing</div>
                  <div className="text-xs text-gray-400">Pipe burst · Urgent</div>
                </div>
                <span className="ml-auto badge bg-green-100 text-green-700">Live</span>
              </div>
              <div className="space-y-3 mb-5">
                {['Assigned', 'On the way', 'Arrived', 'Completed'].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${i < 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {i < 2 ? <CheckCircle className="w-4 h-4" /> : i + 1}
                    </div>
                    <span className={`text-sm font-medium ${i < 2 ? 'text-navy' : 'text-gray-400'}`}>{step}</span>
                    {i === 1 && <span className="ml-auto text-xs text-accent font-semibold">ETA 12 min</span>}
                  </div>
                ))}
              </div>
              <div className="bg-primary-50 rounded-2xl p-4 flex items-center gap-3">
                <img src="https://api.dicebear.com/7.x/initials/svg?seed=Ravi&backgroundColor=1d4ed8&fontColor=ffffff" alt="Professional" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold text-sm text-navy">Ravi Kumar</div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    4.9 · Verified · 230 jobs
                  </div>
                </div>
                <a href="tel:+911234567890" className="ml-auto w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              30–60 min response
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-navy text-xs font-bold px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" /> Verified Pro
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  )
}

/* ── Problem Strip ── */
function ProblemStrip() {
  const problems = [
    { icon: Search, title: 'Finding trusted help is hard', desc: "Unverified contacts, word-of-mouth chaos. You never really know who's coming." },
    { icon: Phone, title: 'Too many phone numbers', desc: 'A different number for every job type. One platform should be enough.' },
    { icon: TrendingUp, title: 'Unclear prices', desc: 'Surprise bills and inflated quotes leave people frustrated and cheated.' },
    { icon: HardHat, title: 'Irregular work for skilled workers', desc: 'Talented professionals struggle to find consistent, well-paying work.' },
  ]

  return (
    <section className="bg-neutral-bg section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Problem"
          title="Why getting home help is broken"
          subtitle="Millions of households face the same struggle every time something breaks."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card group">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                <Icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-bold text-navy mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── How It Works ── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Choose a service', desc: 'Pick from our full range of home services — emergency or planned.' },
    { num: '02', title: 'Confirm the visit', desc: 'Set your location, time, and any notes. We handle the rest.' },
    { num: '03', title: 'Track the professional', desc: 'Live status updates from assignment through arrival and completion.' },
    { num: '04', title: 'Fix the problem', desc: 'Service done, issue resolved. Pay securely with our warranty-backed guarantee.' },
  ]

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="Four steps from problem to fixed"
          subtitle="Book in under two minutes. Track in real time. Pay securely."
          center
        />
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30 z-10">
                <span className="text-3xl font-extrabold text-white">{num}</span>
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent rounded-full border-2 border-white" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/emergency" className="btn-accent text-base px-8 py-4">
            <Zap className="w-5 h-5" /> Book Now — Fast
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Service Categories Preview ── */
function ServiceCategories() {
  const categories = [
    { icon: Droplets, label: 'Plumbing', color: 'bg-blue-50 text-blue-600' },
    { icon: Bolt, label: 'Electrical', color: 'bg-yellow-50 text-yellow-600' },
    { icon: Sparkles, label: 'Cleaning', color: 'bg-green-50 text-green-600' },
    { icon: Car, label: 'Car Washing', color: 'bg-sky-50 text-sky-600' },
    { icon: Tv, label: 'Appliance Repair', color: 'bg-purple-50 text-purple-600' },
    { icon: Hammer, label: 'Carpentry', color: 'bg-amber-50 text-amber-700' },
    { icon: Wrench, label: 'Maintenance', color: 'bg-red-50 text-red-600' },
    { icon: HomeIcon, label: 'Property Care', color: 'bg-teal-50 text-teal-600' },
  ]

  return (
    <section className="section bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Services"
          title="Everything your home needs"
          subtitle="From burst pipes to full deep cleans — we cover it all with verified professionals."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map(({ icon: Icon, label, color }) => (
            <Link
              to="/services"
              key={label}
              className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-navy text-center">{label}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="btn-outline text-sm">View All Services <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </section>
  )
}

/* ── Trust Section ── */
function TrustSection() {
  const trust = [
    { icon: BadgeCheck, title: 'Verified Licenses', desc: 'Every professional is document-verified before they join the platform.' },
    { icon: Award, title: 'Skill-Tested Pros', desc: 'In-person interviews and practical skill tests for planned service workers.' },
    { icon: Star, title: 'Ratings & Trust Scores', desc: 'Transparent scores after every job — no hiding bad performance.' },
    { icon: ShieldCheck, title: 'Service Warranty', desc: "If the job isn't done right, we come back and fix it. No extra charge." },
  ]

  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Trust & Safety"
              title="You deserve to know who's coming"
              subtitle="We take safety seriously — from license checks to real-time tracking to post-service warranties."
            />
            <div className="grid sm:grid-cols-2 gap-5">
              {trust.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm mb-1">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 space-y-4">
            {[
              { name: 'Arjun Nair', skill: 'Plumber & Electrician', rating: 4.9, jobs: 312, verified: true },
              { name: 'Priya Menon', skill: 'Deep Clean Specialist', rating: 5.0, jobs: 198, verified: true },
              { name: 'Suresh Babu', skill: 'Appliance Technician', rating: 4.8, jobs: 445, verified: true },
            ].map((pro) => (
              <div key={pro.name} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-card">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${pro.name}&backgroundColor=1d4ed8&fontColor=ffffff`}
                  alt={pro.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy text-sm">{pro.name}</span>
                    {pro.verified && <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0" />}
                  </div>
                  <div className="text-xs text-gray-500">{pro.skill}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1 text-xs font-semibold text-yellow-600">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />{pro.rating}
                    </span>
                    <span className="text-xs text-gray-400">· {pro.jobs} jobs completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Who We Serve ── */
function WhoWeServe() {
  const segments = [
    { icon: HomeIcon, title: 'Households', desc: 'Everyday home repairs and cleaning for busy families.', color: 'from-blue-500 to-primary' },
    { icon: Users, title: 'Elderly People', desc: 'Simplified booking, larger text, and trusted professionals — designed for safety.', color: 'from-teal-500 to-emerald-500' },
    { icon: Building, title: 'Businesses', desc: 'Office servicing, cleaning contracts, and maintenance plans.', color: 'from-purple-500 to-violet-500' },
    { icon: Globe, title: 'Property Owners Abroad', desc: 'Monitor and manage your property remotely. Book on behalf of family.', color: 'from-accent to-orange-400' },
    { icon: HardHat, title: 'Service Professionals', desc: 'Consistent work, training, and a platform to grow your career.', color: 'from-navy to-primary' },
  ]

  return (
    <section className="section bg-gradient-to-br from-navy to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Who We Serve"
          title="Built for every kind of home and owner"
          subtitle="Whether you're down the street or across the world, FixZo has you covered."
          center
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {segments.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ── */
function Testimonials() {
  const testimonials = [
    { name: 'Meera S.', role: 'Homeowner, Bangalore', text: 'My pipe burst at midnight. FixZo had a plumber at my door in 38 minutes. Absolutely incredible response time.', rating: 5, avatar: 'Meera' },
    { name: 'Rajesh K.', role: 'NRI, Dubai', text: 'I manage my parents\' house from abroad. FixZo\'s Family Remote Access feature lets me book and track everything from my phone. Total peace of mind.', rating: 5, avatar: 'Rajesh' },
    { name: 'Sunita P.', role: 'Retired, 68 years old', text: 'The Elderly Care Mode makes it so simple. Large buttons, clear instructions. My daughter set it up and now I can book help myself.', rating: 5, avatar: 'Sunita' },
    { name: 'Vikram N.', role: 'Office Manager, Chennai', text: 'We have a monthly subscription for office cleaning. The professionals are consistent, punctual, and genuinely skilled.', rating: 5, avatar: 'Vikram' },
  ]

  return (
    <section className="section bg-neutral-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What our customers say"
          subtitle="Real stories from real people across India."
          center
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(({ name, role, text, rating, avatar }) => (
            <div key={name} className="card flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">"{text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${avatar}&backgroundColor=1d4ed8&fontColor=ffffff`}
                  alt={name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-bold text-navy text-sm">{name}</div>
                  <div className="text-xs text-gray-400">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ── */
const faqs = [
  { q: 'How fast can a professional reach me?', a: 'For emergency services, our average response time is 30–60 minutes within our service area. We dispatch the nearest available verified professional immediately.' },
  { q: 'Are all professionals background-checked?', a: 'Yes. Every professional on FixZo is document-verified, license-checked, and skill-tested before onboarding. Planned service pros also go through a structured interview and training program.' },
  { q: 'What if I\'m not satisfied with the service?', a: 'All services come with our warranty guarantee. If the job isn\'t done right, we\'ll send a professional back to fix it at no additional cost.' },
  { q: 'Can I book on behalf of elderly parents?', a: 'Absolutely. Our Family Remote Access feature lets you book, track, and pay for services on behalf of any family member or property — from anywhere in the world.' },
  { q: 'What areas do you currently serve?', a: 'We\'re currently operating in major cities with rapid expansion underway. Check our service area map on the Contact page or call our helpline.' },
  { q: 'How does payment work?', a: 'We support UPI, cards, and net banking. Payment is held securely and released to the professional only after you confirm the service is complete.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="section bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Common questions"
          subtitle="Quick answers to what people ask most."
          center
        />
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy text-sm sm:text-base">{q}</span>
                {open === i
                  ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed animate-fade-in border-t border-gray-100 pt-4">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <section className="section bg-neutral-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-primary to-primary-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent blur-3xl" />
          </div>
          <div className="relative">
            <span className="badge bg-white/20 text-white mb-4">Ready when you are</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Don't wait for the problem to get worse</h2>
            <p className="text-white/70 mb-8 text-lg">Book a service in under 2 minutes. A verified professional is closer than you think.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/emergency" className="btn-accent text-base px-8 py-4">
                <Zap className="w-5 h-5" /> Emergency Help Now
              </Link>
              <Link to="/services" className="btn-outline-white text-base px-8 py-4">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStrip />
      <HowItWorks />
      <ServiceCategories />
      <TrustSection />
      <WhoWeServe />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
