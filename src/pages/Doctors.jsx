import PageMeta from '../components/PageMeta';
import doc1Img from '../assets/images/doctors/doc.1img.png';
import doc2Img from '../assets/images/doctors/doc2.jpg';
import doc3Img from '../assets/images/doctors/doc3img.png';

export default function Doctors() {
  return (
    <>
      <PageMeta
        title="Our Doctors | Banaras Hospital"
        description="Meet the expert doctors at Banaras Hospital — general physicians, surgeons and cardiologists."
      />

      {/* ============ DOCTORS ============ */}
      <section id="doctors" className="section-photobg bg-photo-storefront-day page-top">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Our Specialists</span>
          <h2 className="section-title" data-reveal>Meet Our Expert Doctors</h2>
          <p className="section-subtitle" data-reveal>Our team of highly qualified and experienced doctors is dedicated to your well-being.</p>
          <div className="doctors-grid">
            <div className="doctor-card" data-reveal="scale">
              <div className="img-wrap"><img src={doc1Img} alt="Dr. Praveen Tripathi (MBBS, MD)" /></div>
              <div className="doctor-info">
                <h3>Dr. Praveen Tripathi (MBBS, MD)</h3>
                <p className="specialty">General Physician</p>
                <span className="doctor-availability"><i className="fas fa-clock"></i> Everyday, 09AM - 06PM<br />FEE - 300/-</span>
                <div className="social-links"><a href="#"><i className="fab fa-facebook"></i></a><a href="#"><i className="fab fa-twitter"></i></a></div>
              </div>
            </div>
            <div className="doctor-card" data-reveal="scale" style={{ '--reveal-delay': '0.1s' }}>
              <div className="img-wrap"><img src={doc2Img} alt="Dr. Durgesh Tripathi (MBBS, MS)" /></div>
              <div className="doctor-info">
                <h3>Dr. Durgesh Tripathi (MBBS, MS)</h3>
                <p className="specialty">General Surgeon</p>
                <span className="doctor-availability"><i className="fas fa-clock"></i> Every Sunday, 10AM - 02PM<br />FEE - 500/-</span>
                <div className="social-links"><a href="#"><i className="fab fa-facebook"></i></a><a href="#"><i className="fab fa-twitter"></i></a></div>
              </div>
            </div>
            <div className="doctor-card" data-reveal="scale" style={{ '--reveal-delay': '0.2s' }}>
              <div className="img-wrap"><img src={doc3Img} alt="Dr. Pramod Mishra (MBBS, DM)" /></div>
              <div className="doctor-info">
                <h3>Dr. Pramod Mishra (MBBS, DM)</h3>
                <p className="specialty">Cardiologist</p>
                <span className="doctor-availability"><i className="fas fa-clock"></i> Every Saturday, 08AM - 12PM<br />FEE - 700/-</span>
                <div className="social-links"><a href="#"><i className="fab fa-facebook"></i></a><a href="#"><i className="fab fa-twitter"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
