import PageMeta from '../components/PageMeta';
import departments from '../data/departments';

export default function Departments() {
  return (
    <>
      <PageMeta
        title="Our Departments | Banaras Hospital"
        description="Explore Banaras Hospital's specialised departments — General Medicine, Surgery, Cardiology, Orthopaedics, Neurology and Paediatrics."
      />

      {/* ============ DEPARTMENTS ============ */}
      <section id="departments" className="section-photobg bg-photo-storefront-day page-top">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Specialised Care</span>
          <h2 className="section-title" data-reveal>Our Departments</h2>
          <p className="section-subtitle" data-reveal>Our specialised departments bring together experienced doctors and modern facilities to care for every stage of life.</p>
          <div className="services-grid">
            {departments.map((department, i) => (
              <div
                className="service-card"
                data-reveal="scale"
                key={department.id}
                style={i === 0 ? undefined : { '--reveal-delay': `${(i % 6) * 0.08}s` }}
              >
                <div className="img-wrap">
                  <img src={department.image} alt={department.alt} />
                  <span className="tag">{department.tag}</span>
                </div>
                <div className="service-card-content">
                  <h3>{department.title}</h3>
                  <p>{department.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
