import { guides } from '../data/guides';
import ArticleCard from '../components/ArticleCard';
import './Guides.css';

function Guides() {
  const categories = [...new Set(guides.map(g => g.category))];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Basics': return '📚';
      case 'Gameplay': return '🎮';
      case 'Systems': return '⚙️';
      default: return '📜';
    }
  };

  return (
    <div className="guides-page">
      <header className="page-header">
        <h1>Game Guides</h1>
        <p>Master the world of Ohloss with our comprehensive guides</p>
      </header>

      {categories.map(category => (
        <section key={category} className="guide-category">
          <h2 className="category-title">
            <span className="category-icon">{getCategoryIcon(category)}</span>
            {category}
          </h2>
          <div className="guides-list">
            {guides
              .filter(guide => guide.category === category)
              .map(guide => (
                <ArticleCard
                  key={guide.id}
                  title={guide.title}
                  description={guide.description}
                  link={`/guides/${guide.id}`}
                  icon={getCategoryIcon(guide.category)}
                />
              ))
            }
          </div>
        </section>
      ))}
    </div>
  );
}

export default Guides;
