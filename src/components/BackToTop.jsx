export default function BackToTop() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="back-to-top" aria-label="Back to top" onClick={handleClick}>
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}
