import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import college from '../assets/college.jpg';
import './Home.css';

const SPORTS = ['Cricket', 'Football', 'Volleyball', 'Badminton', 'Kabaddi'];

const EVENTS = [
  { title: 'Inter-Class Cricket Tournament', date: '15 August 2026', location: 'College Ground' },
  { title: 'Football Friendly Match', date: '22 August 2026', location: 'Sports Complex' },
  { title: 'Annual Sports Meet', date: '10 September 2026', location: 'KLS Campus' },
];

// Lightweight scroll-reveal hook — no dependencies required
function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function RevealSection({ children, className = '' }) {
  const [ref, isVisible] = useInView();
  return (
    <section ref={ref} className={`${className} reveal ${isVisible ? 'reveal--visible' : ''}`}>
      {children}
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🏆 KLS BCA College, Haliyal</span>

          <h1>
            Welcome to <span className="hero-highlight">KLS BCA Sports Club</span>
          </h1>

          <p>
            Encouraging teamwork, leadership, fitness, and sportsmanship among
            students of KLS BCA College, Haliyal. Whether you're a seasoned
            player or picking up a sport for the first time, there's a team
            waiting for you.
          </p>

          <div className="hero-actions">
            <a href="#join" className="hero-btn">
              Join the Club
            </a>
            <Link to="/sports" className="hero-btn-secondary">
              View Sports
            </Link>
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
          <img src={college} alt="KLS BCA College campus" />
        </div>
      </section>

      <RevealSection className="sports">
        <h2>Sports We Offer</h2>
        <div className="sports-container">
          {SPORTS.map((sport, i) => (
            <div
              className="home-sport-card"
              key={sport}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3>{sport}</h3>
              <p>Join our {sport} team and represent the college in tournaments.</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="events">
        <h2>Upcoming Events</h2>
        <div className="events-container">
          {EVENTS.map((event, i) => (
            <div
              className="event-card"
              key={event.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3>{event.title}</h3>
              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="join-club">
        <h2 id="join">Join Our Sports Club</h2>
        <p>
          Become a part of the KLS BCA Sports Club and represent our college in
          various sports competitions and events.
        </p>
        <button type="button" className="join-btn">
          Register Now
        </button>
      </RevealSection>
    </>
  );
}

export default Home;