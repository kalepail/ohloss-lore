import { useParams, Link } from 'react-router-dom';
import { getGuideById } from '../data/guides';
import './GuideDetail.css';

function GuideDetail() {
  const { id } = useParams();
  const guide = getGuideById(id);

  if (!guide) {
    return (
      <div className="not-found">
        <h1>Guide Not Found</h1>
        <p>The guide you're looking for doesn't exist.</p>
        <Link to="/guides" className="btn btn-primary">Back to Guides</Link>
      </div>
    );
  }

  return (
    <div className="guide-detail">
      <Link to="/guides" className="back-link">← Back to Guides</Link>

      <header className="guide-header">
        <span className="guide-category">{guide.category}</span>
        <h1>{guide.title}</h1>
        <p className="guide-description">{guide.description}</p>
      </header>

      <div className="guide-content">
        {guide.sections.map((section, index) => (
          <section key={index} className="guide-section">
            <h2>{section.heading}</h2>
            {section.content.split('\n\n').map((paragraph, pIndex) => {
              if (paragraph.startsWith('**') || paragraph.includes('\n-')) {
                return (
                  <div key={pIndex} className="formatted-content">
                    {paragraph.split('\n').map((line, lIndex) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <h3 key={lIndex}>{line.replace(/\*\*/g, '')}</h3>;
                      }
                      if (line.startsWith('**')) {
                        const parts = line.split('**');
                        return (
                          <p key={lIndex}>
                            <strong>{parts[1]}</strong>{parts[2]}
                          </p>
                        );
                      }
                      if (line.startsWith('- ')) {
                        return <li key={lIndex}>{line.substring(2)}</li>;
                      }
                      return <p key={lIndex}>{line}</p>;
                    })}
                  </div>
                );
              }
              return <p key={pIndex}>{paragraph}</p>;
            })}
          </section>
        ))}
      </div>

      <div className="guide-nav">
        <Link to="/guides" className="btn btn-secondary">← All Guides</Link>
      </div>
    </div>
  );
}

export default GuideDetail;
