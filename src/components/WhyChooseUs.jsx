import React from 'react'

const icons = {
  experience: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 7h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M7 11v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  team: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 21v-1a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  client: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21 15v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  custom: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M6 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M18 8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  communication: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  speed: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 12h3l2-4 4 8 6-12 3 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  value: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2l3 6 6 .5-4.5 4 1.5 6L12 16l-6 3 1.5-6L3 8.5 9 8 12 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
}

const features = [
  { key: 'experience', title: 'Industry Experience', desc: '4-7 years of proven excellence across digital marketing, IT support, hosting, and business administration' },
  { key: 'team', title: 'Expert Team', desc: 'Certified professionals in SEO, Google Ads, social media marketing, IT infrastructure, and business management' },
  { key: 'client', title: 'Client-Centric Approach', desc: 'We treat your business like our own, focusing on your growth and success above all else' },
  { key: 'custom', title: 'Custom Solutions', desc: 'No cookie-cutter approaches. Every strategy is tailored to your unique business goals and challenges' },
  { key: 'communication', title: 'Transparent Communication', desc: 'Regular reporting, clear metrics, and honest feedback so you always know what\'s happening' },
  { key: 'speed', title: 'Quick Turnaround', desc: 'Most projects delivered within agreed timelines without compromising quality' },
  { key: 'value', title: 'Cost-Effective', desc: 'Get enterprise-level services without the enterprise price tag' },
]

export default function WhyChooseUs(){
  return (
    <section className="why-choose" aria-labelledby="why-choose-title">
      <div className="container">
        <div className="why-inner">
          <h2 id="why-choose-title">What Sets Us Apart</h2>
          <p className="why-intro">Practical, measurable, and human-centered services that help your business scale faster and more efficiently.</p>

          <div className="why-grid">
            {features.map((f, i) => (
              <article key={f.key} className="why-card" tabIndex={0} style={{animationDelay: `${i * 80}ms`}}>
                <div className="why-icon">{icons[f.key]}</div>
                <div className="why-body">
                  <strong className="why-title">{f.title}</strong>
                  <p className="why-desc">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
