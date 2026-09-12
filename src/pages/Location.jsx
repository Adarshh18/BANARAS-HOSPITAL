import PageMeta from '../components/PageMeta';

export default function Location() {
  return (
    <>
      <PageMeta
        title="Location | Banaras Hospital"
        description="Find Banaras Hospital at Banjari More, NH 27, Gopalganj, Bihar. Open 24 hours with 24/7 emergency services."
      />

      {/* ============ LOCATION ============ */}
      <section id="location" className="section-photobg bg-photo-storefront-night page-top">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Find Us</span>
          <h2 className="section-title" data-reveal>Our Location</h2>
          <p className="section-subtitle" data-reveal>Visit our easily reachable facility equipped with modern medical infrastructure.</p>
          <div className="location-grid">
            <div className="location-map" data-reveal="left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14286.046330491694!2d84.4250216!3d26.4714683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39930557d3464d77%3A0x78c5e926947fc716!2sBanaras%20Hospital%20Gopalganj!5e0!3m2!1sen!2sin!4v1760092671482!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Banaras Hospital location map"
              ></iframe>
            </div>
            <div className="location-details" data-reveal="right">
              <h3>Visit Banaras Hospital</h3>
              <div className="location-item">
                <span className="icon-circle"><i className="fas fa-map-marker-alt"></i></span>
                <div><p>Address</p><span>Banjari More, NH 27, Gopalganj<br />Bihar - 841428</span></div>
              </div>
              <div className="location-item">
                <span className="icon-circle"><i className="fas fa-clock"></i></span>
                <div><p>Opening Hours</p><span>Mon - Sun: Open 24 Hours</span><span>Emergency 24/7</span></div>
              </div>
              <div className="location-item">
                <span className="icon-circle"><i className="fas fa-phone-volume"></i></span>
                <div><p>Emergency Line</p><span>+91-7545010725</span></div>
              </div>
              <div className="location-item">
                <span className="icon-circle"><i className="fas fa-envelope"></i></span>
                <div><p>Email</p><span>info@banarashospital.com</span></div>
              </div>
              <a href="https://maps.app.goo.gl/nec2z4cJ3yUnvSoNA" className="btn btn-primary" target="_blank" rel="noreferrer">Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
