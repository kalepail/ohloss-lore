import { lore } from '../data/lore';
import './Lore.css';

function Lore() {
  return (
    <div className="lore-page">
      <section className="lore-section origin-section">
        <header className="page-header">
          <h1>The Realm of Awen</h1>
          <p>Discover the ancient history of our realm</p>
        </header>
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
    </div>
  );
}

export default Lore;
