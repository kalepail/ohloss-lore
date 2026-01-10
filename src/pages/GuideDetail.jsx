import { useParams, Link } from 'react-router-dom';
import { getGuideById } from '../data/guides';
import './GuideDetail.css';

function GuideDetail() {
  const { id } = useParams();
  const guide = getGuideById(id);

  // Parse markdown-style links [text](url) into React elements
  const parseLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      // Add the link
      const [, linkText, url] = match;
      parts.push(
        <Link key={match.index} to={url} className="guide-link">
          {linkText}
        </Link>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

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
                            <strong>{parts[1]}</strong>{parseLinks(parts[2])}
                          </p>
                        );
                      }
                      if (line.startsWith('- ')) {
                        return <li key={lIndex}>{parseLinks(line.substring(2))}</li>;
                      }
                      return <p key={lIndex}>{parseLinks(line)}</p>;
                    })}
                  </div>
                );
              }
              return <p key={pIndex}>{parseLinks(paragraph)}</p>;
            })}
          </section>
        ))}
      </div>

    </div>
  );
}

export default GuideDetail;
