import React from 'react'

export default function SectionHeader({ badge, title, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {badge && (
        <span className={`badge mb-3 ${light ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-700'}`}>
          {badge}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle mt-3 ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
