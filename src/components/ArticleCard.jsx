import { Link } from 'react-router-dom';
import './ArticleCard.css';

function ArticleCard({ title, description, link, category, icon = '📜' }) {
  return (
    <Link to={link} className="article-card">
      <div className="article-icon">{icon}</div>
      <div className="article-content">
        {category && <span className="article-category">{category}</span>}
        <h3 className="article-title">{title}</h3>
        <p className="article-description">{description}</p>
      </div>
      <div className="article-arrow">→</div>
    </Link>
  );
}

export default ArticleCard;
