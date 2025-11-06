import React from 'react'

const IconClock = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

const IconGraph = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 13l4-4 4 6 4-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconScale = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M6 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 12c0 2 2 3 2 3s2-1 2-3-2-3-2-3-2 1-2 3zM15 12c0 2 2 3 2 3s2-1 2-3-2-3-2-3-2 1-2 3z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
)

const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3l7 3v5c0 5-3 9-7 10-4-1-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 11.5l1.8 1.8L15 9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ValueProps(){
  return (
    <section className="value-props" aria-labelledby="value-props-title">
      <div className="container">
        <div className="value-props-inner">
          <h2 id="value-props-title">Why Businesses Choose iMarket Digipreneur</h2>
          <div className="value-grid">
            <article className="value-card">
              <div className="value-icon" aria-hidden>
                <IconClock />
              </div>
              <h3>24/7 Support &amp; Availability</h3>
              <p>Our dedicated team is always on standby to assist you. Whether it's a marketing crisis or IT emergency, we're here around the clock to keep your business running smoothly and your campaigns performing at their peak.</p>
            </article>

            <article className="value-card">
              <div className="value-icon" aria-hidden>
                <IconGraph />
              </div>
              <h3>Proven Results &amp; ROI</h3>
              <p>We don't just work for you—we work with measurable outcomes. Our clients see an average of 150% increase in website traffic, 40% boost in conversions, and 60% improvement in operational efficiency within 6 months.</p>
            </article>

            <article className="value-card">
              <div className="value-icon" aria-hidden>
                <IconScale />
              </div>
              <h3>Flexible &amp; Scalable Solutions</h3>
              <p>Whether you're a startup or an established enterprise, our services grow with you. Start part-time, go full-time, or use us as your entire remote team. No long-term contracts required.</p>
            </article>

            <article className="value-card">
              <div className="value-icon" aria-hidden>
                <IconShield />
              </div>
              <h3>100% Money-Back Guarantee</h3>
              <p>We're so confident in our work that we offer a full refund if you're not completely satisfied within the first 30 days. Your success is our priority, and your satisfaction is guaranteed.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
