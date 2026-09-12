import { useRef, useState } from 'react';
import PageMeta from '../components/PageMeta';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ message: '', isError: false });
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setModalOpen(true);
        form.reset();
        setStatus({ message: '', isError: false });
      } else {
        const resData = await response.json();
        if (Object.hasOwn(resData, 'errors')) {
          setStatus({ message: resData.errors.map((e) => e.message).join(', '), isError: true });
        } else {
          setStatus({ message: 'Oops! There was a problem submitting your form.', isError: true });
        }
      }
    } catch (err) {
      setStatus({ message: 'Oops! There was a problem submitting your form.', isError: true });
    }
  };

  return (
    <>
      <PageMeta
        title="Book an Appointment | Banaras Hospital"
        description="Book an appointment at Banaras Hospital, Gopalganj. Call +91-7545010725 or fill out our appointment form."
      />

      {/* ============ CONTACT / APPOINTMENT ============ */}
      <section id="contact" className="section-photobg bg-photo-storefront-day page-top">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Get In Touch</span>
          <h2 className="section-title" data-reveal>Book an Appointment</h2>
          <p className="section-subtitle" data-reveal>Have a question or need to book an appointment? We're here to help.</p>
          <div className="contact-content" data-reveal="scale">
            <div className="contact-info">
              <h3>Schedule Your Visit</h3>
              <p>Fill out the form and our team will get back to you shortly to confirm your appointment. For immediate assistance, please call us.</p>
              <div className="location-item">
                <span className="icon-circle"><i className="fas fa-phone"></i></span>
                <div><p>Reception Desk</p><span>+91-7545010725</span></div>
              </div>
              <div className="location-item">
                <span className="icon-circle"><i className="fas fa-envelope"></i></span>
                <div><p>General Inquiries</p><span>contact@banarashospital.com</span></div>
              </div>
            </div>
            <div className="contact-form">
              <form id="contact-form" ref={formRef} action="https://formspree.io/f/xyznpkeq" method="POST" onSubmit={handleSubmit}>
                <div className="form-group"><input type="text" name="Name" placeholder="Enter Name" required /></div>
                <div className="form-group"><input type="number" name="Number" placeholder="Enter Mobile Number" required /></div>
                <div className="form-group"><input type="date" name="Date" required /></div>
                <div className="form-group">
                  <select name="Doctor" required defaultValue="">
                    <option value="" disabled>Select a Doctor</option>
                    <option value="Dr. Praveen Tripathi">Dr. Praveen Tripathi - General Physician</option>
                    <option value="Dr. Durgesh Tripathi">Dr. Durgesh Tiwari - General Surgeon</option>
                    <option value="Dr. Pramod Mishra">Dr. Pramod Mishra - Cardiologist</option>
                  </select>
                </div>
                <div className="form-group"><textarea name="Message" rows="4" placeholder="Your Message (Optional)"></textarea></div>
                <button type="submit" className="btn btn-primary">Submit Request <i className="fas fa-paper-plane"></i></button>
              </form>
              <p id="form-status" className={status.isError ? 'error' : ''}>{status.message}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success modal */}
      <div className={`popup-modal-overlay${modalOpen ? ' active' : ''}`} id="popup-modal-overlay" onClick={(e) => { if (e.target.id === 'popup-modal-overlay') setModalOpen(false); }}>
        <div className="popup-modal">
          <div className="popup-icon"><i className="fas fa-check-circle"></i></div>
          <h3>Success!</h3>
          <p>Your appointment request has been submitted successfully.</p>
          <button className="btn btn-primary" id="popup-close-btn" onClick={() => setModalOpen(false)}>OK</button>
        </div>
      </div>
    </>
  );
}
