import React from 'react';

export default function Disclaimer() {
  return (
    <div className="page-content">
      <h1>Disclaimer</h1>
      <p className="page-intro">Last updated: November 21, 2025</p>
      
      <section className="content-section">
        <h2>Website Disclaimer</h2>
        <p>
          The information provided by iMarket Digipreneur on our website is for general informational 
          purposes only. All information on the site is provided in good faith.
        </p>
      </section>

      <section className="content-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Disclaimer, please contact us at:
          <br />
          Email: <a href="mailto:info@imarketdigipreneur.com">info@imarketdigipreneur.com</a>
        </p>
      </section>
    </div>
  );
}
