import { Link } from "react-router-dom";

function SportCard({ title, icon, description }) {
  return (
    <Link
      to={`/sports/${title.toLowerCase()}`}
      className="sport-card-link"
    >
      <div className="sport-card">

        <div className="sport-card-icon">
          {icon}
        </div>

        <h2>{title}</h2>

        <p>{description}</p>

      </div>
    </Link>
  );
}

export default SportCard;