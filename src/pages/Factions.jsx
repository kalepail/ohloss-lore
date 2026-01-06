import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { factions } from '../data/factions';
import { getCharactersByFaction } from '../data/characters';
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
        <h1>Factions</h1>
        <p>The powers that shape the fate of Ohloss</p>
      </header>

      <div className="factions-list">
        {factions.map(faction => {
          const members = getCharactersByFaction(faction.id);
          return (
            <article
              key={faction.id}
              id={faction.id}
              className="faction-card"
              style={{ '--faction-color': faction.color }}
            >
              <div className="faction-header">
                <div className="faction-icon" style={{ background: faction.color }}>
                  {faction.icon || faction.name.charAt(0)}
                </div>
                <div className="faction-header-info">
                  <span className="faction-alignment">{faction.alignment}</span>
                  <h2>{faction.name}</h2>
                  <p className="faction-motto">"{faction.motto}"</p>
                </div>
              </div>

              <p className="faction-description">{faction.description}</p>

              <div className="faction-details">
                <div className="detail-item">
                  <span className="detail-label">Headquarters</span>
                  <span className="detail-value">{faction.headquarters}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Leader</span>
                  <span className="detail-value">{faction.leader}</span>
                </div>
              </div>

              <div className="faction-history">
                <h3>History</h3>
                <p>{faction.history}</p>
              </div>

              <div className="faction-beliefs">
                <h3>Core Beliefs</h3>
                <ul>
                  {faction.beliefs.map((belief, index) => (
                    <li key={index}>{belief}</li>
                  ))}
                </ul>
              </div>

              {members.length > 0 && (
                <div className="faction-members">
                  <h3>Notable Members</h3>
                  <div className="members-list">
                    {members.map(member => (
                      <span key={member.id} className="member-tag">
                        {member.name.split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Factions;
