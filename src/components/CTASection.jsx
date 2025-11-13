import React from 'react'
import { Link } from 'react-router-dom'

export default function CTASection(){
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-copy">
            <h2 id="cta-title">Ready to Grow Your Business?</h2>
            <p className="cta-message">Don't let another day pass without taking action. Schedule a free consultation with our experts today and discover how we can help you achieve your business goals.</p>
            <p className="cta-support">No obligation. No long-term contracts. Just honest advice and proven solutions to help your business thrive.</p>
            <div className="cta-actions">
              <a className="cta primary" href="/contact">Schedule Free Consultation</a>
              <a className="cta secondary" href="tel:+254772028889">Call Us Now: +254 772 028889</a>
            </div>
          </div>
          <div className="cta-visual" aria-hidden>
            {/* Decorative simple illustration (SVG) */}
            <svg width="220" height="140" viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
              <rect x="8" y="8" width="204" height="124" rx="12" fill="url(#g)" opacity="0.12"/>
              <path d="M28 92c14-20 40-36 72-36s58 16 72 36" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#06b6d4"/>
                  <stop offset="1" stopColor="#4f46e5"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
