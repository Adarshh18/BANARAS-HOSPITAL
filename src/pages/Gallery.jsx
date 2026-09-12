import { useEffect, useRef, useState } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import PageMeta from '../components/PageMeta';

const galleryModules = import.meta.glob('../assets/images/gallery/gallery*.jpg', { eager: true, import: 'default' });

const galleryImages = Object.keys(galleryModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/gallery(\d+)\.jpg/)?.[1] ?? '0', 10);
    const numB = parseInt(b.match(/gallery(\d+)\.jpg/)?.[1] ?? '0', 10);
    return numA - numB;
  })
  .map((key) => galleryModules[key]);

export default function Gallery() {
  const gridRef = useRef(null);
  const itemRefs = useRef([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ---------------- Masonry layout + reveal ---------------- */
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const imgLoad = imagesLoaded(grid, () => {
      new Masonry(grid, {
        itemSelector: '.gallery-item',
        columnWidth: '.gallery-item',
        percentPosition: true,
        gutter: 20,
      });

      itemRefs.current.forEach((item, i) => {
        if (!item) return;
        item.style.setProperty('--reveal-delay', `${(i % 6) * 0.06}s`);
        revealObserver.observe(item);
      });
    });

    return () => {
      revealObserver.disconnect();
      if (imgLoad && imgLoad.off) imgLoad.off('always');
    };
  }, []);

  /* ---------------- Lightbox ---------------- */
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const showPrev = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const showNext = () => setCurrentIndex((i) => (i + 1) % galleryImages.length);

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <PageMeta
        title="Gallery | Banaras Hospital"
        description="Explore the Banaras Hospital infrastructure, facilities and care environment."
      />

      <section className="gallery-hero section-photobg bg-photo-storefront-day page-top">
        <div className="container">
          <span className="section-eyebrow" data-reveal>Inside Banaras Hospital</span>
          <h2 className="section-title" data-reveal>Our Gallery</h2>
          <p className="section-subtitle" data-reveal>Explore our hospital infrastructure, facilities, and care environment.</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid" id="masonry-grid" ref={gridRef}>
            {galleryImages.map((src, i) => (
              <div
                className="gallery-item"
                key={src}
                ref={(el) => (itemRefs.current[i] = el)}
                onClick={() => openLightbox(i)}
              >
                <div className="img-frame">
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox viewer */}
      <div
        className={`lightbox${lightboxOpen ? ' active' : ''}`}
        id="lightbox"
        onClick={(e) => { if (e.target.id === 'lightbox') closeLightbox(); }}
      >
        <button className="lightbox-close" id="lightbox-close" aria-label="Close" onClick={closeLightbox}><i className="fas fa-xmark"></i></button>
        <button className="lightbox-prev" id="lightbox-prev" aria-label="Previous image" onClick={showPrev}><i className="fas fa-chevron-left"></i></button>
        <div className="lightbox-inner"><img id="lightbox-img" src={galleryImages[currentIndex]} alt="Enlarged gallery photo" /></div>
        <button className="lightbox-next" id="lightbox-next" aria-label="Next image" onClick={showNext}><i className="fas fa-chevron-right"></i></button>
        <span className="lightbox-counter" id="lightbox-counter">{`${currentIndex + 1} / ${galleryImages.length}`}</span>
      </div>
    </>
  );
}
