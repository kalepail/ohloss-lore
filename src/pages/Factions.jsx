import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { factions } from '../data/factions';
import { characters } from '../data/characters';
import awenTrailer from '../assets/awen-trailer.mp4';
import './Factions.css';

function Factions() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="factions-page">
      <header className="page-header">
        <div className="header-frame">
          <h1>Factions</h1>
          <p>The powers that shape the fate of Awen</p>
          <span className="frame-corners" aria-hidden="true"></span>
        </div>
      </header>

      <div className="trailer-section">
        <video controls className="trailer-video">
          <source src={awenTrailer} type="video/mp4" />
        </video>
      </div>

      <div className="factions-list">
        {factions.map(faction => {
          const heroCharacterName = faction.heroCharacter || faction.hero;
          const hero = characters.find(c => c.name === heroCharacterName);
          return (
            <article
              key={faction.id}
              id={faction.id}
              className="faction-card"
              style={{
                '--faction-color': faction.color,
                backgroundImage: faction.backgroundImage ? `url(${faction.backgroundImage})` : 'none'
              }}
            >
              {faction.repsImage && (
                <div className="faction-reps">
                  <img src={faction.repsImage} alt={`${faction.name} representatives`} />
                </div>
              )}
              <div className="faction-content">
                <div className="faction-header">
                  <div className="faction-header-info">
                    <h2>{faction.name}</h2>
                    <p className="faction-motto">"{faction.motto}"</p>
                  </div>
                </div>

                <div className="faction-details">
                  <div className="detail-item">
                    <span className="detail-label">Domain</span>
                    <span className="detail-value">{faction.domain}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Values</span>
                    <span className="detail-value">{faction.values}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Lifestyle</span>
                    <span className="detail-value">{faction.lifestyle}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Hero</span>
                    <span className="detail-value">
                      {hero ? (
                        <Link to={`/characters/${hero.id}`} className="hero-link">
                          {faction.hero}
                        </Link>
                      ) : (
                        faction.hero
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Factions;
