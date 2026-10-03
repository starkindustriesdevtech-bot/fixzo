import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Emergency from './pages/Emergency'
import Subscriptions from './pages/Subscriptions'
import Features from './pages/Features'
import MultiSkilled from './pages/MultiSkilled'
import ForProfessionals from './pages/ForProfessionals'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/features" element={<Features />} />
          <Route path="/multi-skilled" element={<MultiSkilled />} />
          <Route path="/professionals" element={<ForProfessionals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
