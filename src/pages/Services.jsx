import React from 'react'
import { Link } from 'react-router-dom'

export default function Services(){
  return (
    <section style={{padding: '24px'}}>
      <h2>Our Services</h2>
      <p>Explore the services we offer to help your business grow:</p>
      <ul>
        <li><Link to="/services/virtual-assistance">Virtual Assistance</Link></li>
        <li><Link to="/services/it-support">IT Support</Link></li>
        <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
        <li><Link to="/services/talent-training">Talent Training & Acquisition</Link></li>
      </ul>
      <p style={{marginTop:16}}>Prefer a quick chat? <Link to="/contact">Contact us</Link> or <Link to="/hire">Hire a Talent</Link>.</p>
    </section>
  )
}
