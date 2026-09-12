import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import services from '../data/services';

import bhimg from '../assets/images/branding/bhimg.png';
import bhlogimg from '../assets/images/branding/bhlogimg.jpg';
import founderImg from '../assets/images/branding/founder-dr-praveen.jpg';
import doc1Img from '../assets/images/doctors/doc.1img.png';
import departmentsImg from '../assets/images/services/cardioimg.png';

export default function Home() {
  return (
    <>
      <PageMeta
        title="Banaras Hospital | Advanced Care, Personal Touch"
        description="Banaras Hospital, Gopalganj — 24x7 emergency care, advanced ventilator ICU, surgery, cardiology, orthopedics and diagnostics."
      />

      {/* ============ HERO ============ */}
      <section id="hero">
        <svg className="hero-pulse-line" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2A63B" stopOpacity="0" />
              <stop offset="50%" stopColor="#E2A63B" stopOpacity="1" />
              <stop offset="100%" stopColor="#1C8C7C" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M -50 420 L 220 420 L 260 300 L 300 540 L 340 420 L 420 420 L 460 360 L 500 480 L 540 420 L 1250 420" />
        </svg>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text" data-reveal="left">
              <span className="hero-eyebrow"><i className="fas fa-heart-pulse"></i> Multispecialty &middot; Gopalganj, Bihar</span>
              <h1>Advanced Care, <em>Personal Touch.</em></h1>
              <p>Welcome to Banaras Hospital — delivering quality healthcare with modern facilities and expert professionals.</p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary">Our Services <i className="fas fa-arrow-right"></i></Link>
                <Link to="/contact" className="btn btn-ghost">
                  <i className="fas fa-phone"></i> For Appointment: +91-7545010725
                </Link>
              </div>
              <div className="hero-trust-strip">
                <span className="trust-item"><i className="fas fa-truck-medical"></i> 24/7 Emergency</span>
                <span className="trust-item"><i className="fas fa-lungs"></i> Ventilator ICU</span>
                <span className="trust-item"><i className="fas fa-user-doctor"></i> Expert Specialists</span>
                <span className="trust-item"><i className="fas fa-award"></i> 10+ Years Trusted</span>
              </div>
            </div>
            <div className="hero-image" data-reveal="right">
              <div className="frame">
                <img src={bhimg} alt="Doctor with patient at Banaras Hospital" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT (full) ============ */}
      <section id="about" className="section-photobg bg-photo-storefront-day">
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

      {/* ============ FOUNDER MESSAGE ============ */}
      <section className="founder-section section-photobg bg-photo-storefront-night">
        <div className="container">
          <span className="section-eyebrow" data-reveal>A Message From Our Founder</span>
          <h2 className="section-title" data-reveal>Healthcare with Compassion, Care &amp; Commitment</h2>
          <div className="founder-content" style={{ marginTop: '3rem' }}>
            <div className="founder-photo-card" data-reveal="left">
              <div className="img-wrap">
                <img src={founderImg} alt="Dr. Praveen Tripathi, Founder &amp; Director of Banaras Hospital" />
              </div>
              <div className="founder-name-band">
                <span className="founder-icon"><i className="fas fa-user-doctor"></i></span>
                <div>
                  <span className="eyebrow-tag">Founder &amp; Director</span>
                  <strong>Dr. Praveen Tripathi</strong>
                  <span className="credentials">MBBS, MD</span>
                </div>
              </div>
            </div>
            <div className="founder-message-card" data-reveal="right">
              <p>At Banaras Hospital, our mission has always been to provide compassionate, ethical, and quality healthcare to every patient who places their trust in us.</p>
              <blockquote className="founder-quote">"We believe that healthcare is not just about treating an illness&mdash;it is about caring for people, supporting families, and bringing hope during difficult times."</blockquote>
              <div className="founder-attribution">
                <strong>Dr. Praveen Tripathi (MBBS, MD)</strong>
                <span>Founder &amp; Director, Banaras Hospital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES (full) ============ */}
      <section id="services" className="section-photobg bg-photo-storefront-day">
        <div className="container">
          <span className="section-eyebrow" data-reveal>What We Treat</span>
          <h2 className="section-title" data-reveal>Our Medical Services</h2>
          <p className="section-subtitle" data-reveal>We offer a wide range of specialized medical services to meet all your health needs.</p>
          <div className="services-grid">
            {services.map((service, i) => (
              <div
                className="service-card"
                data-reveal="scale"
                key={service.id}
                style={i === 0 ? undefined : { '--reveal-delay': `${(i % 6) * 0.08}s` }}
              >
                <div className="img-wrap">
                  <img src={service.image} alt={service.alt} />
                  <span className="tag">{service.tag}</span>
                </div>
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ QUICK LINKS: DOCTORS / DEPARTMENTS / CONTACT ============ */}
      <section className="section-photobg bg-photo-storefront-night">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Find Your Way</span>
          <h2 className="section-title" data-reveal>Meet Our Team &amp; Explore Our Care</h2>
          <p className="section-subtitle" data-reveal>Get to know our specialists, browse our departments, or get in touch &mdash; all just one click away.</p>
          <div className="services-grid">
            <div className="service-card" data-reveal="scale">
              <div className="img-wrap">
                <img src={doc1Img} alt="Our Doctors" />
              </div>
              <div className="service-card-content">
                <h3>Our Doctors</h3>
                <p>Meet our team of highly qualified and experienced specialists.</p>
                <Link to="/doctors" className="btn btn-solid-dark" style={{ marginTop: '1rem' }}>Meet the Team <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="service-card" data-reveal="scale" style={{ '--reveal-delay': '.08s' }}>
              <div className="img-wrap">
                <img src={departmentsImg} alt="Our Departments" />
              </div>
              <div className="service-card-content">
                <h3>Departments</h3>
                <p>Explore our specialised departments — from general medicine to cardiology and paediatrics.</p>
                <Link to="/departments" className="btn btn-solid-dark" style={{ marginTop: '1rem' }}>View Departments <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
            <div className="service-card" data-reveal="scale" style={{ '--reveal-delay': '.16s' }}>
              <div className="img-wrap">
                <img src={bhlogimg} alt="Banaras Hospital illuminated signboard" />
              </div>
              <div className="service-card-content">
                <h3>Contact Us</h3>
                <p>Have a question or need to book an appointment? We're here to help.</p>
                <Link to="/contact" className="btn btn-solid-dark" style={{ marginTop: '1rem' }}>Get In Touch <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
