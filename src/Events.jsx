function Events() {
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
  );
}

export default Events;