function Sports() {
  const sports = [
    "Cricket",
    "Football",
    "Volleyball",
    "Badminton",
    "Kabaddi",
    
  ];

  return (
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
  );
}

export default Sports;