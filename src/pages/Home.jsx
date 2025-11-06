import React from 'react'
import { Link } from 'react-router-dom'
import ValueProps from '../components/ValueProps'

export default function Home(){
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Transform Your Business with Expert Digital Solutions</h1>
          <p className="hero-sub">Grow faster with proven digital marketing, reliable IT support, professional hosting, and administrative services. Your trusted partner for sustainable business growth.</p>

          <div className="hero-ctas">
            <Link to="/contact" className="cta primary">Book a Free Consultation</Link>
            <Link to="/services" className="cta secondary">View Our Services</Link>
          </div>
        </div>
        <div className="hero-media" aria-hidden="true">
          {/*
            Place your hero video file at `public/hero.mp4` and an optional poster at
            `public/hero-poster.jpg`. The video will autoplay muted and loop.
          */}
          <video
            className="hero-video"
            src="/hero.mp4"
            poster="/hero-poster.jpg"
            playsInline
            autoPlay
            muted
            loop
            aria-hidden="true"
          >
            {/* fallback for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Value proposition section below the hero */}
      <ValueProps />
    </>
  )
}
