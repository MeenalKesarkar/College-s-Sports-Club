import { Link } from 'react-router-dom';
import './SportCard.css';

function SportCard({ title, icon, description }) {
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link
      to={`/sports/${slug}`}
      className="sport-card-link"
      aria-label={`View details for ${title}: ${description}`}
    >
      <div className="sport-card">
        <div className="sport-card-icon">{icon}</div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default SportCard;