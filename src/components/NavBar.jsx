import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  // Toggle services submenu on small screens
  const toggleServices = (e) => {
    // if mobile (hamburger visible) use click to toggle
    if (window.innerWidth <= 720) {
      e.preventDefault()
      setServicesOpen(v => !v)
    }
  }

  const handleNavClick = () => {
    // close any open menus on navigation
    setServicesOpen(false)
    close()
  }

  return (
  <header className={`nav-wrap ${open ? 'menu-open' : ''}`}>
      {/* backdrop shown on small screens when menu is open */}
      <div
        className={`menu-backdrop ${open ? 'show' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />
      <nav className="nav container" role="navigation" aria-label="Main navigation">
        <div className={`brand ${logoLoaded ? 'has-logo' : ''}`}>
          <img
            src="/logo.png"
            alt="iMarket Digipreneur logo"
            className="brand-logo"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
            onLoad={() => setLogoLoaded(true)}
          />
          <span className="brand-text">iMarket Digipreneur</span>
        </div>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(v => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>

        <ul id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`} data-open={open}>
          {open && (
            <li className="mobile-header" aria-hidden={!open}>
              <div className="mobile-brand">
                <img src="/logo.png" alt="iMarket Digipreneur" className="brand-logo mobile" onError={(e) => { e.currentTarget.style.display = 'none' }} />
              </div>
              <button className="mobile-close" onClick={close} aria-label="Close menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
          )}
          <li><NavLink to="/" onClick={handleNavClick} className={({isActive})=> isActive? 'active' : undefined}>Home</NavLink></li>
          <li className={`has-sub ${servicesOpen ? 'open' : ''}`}>
            <button className="services-toggle" onClick={toggleServices} aria-haspopup="true" aria-expanded={servicesOpen}>Services</button>
            <ul className="submenu" aria-label="Services submenu">
              <li>
                <NavLink to="/services/virtual-assistance" onClick={handleNavClick} className={({isActive})=> isActive? 'active' : undefined}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2a2 2 0 0 1 2 2v3h4v12H4V7h4V4a2 2 0 0 1 2-2h2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Virtual Assistance
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/it-support" onClick={handleNavClick} className={({isActive})=> isActive? 'active' : undefined}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 1v4M4 7h16M7 11h10M6 15h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  IT Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/digital-marketing" onClick={handleNavClick} className={({isActive})=> isActive? 'active' : undefined}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M21 12a9 9 0 1 0-9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Digital Marketing
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/talent-training" onClick={handleNavClick} className={({isActive})=> isActive? 'active' : undefined}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM6 20v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Talent Training & Acquisition <span className="badge new">New</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li><NavLink to="/hire" onClick={handleNavClick} className={({isActive})=> isActive ? 'active' : undefined}>Hire a Talent</NavLink></li>
          <li><NavLink to="/blog" onClick={handleNavClick} className={({isActive})=> isActive ? 'active' : undefined}>Blog</NavLink></li>
          <li><NavLink to="/contact" onClick={handleNavClick} className={({isActive})=> isActive ? 'active' : undefined}>Contact Us</NavLink></li>
    </ul>

    <NavLink className="cta" to="/hire">Hire</NavLink>
      </nav>
    </header>
  )
}
