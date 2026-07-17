import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPlayersBySport } from "../api";
import { sportIcon } from "../sportIcons";

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function SportPlayers() {
  const { sportName } = useParams();
  // Keying on sportName below remounts this view on every param change,
  // so state always starts fresh at "loading" without setting it in the effect.
  return <SportTeam key={sportName} sportName={sportName} />;
}

function SportTeam({ sportName }) {
  const [players, setPlayers] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    fetchPlayersBySport(sportName)
      .then((data) => {
        if (cancelled) return;
        setPlayers(data);
        setStatus(data.length ? "ready" : "empty");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [sportName]);

  return (
    <section className="players-page">
      <Link to="/sports" className="back-link">
        ← All sports
      </Link>

      <div className="sports-page-header">
        <span className="hero-badge">
          {sportIcon(sportName)} {sportName}
        </span>
        <h1>{sportName} Team</h1>
        <p>Everyone registered to play {sportName} for KLS BCA College.</p>
      </div>

      {status === "loading" && (
        <div className="players-grid">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="player-card skeleton" key={i} />
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="state-message state-error">
          <h3>Couldn't load this team</h3>
          <p>Check that the backend server is running and try again.</p>
        </div>
      )}

      {status === "empty" && (
        <div className="state-message">
          <h3>No {sportName} players yet</h3>
          <p>Register students for {sportName} and they'll appear here.</p>
        </div>
      )}

      {status === "ready" && (
        <div className="players-grid">
          {players.map((p) => (
            <div className="player-card" key={p._id}>
              <div className="player-avatar">{initials(p.name)}</div>
              <h3>{p.name}</h3>
              <ul className="player-meta">
                {p.class && <li>Class {p.class}</li>}
                {p.age ? <li>Age {p.age}</li> : null}
                {p.gender && <li>{p.gender}</li>}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SportPlayers;
