import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import bhlogimg from '../assets/images/branding/bhlogimg.jpg';
import testimonials from '../data/testimonials';

const initialsOf = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function About() {
  return (
    <>
      <PageMeta
        title="About Us | Banaras Hospital"
        description="Learn about Banaras Hospital, Gopalganj — 10+ years of trusted multispecialty healthcare with 24x7 emergency and ICU care."
      />

      {/* ============ ABOUT ============ */}
      <section id="about" className="section-photobg bg-photo-storefront-day page-top">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Who We Are</span>
          <h2 className="section-title" data-reveal>About Banaras Hospital</h2>
          <p className="section-subtitle" data-reveal>A leading healthcare provider dedicated to quality, patient safety, and community wellness for over 10+ years.</p>
          <div className="about-content">
            <div className="about-image" data-reveal="left">
              <div className="img-wrap">
                <img src={bhlogimg} alt="Banaras Hospital illuminated signboard" />
              </div>
            </div>
            <div className="about-text" data-reveal="right">
              <h3>Your Health, Our Priority</h3>
              <p>Banaras Hospital, located at Banjari More, Gopalganj, Bihar, is a trusted multispecialty
                healthcare center dedicated to delivering quality medical care with compassion. We provide
                24×7 emergency services and feature an advanced ICU with ventilator facilities — the only
                hospital in the region offering this critical care support.<br /><br />

                Our expert team of cardiologists, surgeons, and other medical specialists ensures the
                highest standard of treatment and care. From general surgeries to maternity and delivery
                services, Banaras Hospital is equipped with modern technology and experienced professionals
                committed to your health and recovery.
              </p>
              <div className="stats-container">
                <div className="stat-item"><span className="count" data-target="10">0</span><p>Years of Experience</p></div>
                <div className="stat-item"><span className="count" data-target="15">0</span><p>Expert Doctors</p></div>
                <div className="stat-item"><span className="count" data-target="10000">0</span><p>Happy Patients</p></div>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>Book an Appointment <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section id="mission-vision" className="section-photobg bg-photo-storefront-night">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Our Purpose</span>
          <h2 className="section-title" data-reveal>Mission &amp; Vision</h2>
          <p className="section-subtitle" data-reveal>What drives us every day, and where we&rsquo;re headed as a hospital.</p>
          <div className="mv-grid" style={{ marginTop: '3rem' }}>
            <div className="mv-card" data-reveal="left">
              <span className="mv-icon"><i className="fas fa-bullseye"></i></span>
              <h3>Our Mission</h3>
              <p>To provide accessible, affordable and compassionate healthcare of the highest quality to
                every patient who walks through our doors — combining modern medical technology with a
                patient-first approach, and treating every case with the urgency and empathy it deserves.</p>
            </div>
            <div className="mv-card" data-reveal="right">
              <span className="mv-icon"><i className="fas fa-eye"></i></span>
              <h3>Our Vision</h3>
              <p>To be the most trusted multispecialty hospital in the region, recognised for clinical
                excellence, ethical practice and continuous investment in our people and facilities — so
                that quality critical care is never out of reach for the communities we serve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MEDICAL EXCELLENCE ============ */}
      <section id="medical-excellence" className="section-photobg bg-photo-storefront-day">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Why Choose Us</span>
          <h2 className="section-title" data-reveal>Medical Excellence</h2>
          <p className="section-subtitle" data-reveal>Standards we hold ourselves to across every department, every shift.</p>
          <div className="excellence-grid" style={{ marginTop: '3rem' }}>
            <div className="excellence-card" data-reveal="scale">
              <span className="excellence-icon"><i className="fas fa-microscope"></i></span>
              <h3>Advanced Technology</h3>
              <p>Modern diagnostic and treatment equipment, including a ventilator-equipped ICU and
                laparoscopic surgical systems.</p>
            </div>
            <div className="excellence-card" data-reveal="scale" style={{ '--reveal-delay': '0.08s' }}>
              <span className="excellence-icon"><i className="fas fa-user-doctor"></i></span>
              <h3>Expert Specialists</h3>
              <p>An experienced team of physicians, surgeons and cardiologists committed to safe,
                evidence-based care.</p>
            </div>
            <div className="excellence-card" data-reveal="scale" style={{ '--reveal-delay': '0.16s' }}>
              <span className="excellence-icon"><i className="fas fa-truck-medical"></i></span>
              <h3>24&times;7 Emergency Care</h3>
              <p>Round-the-clock emergency and critical care services, ready to respond when every
                minute matters.</p>
            </div>
            <div className="excellence-card" data-reveal="scale" style={{ '--reveal-delay': '0.24s' }}>
              <span className="excellence-icon"><i className="fas fa-shield-heart"></i></span>
              <h3>Quality &amp; Safety</h3>
              <p>Strict hygiene protocols, safety checklists and continuous quality reviews across
                every department.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PATIENT TESTIMONIALS ============ */}
      <section id="testimonials" className="section-photobg bg-photo-storefront-night">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Patient Stories</span>
          <h2 className="section-title" data-reveal>What Our Patients Say</h2>
          <p className="section-subtitle" data-reveal>Real experiences shared by the people we&rsquo;ve had the privilege to treat.</p>
          <div className="testimonials-grid" style={{ marginTop: '3rem' }}>
            {testimonials.map((t, i) => (
              <div
                className="testimonial-card"
                data-reveal="scale"
                key={t.id}
                style={i === 0 ? undefined : { '--reveal-delay': `${(i % 6) * 0.08}s` }}
              >
                <span className="testimonial-quote-icon"><i className="fas fa-quote-left"></i></span>
                <div className="testimonial-rating" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i key={idx} className={idx < t.rating ? 'fas fa-star' : 'far fa-star'}></i>
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-footer">
                  <span className="testimonial-avatar">{initialsOf(t.name)}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
