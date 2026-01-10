import { useState } from 'react';
import { characters } from '../data/characters';
import CharacterCard from '../components/CharacterCard';
import './Characters.css';

const mainFactions = ['gilded-fin', 'verdant-hollow', 'wobblestone-clan'];

function Characters() {
  const [filter, setFilter] = useState('all');

  const filteredCharacters = filter === 'all'
    ? characters
    : filter === 'other'
    ? characters.filter(c => !mainFactions.includes(c.faction))
    : characters.filter(c => c.faction === filter);

  return (
    <div className="characters-page">
      <header className="page-header">
        <div className="header-frame">
          <h1>Characters</h1>
          <p>Heroes, villains, and legends of Awen</p>
        </div>
      </header>

      <div className="filter-bar">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'gilded-fin' ? 'active' : ''}`}
          onClick={() => setFilter('gilded-fin')}
        >
          Gilded Fin
        </button>
        <button
          className={`filter-btn ${filter === 'verdant-hollow' ? 'active' : ''}`}
          onClick={() => setFilter('verdant-hollow')}
        >
          Verdant Hollow
        </button>
        <button
          className={`filter-btn ${filter === 'wobblestone-clan' ? 'active' : ''}`}
          onClick={() => setFilter('wobblestone-clan')}
        >
          Wobblestone
        </button>
        <button
          className={`filter-btn ${filter === 'other' ? 'active' : ''}`}
          onClick={() => setFilter('other')}
        >
          Other Characters
        </button>
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
