import { useEffect, useRef, useState } from 'react';
import {
  FaTrophy,
  FaUsers,
  FaHeartbeat,
  FaBullseye,
  FaMedal,
  FaRunning,
  FaDumbbell,
  FaHandshake,
  FaFutbol,
  FaAward,
} from 'react-icons/fa';
import './About.css';

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

const MISSION_VISION = [
  {
    Icon: FaBullseye,
    title: 'Our Mission',
    text: 'To inspire students to participate in sports, maintain physical fitness, and develop qualities such as discipline, teamwork, leadership, confidence, and determination.',
  },
  {
    Icon: FaMedal,
    title: 'Our Vision',
    text: 'To become one of the leading college sports clubs by providing excellent opportunities, quality training, and a supportive environment where every student can achieve success.',
  },
];

const WHY_JOIN = [
  {
    Icon: FaRunning,
    title: 'Professional Training',
    text: 'Improve your sporting skills through regular practice sessions and guidance from experienced faculty and coaches.',
  },
  {
    Icon: FaUsers,
    title: 'Teamwork',
    text: 'Learn communication, leadership, and collaboration by working with teammates in various sports.',
  },
  {
    Icon: FaHeartbeat,
    title: 'Healthy Lifestyle',
    text: 'Stay physically active, improve mental well-being, and maintain a balanced lifestyle through sports.',
  },
  {
    Icon: FaTrophy,
    title: 'Competitions',
    text: 'Represent the college in inter-college, university, district, and state-level tournaments.',
  },
];

const FACILITIES = [
  {
    Icon: FaDumbbell,
    title: 'Fitness Training',
    text: 'Regular fitness sessions designed to improve endurance, strength, flexibility, and overall athletic performance.',
  },
  {
    Icon: FaHandshake,
    title: 'Expert Guidance',
    text: 'Dedicated faculty members and coordinators provide continuous support and motivation to all players.',
  },
  {
    Icon: FaFutbol,
    title: 'Sports Infrastructure',
    text: 'Well-maintained grounds and courts provide students with an ideal environment for practice and competitions.',
  },
  {
    Icon: FaAward,
    title: 'Achievement Recognition',
    text: 'Outstanding performers are recognized through certificates, medals, awards, and opportunities to represent the college.',
  },
];

function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <span className="hero-badge">🏆 Excellence Through Sports</span>
        <h1>About KLS BCA Sports Club</h1>
        <p>
          The KLS BCA Sports Club is committed to promoting fitness,
          sportsmanship, discipline, teamwork, and leadership among students.
          Our mission is to provide every student with opportunities to
          discover their sporting talents while encouraging a healthy and
          active lifestyle.
        </p>
      </section>

      {/* Who We Are */}
      <RevealSection className="about-section">
        <h2>Who We Are</h2>
        <p>
          The KLS BCA Sports Club serves as a platform for students who are
          passionate about sports and physical fitness. Our club encourages
          active participation in a variety of indoor and outdoor games,
          creating an environment where students can develop confidence,
          teamwork, and leadership skills.
        </p>
        <p>
          Throughout the academic year, we organize practice sessions,
          tournaments, fitness programs, friendly matches, and inter-college
          competitions. Students receive opportunities to improve their
          skills, represent the college, and build lifelong friendships
          through sports.
        </p>
        <p>
          We believe that sports are not only about winning medals but also
          about building character, learning discipline, respecting
          opponents, and becoming responsible individuals.
        </p>
      </RevealSection>

      {/* Mission & Vision */}
      <RevealSection className="mission-grid">
        {MISSION_VISION.map(({ Icon, title, text }) => (
          <div className="mission-card" key={title}>
            <Icon className="about-icon" />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </RevealSection>

      {/* Why Join */}
      <RevealSection className="why-join">
        <h2>Why Join Our Sports Club?</h2>
        <div className="feature-grid">
          {WHY_JOIN.map(({ Icon, title, text }, i) => (
            <div
              className="feature-card"
              key={title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon className="feature-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Facilities */}
      <RevealSection className="facilities">
        <h2>Club Facilities</h2>
        <div className="facility-grid">
          {FACILITIES.map(({ Icon, title, text }, i) => (
            <div
              className="facility-card"
              key={title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon className="feature-icon" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Closing */}
      <RevealSection className="about-footer">
        <h2>Join Our Winning Team</h2>
        <p>
          Whether you're a beginner or an experienced athlete, the KLS BCA
          Sports Club welcomes you with open arms. Here, you'll find a
          supportive community that encourages growth, celebrates
          achievements, and inspires every student to reach their full
          potential.
        </p>
        <p>
          Join us today and become part of a tradition built on passion,
          dedication, teamwork, and excellence in sports.
        </p>
      </RevealSection>
    </div>
  );
}

export default About;