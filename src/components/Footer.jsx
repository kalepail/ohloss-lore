import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="brand-icon">⚔</span>
          <span>Ohloss Lore</span>
        </div>
        <p className="footer-tagline">Play the games. Take the power.</p>
        <div className="footer-links">
          <a href="#about">Ohloss Account</a>
          <a href="#contact">GitHub</a>
          <a href="#credits">Discord</a>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Ohloss. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
