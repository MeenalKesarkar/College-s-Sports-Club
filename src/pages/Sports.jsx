import { useEffect, useRef, useState } from 'react';
import SportCard from '../components/SportCard';
import college1 from '../assets/college1.jpg';
import { FaRunning, FaBasketballBall, FaTableTennis, FaBullseye } from 'react-icons/fa';
import './Sports.css';

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

const FACILITIES = [
  '🏊 Swimming Pool',
  '🏋 Gymnasium',
  '🏀 Basketball Court',
  '⚽ Football Ground',
  '🏏 Cricket Practice Nets',
  '🏸 Badminton Court',
  '🏐 Throwball Court',
  '🎯 Indoor Sports Club',
];

const POPULAR_SPORTS = [
  {
    title: 'Badminton',
    icon: <FaTableTennis />,
    description: 'Indoor racket sport requiring agility and speed.',
  },
  {
    title: 'Throwball',
    icon: <FaBasketballBall />,
    description: 'Fast paced team sport improving coordination.',
  },
  {
    title: 'Athlete',
    icon: <FaRunning />,
    description: 'Track and field events with endurance.',
  },
  {
    title: 'Javelin',
    icon: <FaBullseye />,
    description: 'Powerful throwing event requiring precision.',
  },
];

function Sports() {
  return (
    <main>
      {/* HERO */}
      <section className="sports-hero">
        <div className="sports-overlay">
          <h1>
            SPORTS
            <br />
            BUILD CHAMPIONS
          </h1>
          <p>Excellence begins with discipline, teamwork and determination.</p>
        </div>
      </section>

      {/* FACILITY */}
      <RevealSection className="facility-section">
        <div className="facility-left">
          <img src={college1} alt="College sports facility" />
        </div>

        <div className="facility-right">
          <h2>Sports Facilities At Our College</h2>

          <p>
            Our college believes that sports are as important as academics.
            We provide excellent infrastructure for students to practice and
            compete at district, state and national levels.
          </p>

          <div className="facility-list">
            {FACILITIES.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* POPULAR */}
      <RevealSection className="popular-section">
        <h2>Popular Sports We Are Known For</h2>

        <div className="popular-grid">
          {POPULAR_SPORTS.map(({ title, icon, description }, i) => (
            <div key={title} style={{ transitionDelay: `${i * 80}ms` }} className="popular-grid-item">
              <SportCard title={title} icon={icon} description={description} />
            </div>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}

export default Sports;