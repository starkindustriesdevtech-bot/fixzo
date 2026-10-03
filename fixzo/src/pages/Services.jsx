import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Zap, Clock, Calendar, RefreshCw, Droplets, Bolt, Sparkles, Car,
  Tv, Hammer, Paintbrush, Wifi, Camera, Home as HomeIcon, Leaf,
  Package, Heart, Building, Shield, Wrench, ChefHat, Users,
  ArrowRight, CheckCircle, Star, AlertCircle
} from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const tabs = [
  { id: 'quick', label: 'Quick Services', icon: Zap, desc: '30–60 min response' },
  { id: 'planned', label: 'Planned Services', icon: Calendar, desc: 'Pre-scheduled visits' },
  { id: 'subscription', label: 'Subscriptions', icon: RefreshCw, desc: 'Ongoing care plans' },
]

const quickServices = [
  { icon: Droplets, label: 'Emergency Plumbing', time: '30–45 min', price: '₹399+', popular: true },
  { icon: Bolt, label: 'Electrical Repairs', time: '30–60 min', price: '₹349+', popular: true },
  { icon: Sparkles, label: 'Emergency Cleaning', time: '45–60 min', price: '₹499+', popular: false },
  { icon: Car, label: 'Car Washing', time: '30–45 min', price: '₹199+', popular: false },
  { icon: Tv, label: 'Appliance Repair', time: '45–60 min', price: '₹449+', popular: true },
  { icon: Wrench, label: 'Minor Installations', time: '30–60 min', price: '₹299+', popular: false },
]

const plannedServices = [
  { icon: Sparkles, label: 'Deep Cleaning', desc: 'Full home deep clean with eco-safe products', price: '₹999+' },
  { icon: ChefHat, label: 'Cooking Services', desc: 'Trained cooks for events or daily meal prep', price: '₹799+' },
  { icon: HomeIcon, label: 'Guest Preparation', desc: 'Complete home prep before guests or events', price: '₹1,499+' },
  { icon: Shield, label: 'Maintenance Inspection', desc: 'Full home health check — plumbing, electrical, appliances', price: '₹699+' },
  { icon: Building, label: 'Office Servicing', desc: 'Scheduled cleaning and maintenance for workspaces', price: '₹1,299+' },
]

const categories = [
  {
    title: 'Home Maintenance',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100 text-blue-600',
    icon: HomeIcon,
    services: ['Plumbing', 'Electrical', 'Carpentry', 'Painting', 'Appliance Repair'],
  },
  {
    title: 'Cleaning',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100 text-green-600',
    icon: Sparkles,
    services: ['Deep Cleaning', 'Sofa & Upholstery', 'Kitchen Deep Clean'],
  },
  {
    title: 'Technical',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100 text-purple-600',
    icon: Wifi,
    services: ['CCTV Installation', 'WiFi Setup', 'Smart Home Setup'],
  },
  {
    title: 'Personal',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100 text-amber-700',
    icon: Heart,
    services: ['Gardening', 'Packing Help', 'Elderly Assistance'],
  },
  {
    title: 'Business',
    color: 'bg-indigo-50 border-indigo-100',
    iconBg: 'bg-indigo-100 text-indigo-600',
    icon: Building,
    services: ['Office Cleaning', 'Maintenance Contracts', 'Corporate Plans'],
  },
  {
    title: 'Property Care',
    color: 'bg-teal-50 border-teal-100',
    iconBg: 'bg-teal-100 text-teal-600',
    icon: Shield,
    services: ['Property Monitoring', 'Regular Inspection', 'Upkeep & Repairs'],
  },
  {
    title: 'Health Assistance',
    color: 'bg-rose-50 border-rose-100',
    iconBg: 'bg-rose-100 text-rose-600',
    icon: Heart,
    services: ['Basic Health Checks', 'Elderly Medical Help', 'Medicine Reminders'],
  },
  {
    title: 'Construction & Renovation',
    color: 'bg-gray-50 border-gray-200',
    iconBg: 'bg-gray-200 text-gray-500',
    icon: Hammer,
    services: ['Full Renovation', 'Interior Design', 'New Construction'],
    comingSoon: true,
  },
]

function QuickTab() {
  return (
    <div>
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-8 flex gap-4 items-start">
        <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-orange-800">Emergency Response: 30–60 minutes</p>
          <p className="text-sm text-orange-700 mt-1">Coverage radius: 10–20 km per local office. We dispatch the nearest available verified professional immediately.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {quickServices.map(({ icon: Icon, label, time, price, popular }) => (
          <div key={label} className="card relative group">
            {popular && (
              <span className="absolute top-4 right-4 badge bg-accent/10 text-accent text-xs">Popular</span>
            )}
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-navy mb-1">{label}</h3>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{time}</span>
              <span className="font-semibold text-primary">{price}</span>
            </div>
            <Link to="/emergency" className="btn-accent text-sm w-full py-2.5 justify-center">
              <Zap className="w-4 h-4" /> Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlannedTab() {
  return (
    <div>
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 flex gap-4 items-start">
        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-primary-800">Professionally Trained & FixZo-Certified</p>
          <p className="text-sm text-primary-700 mt-1">All planned service professionals go through structured interviews, skill tests, and FixZo's internal training program.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {plannedServices.map(({ icon: Icon, label, desc, price }) => (
          <div key={label} className="card group">
            <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-navy mb-1">{label}</h3>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed">{desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-primary">{price}</span>
              <Link to="/emergency" className="btn-outline text-sm px-4 py-2">Book</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SubscriptionTab() {
  return (
    <div>
      <p className="text-gray-500 mb-8 text-base">Recurring service plans that keep your home running smoothly — perfect for busy households and property owners abroad.</p>
      <div className="text-center py-10">
        <p className="text-gray-400 mb-4">View our full subscription plans →</p>
        <Link to="/subscriptions" className="btn-primary">See All Plans <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </div>
  )
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('quick')

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="badge bg-white/20 text-white mb-4">Services</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Every home service, one platform</h1>
            <p className="text-white/70 text-lg">Emergency repairs to subscription plans — all delivered by verified, trained professionals.</p>
          </div>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map(({ id, label, icon: Icon, desc }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-3 px-6 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeTab === id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
                <span className={`hidden sm:block text-xs ${activeTab === id ? 'text-primary/70' : 'text-gray-400'}`}>— {desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <section className="section bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in" key={activeTab}>
            {activeTab === 'quick' && <QuickTab />}
            {activeTab === 'planned' && <PlannedTab />}
            {activeTab === 'subscription' && <SubscriptionTab />}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="All Categories"
            title="Every service we offer"
            subtitle="A full breakdown of what FixZo professionals can do for you."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(({ title, color, iconBg, icon: Icon, services, comingSoon }) => (
              <div key={title} className={`relative rounded-2xl border p-5 ${color} ${comingSoon ? 'opacity-70' : ''}`}>
                {comingSoon && (
                  <span className="absolute top-3 right-3 badge bg-gray-200 text-gray-600 text-xs">Coming Soon</span>
                )}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-navy mb-3">{title}</h3>
                <ul className="space-y-1.5">
                  {services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-navy mb-4">Not sure which service you need?</h2>
          <p className="text-gray-500 mb-8">Describe your problem in the emergency form and we'll match you with the right professional.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency" className="btn-accent px-8 py-4">
              <Zap className="w-5 h-5" /> Get Help Now
            </Link>
            <Link to="/contact" className="btn-outline px-8 py-4">Talk to Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
