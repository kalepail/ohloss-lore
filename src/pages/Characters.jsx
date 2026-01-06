import { useState } from 'react';
import { characters } from '../data/characters';
import { factions } from '../data/factions';
import CharacterCard from '../components/CharacterCard';
import './Characters.css';

function Characters() {
  const [filter, setFilter] = useState('all');

  const filteredCharacters = filter === 'all'
    ? characters
    : characters.filter(c => c.faction === filter);

  return (
    <div className="characters-page">
      <header className="page-header">
        <h1>Characters</h1>
        <p>Heroes, villains, and legends of Ohloss</p>
      </header>

      <div className="filter-bar">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        {factions.map(faction => (
          <button
            key={faction.id}
            className={`filter-btn ${filter === faction.id ? 'active' : ''}`}
            onClick={() => setFilter(faction.id)}
            style={{ '--faction-color': faction.color }}
          >
            {faction.name.split(' ').slice(-1)[0]}
          </button>
        ))}
      </div>

      <div className="characters-grid">
        {filteredCharacters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <p className="no-results">No characters found for this faction.</p>
      )}
    </div>
  );
}

export default Characters;
