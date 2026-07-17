import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchSportsList } from "../api";
import { sportIcon } from "../sportIcons";

function Sports() {
  const [sports, setSports] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | empty | error

  useEffect(() => {
    let cancelled = false;

    fetchSportsList()
      .then((data) => {
        if (cancelled) return;
        setSports(data);
        setStatus(data.length ? "ready" : "empty");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="sports-page">
      <div className="sports-page-header">
        <span className="hero-badge">🏅 All Sports</span>
        <h1>Pick a Sport</h1>
        <p>
          Every team fielded by KLS BCA Sports Club, pulled live from the
          roster. Tap a sport to see who's playing.
        </p>
      </div>

      {status === "loading" && (
        <div className="sports-grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="sport-tile skeleton" key={i} />
          ))}
        </div>
      )}

      {status === "error" && (
        <div className="state-message state-error">
          <h3>Couldn't reach the server</h3>
          <p>Make sure the backend is running on port 5000, then refresh.</p>
        </div>
      )}

      {status === "empty" && (
        <div className="state-message">
          <h3>No sports yet</h3>
          <p>Once students are added to the roster, their sports will show up here.</p>
        </div>
      )}

      {status === "ready" && (
        <div className="sports-grid">
          {sports.map(({ sport, count }) => (
            <Link
              to={`/sports/${encodeURIComponent(sport)}`}
              className="sport-tile"
              key={sport}
            >
              <span className="sport-tile-icon">{sportIcon(sport)}</span>
              <h3>{sport}</h3>
              <span className="sport-tile-count">
                {count} player{count === 1 ? "" : "s"}
              </span>
              <span className="sport-tile-cta">View team →</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default Sports;
