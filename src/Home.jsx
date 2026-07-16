import college from "./assets/college.jpg";

function Home() {
  const sports = [
    "Cricket",
    "Football",
    "Volleyball",
    "Badminton",
    "Kabaddi",
  ];


  const events = [
    {
      title: "Inter-Class Cricket Tournament",
      date: "15 August 2026",
      location: "College Ground"
    },
    {
      title: "Football Friendly Match",
      date: "22 August 2026",
      location: "Sports Complex"
    },
    {
      title: "Annual Sports Meet",
      date: "10 September 2026",
      location: "KLS Campus"
    }
  ];


  return (
    <>
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

      <section className="about-club">
        <h2>About Our Sports Club</h2>

        <p>
          The KLS BCA Sports Club encourages students to participate in various
          sports activities to promote fitness, teamwork, leadership, and
          sportsmanship.
        </p>

        <p>
          Our club organizes tournaments, practice sessions, and inter-college
          competitions throughout the year, providing students opportunities to
          showcase their talents.
        </p>
      </section>


      <section className="sports">
      <h2>Sports We Offer</h2>

      <div className="sports-container">
        {sports.map((sport, index) => (
          <div className="sport-card" key={index}>
            <h3>{sport}</h3>
            <p>
              Join our {sport} team and represent the college in tournaments.
            </p>
          </div>
        ))}
      </div>
    </section>



    <section className="events">
      <h2>Upcoming Events</h2>

      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p>📅 {event.date}</p>
            <p>📍 {event.location}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="join-club">
      <h2>Join Our Sports Club</h2>

      <p>
        Become a part of the KLS BCA Sports Club and represent our college in
        various sports competitions and events.
      </p>

      <button className="join-btn">Register Now</button>
    </section>
  


    </>
  );
}

export default Home;