import PageMeta from '../components/PageMeta';
import services from '../data/services';

export default function Services() {
  return (
    <>
      <PageMeta
        title="Our Services | Banaras Hospital"
        description="Explore Banaras Hospital's medical services — Emergency Care, ICU, Ventilator Support, Surgery, Pharmacy, Diagnostics, Wards, Private Rooms and Ambulance."
      />

      {/* ============ SERVICES ============ */}
      <section id="services" className="section-photobg bg-photo-storefront-night page-top">
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
    </>
  );
}
