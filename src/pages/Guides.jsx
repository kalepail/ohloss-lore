import { guides } from '../data/guides';
import ArticleCard from '../components/ArticleCard';
import './Guides.css';

function Guides() {
  const categories = [...new Set(guides.map(g => g.category))];

  const getGuideIcon = (guideId) => {
    switch (guideId) {
      case 'get-usdc': return '⛁';
      case 'build-games': return '⛏';
      case 'play-games': return '모';
      case 'bonus-multiplier': return '✕';
      default: return '📜';
    }
  };

  return (
    <div className="guides-page">
      <header className="page-header">
        <div className="header-frame">
          <h1>Ohloss Guides</h1>
          <p>Master the world of Ohloss with our comprehensive guides</p>
        </div>
      </header>

      <div className="guides-container">
        {categories.map(category => (
          <section key={category} className="guide-category">
            <h2 className="category-title">{category}</h2>
            <div className="guides-list">
              {guides
                .filter(guide => guide.category === category)
                .map(guide => (
                  <ArticleCard
                    key={guide.id}
                    title={guide.title}
                    description={guide.description}
                    link={`/guides/${guide.id}`}
                    icon={getGuideIcon(guide.id)}
                  />
                ))
              }
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Guides;
