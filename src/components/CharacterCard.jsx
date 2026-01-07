import { Link } from 'react-router-dom';
import './CharacterCard.css';

function CharacterCard({ character }) {
  const { id, name, title, role, stats, description, image, mainAttribute } = character;

  const mainStatValue = stats[mainAttribute];

  return (
    <Link to={`/characters/${id}`} className="character-card">
      <div className="character-portrait">
        {image ? (
          <img src={image} alt={name} className="portrait-image" />
        ) : (
          <div className="portrait-placeholder">
            <span>{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="character-info">
        <h3 className="character-name">{name}</h3>
        <p className="character-title">{title}</p>
        <span className="character-role">{role}</span>
        <p className="character-desc">{description.substring(0, 100)}...</p>
        <div className="character-stat">
          <span className="stat-header-label">Main Attribute</span>
          <div className="stat-row">
            <span className="stat-label">{mainAttribute}</span>
            <div className="stat-bar">
              <div className="stat-fill" style={{ width: `${mainStatValue}%` }}></div>
            </div>
            <span className="stat-value">{mainStatValue}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
