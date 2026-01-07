import { useParams, Link } from 'react-router-dom';
import { getCharacterById } from '../data/characters';
import { getFactionById } from '../data/factions';
import './CharacterDetail.css';

function CharacterDetail() {
  const { id } = useParams();
  const character = getCharacterById(id);

  if (!character) {
    return (
      <div className="not-found">
        <h1>Character Not Found</h1>
        <p>The character you're looking for doesn't exist.</p>
        <Link to="/characters" className="btn btn-primary">Back to Characters</Link>
      </div>
    );
  }

  const faction = getFactionById(character.faction);

  return (
    <div className="character-detail">
      <Link to="/characters" className="back-link">← Back to Characters</Link>

      <header className="character-header">
        <span className="header-corners" aria-hidden="true"></span>
        <div className="header-top">
          <div className="character-portrait-large">
            {character.image ? (
              <img src={character.image} alt={character.name} className="portrait-image-large" />
            ) : (
              <div className="portrait-placeholder-large">
                <span>{character.name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className="character-header-info">
            <span className="character-role-badge">{character.role}</span>
            <h1>{character.name}</h1>
            <p className="character-title-large">{character.title}</p>
          </div>
        </div>
        {character.video && (
          <video controls className="character-video">
            <source src={character.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </header>

      <div className="character-content">

        <section className="content-section">
          <h2>About</h2>
          <p>{character.description}</p>
        </section>

        <section className="content-section stats-section">
          <h2>Attributes</h2>
          <div className="stats-grid">
            {Object.entries(character.stats).map(([stat, value]) => (
              <div key={stat} className="stat-item">
                <div className="stat-header">
                  <span className="stat-name">{stat}</span>
                  <span className="stat-value">{value}</span>
                </div>
                <div className="stat-bar-large">
                  <div
                    className="stat-fill-large"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Abilities</h2>
          <div className="abilities-list">
            {character.abilities.map((ability, index) => (
              <span key={index} className="ability-tag">{ability}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default CharacterDetail;
