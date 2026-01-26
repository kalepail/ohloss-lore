import { useParams, Link } from 'react-router-dom';
import { getGuideById } from '../data/guides';
import './GuideDetail.css';

function GuideDetail() {
  const { id } = useParams();
  const guide = getGuideById(id);

  // Parse markdown-style formatting into React elements
  const parseText = (text) => {
    // Combined regex for links, inline code, and bold
    const combinedRegex = /\[([^\]]+)\]\(([^)]+)\)|`([^`]+)`|\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = combinedRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[1] && match[2]) {
        // Link: [text](url)
        const linkText = match[1];
        const url = match[2];
        const isExternal = url.startsWith('http://') || url.startsWith('https://');

        if (isExternal) {
          parts.push(
            <a key={match.index} href={url} className="guide-link" target="_blank" rel="noopener noreferrer">
              {linkText}
            </a>
          );
        } else {
          parts.push(
            <Link key={match.index} to={url} className="guide-link">
              {linkText}
            </Link>
          );
        }
      } else if (match[3]) {
        // Inline code: `code`
        parts.push(
          <code key={match.index} className="inline-code">
            {match[3]}
          </code>
        );
      } else if (match[4]) {
        // Bold: **text**
        parts.push(
          <strong key={match.index}>
            {match[4]}
          </strong>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Alias for backward compatibility
  const parseLinks = parseText;

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
        {guide.video && (
          <div className="guide-video">
            <h2>A note from Old Salt Gideon...</h2>
            <video controls>
              <source src={guide.video} type="video/mp4" />
            </video>
          </div>
        )}
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
                      if (line.startsWith('    - ') || line.startsWith('  - ')) {
                        const indent = line.startsWith('    - ') ? 4 : 2;
                        return <li key={lIndex} className="nested-item">{parseLinks(line.substring(indent + 2))}</li>;
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
