import { lore } from '../data/lore';
import './Lore.css';

function Lore() {
  return (
    <div className="lore-page">
      <header className="page-header">
        <h1>The World of Awen</h1>
        <p>Discover the ancient history of our realm</p>
      </header>

      <section className="lore-section origin-section">
        <h2 className="section-heading">{lore.origin.title}</h2>
        {lore.origin.sections.map((section, index) => (
          <article key={index} className="lore-article">
            <h3>{section.heading}</h3>
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>

      <div className="section-divider">
        <span>⚔</span>
      </div>

      <section className="lore-section villain-section">
        <h2 className="section-heading">{lore.villain.title}</h2>
        <p className="section-subtitle">{lore.villain.subtitle}</p>
        {lore.villain.sections.map((section, index) => (
          <article key={index} className="lore-article villain-article">
            <h3>{section.heading}</h3>
            {section.content.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>
    </div>
  );
}

export default Lore;
