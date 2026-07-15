import college from "./assets/college.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🏆 KLS BCA College, Haliyal</span>

        <h1>Welcome to KLS BCA Sports Club</h1>

        <p>
          Encouraging teamwork, leadership, fitness, and sportsmanship among
          students of KLS BCA College, Haliyal. Whether you're a seasoned
          player or picking up a sport for the first time, there's a team
          waiting for you.
        </p>

        <div className="hero-actions">
          <button className="hero-btn">Join the Club</button>
          <button className="hero-btn-secondary">View Sports</button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <h3>6+</h3>
            <p>Sports Offered</p>
          </div>
          <div className="hero-stat">
            <h3>200+</h3>
            <p>Active Members</p>
          </div>
          <div className="hero-stat">
            <h3>10+</h3>
            <p>Annual Events</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={college} alt="KLS BCA College" />
      </div>
    </section>
  );
}

export default Hero;