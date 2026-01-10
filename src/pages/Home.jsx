import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Surveillance elements */}
      <div className="scan-line" aria-hidden="true"></div>
      <div className="ledger-lines" aria-hidden="true"></div>

      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-prefix">The Lore of</span>
              <span className="title-main">Ohloss.</span>
            </h1>
            <p className="hero-tagline">A realm unified by games—and fractured by who controls them.</p>
            <p className="hero-description">
              Three factions. One system. <br />
              Play the games. Take the power.
            </p>
            <div className="hero-actions">
              <Link to="/lore" className="btn btn-primary">Read the Lore</Link>
              <Link to="/characters" className="btn btn-secondary">Meet the Characters</Link>
              <Link to="/guides" className="btn btn-secondary">Learn to Play</Link>
            </div>
            <p className="system-status">Epoch: _ | Last Faction Winner: _ | Players: _</p>
          </div>

          <div className="faction-pillars">
            <div className="pillar-divider" aria-hidden="true">
              <span className="pillar-label">Factions</span>
            </div>
            <Link to="/factions#gilded-fin" className="faction-pillar gilded-fin">
              <span className="pillar-line" aria-hidden="true"></span>
              <span className="pillar-icon">𓆛</span>
              <span className="pillar-name">Gilded Fin</span>
              <span className="pillar-motto">"I've got an idea, and a very fast ship."</span>
            </Link>
            <Link to="/factions#verdant-hollow" className="faction-pillar verdant-hollow">
              <span className="pillar-line" aria-hidden="true"></span>
              <span className="pillar-icon">ཐི༏ཋྀ</span>
              <span className="pillar-name">Verdant Hollow</span>
              <span className="pillar-motto">"Peace is our preference. But not our position."</span>
            </Link>
            <Link to="/factions#wobblestone-clan" className="faction-pillar wobblestone-clan">
              <span className="pillar-line" aria-hidden="true"></span>
              <span className="pillar-icon">𓅣</span>
              <span className="pillar-name">Wobblestone</span>
              <span className="pillar-motto">"Stone doesn't bend. Neither do we."</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
