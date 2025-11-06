import React from 'react'
import { Link } from 'react-router-dom'

const Icon = ({ children }) => (
  <div className="service-icon" aria-hidden>
    {children}
  </div>
)

const services = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    desc: `Grow your online presence with strategic SEO, paid advertising, social media campaigns, and content marketing. We drive qualified traffic, engage your audience, and convert visitors into loyal customers.`,
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Services',
    desc: `Delegate administrative tasks and reclaim your time. From email management and scheduling to data entry and customer support, our virtual assistants handle it all professionally and efficiently.`,
  },
  {
    id: 'it-support',
    title: 'IT Support & Management',
    desc: `Keep your systems secure, updated, and running smoothly. 24/7 monitoring, proactive maintenance, cybersecurity, and rapid response to any technical issues. Peace of mind for your entire infrastructure.`,
  },
  {
    id: 'web-hosting',
    title: 'Web Hosting Solutions',
    desc: `Fast, reliable, and secure hosting for every business size. From shared hosting to VPS and dedicated servers, we provide the foundation your website needs to succeed with 99.9% uptime guarantee.`,
  },
  {
    id: 'copywriting',
    title: 'Professional Copywriting',
    desc: `Words that sell. Our expert copywriters craft compelling website content, email campaigns, sales pages, and marketing materials that resonate with your audience and drive action.`,
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Branding',
    desc: `Visual storytelling that stands out. Logo design, brand identity, social media graphics, marketing collateral—we create visuals that represent your brand's unique value and attract your ideal customers.`,
  },
]

export default function FeaturedServices(){
  return (
    <section className="featured-services" aria-labelledby="featured-services-title">
      <div className="container">
        <div className="featured-inner">
          {/* decorative divider to separate from previous section */}
          <div className="section-divider" aria-hidden="true" />
          {/* decorative panel behind the service cards for consistent contrast */}
          <div className="featured-panel" aria-hidden="true" />
          <h2 id="featured-services-title">Our Core Services</h2>

          <div className="services-grid">
            {services.map(s => (
              <article className="service-card" key={s.id}>
                <Icon>
                  {/* simple abstract icon using SVG strokes to remain themeable */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4"/>
                    <path d="M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Icon>

                <h3>{s.title}</h3>
                <p className="service-body">{s.desc}</p>
                <div className="service-actions">
                  <Link to={`/services/${s.id}`} className="btn btn-ghost">Learn More</Link>
                </div>
              </article>
            ))}
          </div>

          <div className="services-footer">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
