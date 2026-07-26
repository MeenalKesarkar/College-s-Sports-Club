import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import badmintonHero from '../assets/badminton-hero.jpg';
import throwballHero from '../assets/throwball-hero.jpg';
import athleteHero from '../assets/athlete-hero.jpg';
import javelinHero from '../assets/javelin-hero.jpg';
import studentImages from '../studentImages';
import SportCard from '../components/SportCard';
import api from '../../service/api';
import { FaRunning, FaBasketballBall, FaTableTennis, FaBullseye } from 'react-icons/fa';
import './SportDetails.css';

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

const HERO_IMAGES = {
  badminton: badmintonHero,
  throwball: throwballHero,
  athlete: athleteHero,
  javelin: javelinHero,
};

const ALL_SPORTS = [
  { title: 'Badminton', icon: <FaTableTennis />, description: 'Indoor racket sport requiring agility and speed.' },
  { title: 'Throwball', icon: <FaBasketballBall />, description: 'Fast-paced team sport with teamwork and coordination.' },
  { title: 'Athlete', icon: <FaRunning />, description: 'Track and field events developing endurance.' },
  { title: 'Javelin', icon: <FaBullseye />, description: 'Power and precision in field events.' },
];

function StudentCardSkeleton() {
  return (
    <div className="student-card student-card--skeleton" aria-hidden="true">
      <div className="skeleton-img" />
      <div className="student-info">
        <div className="skeleton-line skeleton-line--title" />
        <div className="skeleton-line" />
        <div className="skeleton-line" />
        <div className="skeleton-line" />
      </div>
    </div>
  );
}

function SportDetails() {
  const { sport } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/students/${sport}`);
        setStudents(response.data);
      } catch (error) {
        console.error(error);
        setStudents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [sport]);

  const heroImage = HERO_IMAGES[sport?.toLowerCase()] || badmintonHero;
  const otherSports = ALL_SPORTS.filter(
    (s) => s.title.toLowerCase() !== sport?.toLowerCase()
  );

  return (
    <main className="sport-details-page">
      {/* Hero Section */}
      <section
        className="sport-details-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(8,20,45,.8), rgba(8,20,45,.85)), url(${heroImage})`,
        }}
      >
        <h1>{sport}</h1>
        <p>Meet the players representing our college in {sport}.</p>
      </section>

      {/* Student Section */}
      <RevealSection className="student-section">
        <h2>Our {sport} Players</h2>

        {loading ? (
          <div className="student-grid">
            {Array.from({ length: 4 }).map((_, i) => (
              <StudentCardSkeleton key={i} />
            ))}
          </div>
        ) : students.length === 0 ? (
          <p className="empty-state">No students found for {sport} yet.</p>
        ) : (
          <div className="student-grid">
            {students.map((student) => (
              <div key={student._id ?? student.id} className="student-card">
                <img
                  src={studentImages[student.name] || 'https://placehold.co/300x300'}
                  alt={student.name}
                />
                <div className="student-info">
                  <h3>{student.name}</h3>
                  <p><strong>Age:</strong> {student.age}</p>
                  <p><strong>Class:</strong> {student.class}</p>
                  <p><strong>Gender:</strong> {student.gender}</p>
                  <p><strong>Sport:</strong> {student.sport}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </RevealSection>

      {/* Popular Game */}
      <RevealSection className="popular-game">
        <h2>Our Popular Game</h2>
        <p>
          Our college has consistently encouraged students to participate in
          various sports competitions. Every player is trained with
          dedication and teamwork, helping them achieve excellence in
          district, state, and national level tournaments.
        </p>
      </RevealSection>

      {/* Popular Sports */}
      <RevealSection className="popular-section">
        <h2>Explore Other Popular Sports</h2>

        <div className="popular-grid">
          {otherSports.map(({ title, icon, description }, i) => (
            <div key={title} style={{ transitionDelay: `${i * 80}ms` }} className="popular-grid-item">
              <SportCard title={title} icon={icon} description={description} />
            </div>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}

export default SportDetails;