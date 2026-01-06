import { Link } from 'react-router-dom';
import './CharacterCard.css';

function CharacterCard({ character }) {
  const { id, name, title, role, stats, description } = character;

  const getHighestStat = () => {
    const entries = Object.entries(stats);
    return entries.reduce((max, curr) => curr[1] > max[1] ? curr : max);
  };

  const [topStat, topValue] = getHighestStat();

  return (
    <Link to={`/characters/${id}`} className="character-card">
      <div className="character-portrait">
        <div className="portrait-placeholder">
          <span>{name.charAt(0)}</span>
        </div>
      </div>
      <div className="character-info">
        <h3 className="character-name">{name}</h3>
        <p className="character-title">{title}</p>
        <span className="character-role">{role}</span>
        <p className="character-desc">{description.substring(0, 100)}...</p>
        <div className="character-stat">
          <span className="stat-label">{topStat}</span>
          <div className="stat-bar">
            <div className="stat-fill" style={{ width: `${topValue}%` }}></div>
          </div>
          <span className="stat-value">{topValue}</span>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
