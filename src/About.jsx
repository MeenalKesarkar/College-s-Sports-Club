import React from "react";
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
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <span className="hero-badge">🏆 Excellence Through Sports</span>

        <h1>About KLS BCA Sports Club</h1>

        <p>
          The KLS BCA Sports Club is committed to promoting fitness,
          sportsmanship, discipline, teamwork, and leadership among students.
          Our mission is to provide every student with opportunities to discover
          their sporting talents while encouraging a healthy and active
          lifestyle.
        </p>
      </section>

      {/* About */}
      <section className="about-section">

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
          competitions. Students receive opportunities to improve their skills,
          represent the college, and build lifelong friendships through sports.
        </p>

        <p>
          We believe that sports are not only about winning medals but also
          about building character, learning discipline, respecting opponents,
          and becoming responsible individuals.
        </p>

      </section>

      {/* Mission & Vision */}

      <section className="mission-grid">

        <div className="mission-card">
          <FaBullseye className="about-icon" />
          <h3>Our Mission</h3>

          <p>
            To inspire students to participate in sports, maintain physical
            fitness, and develop qualities such as discipline, teamwork,
            leadership, confidence, and determination.
          </p>

        </div>

        <div className="mission-card">
          <FaMedal className="about-icon" />
          <h3>Our Vision</h3>

          <p>
            To become one of the leading college sports clubs by providing
            excellent opportunities, quality training, and a supportive
            environment where every student can achieve success.
          </p>

        </div>

      </section>

      {/* Why Join */}

      <section className="why-join">

        <h2>Why Join Our Sports Club?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaRunning className="feature-icon" />
            <h3>Professional Training</h3>

            <p>
              Improve your sporting skills through regular practice sessions and
              guidance from experienced faculty and coaches.
            </p>

          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Teamwork</h3>

            <p>
              Learn communication, leadership, and collaboration by working
              with teammates in various sports.
            </p>

          </div>

          <div className="feature-card">
            <FaHeartbeat className="feature-icon" />
            <h3>Healthy Lifestyle</h3>

            <p>
              Stay physically active, improve mental well-being, and maintain a
              balanced lifestyle through sports.
            </p>

          </div>

          <div className="feature-card">
            <FaTrophy className="feature-icon" />
            <h3>Competitions</h3>

            <p>
              Represent the college in inter-college, university, district, and
              state-level tournaments.
            </p>

          </div>

        </div>

      </section>

      {/* Facilities */}

      <section className="facilities">

        <h2>Club Facilities</h2>

        <div className="facility-grid">

          <div className="facility-card">
            <FaDumbbell className="feature-icon" />
            <h3>Fitness Training</h3>

            <p>
              Regular fitness sessions designed to improve endurance, strength,
              flexibility, and overall athletic performance.
            </p>

          </div>

          <div className="facility-card">
            <FaHandshake className="feature-icon" />
            <h3>Expert Guidance</h3>

            <p>
              Dedicated faculty members and coordinators provide continuous
              support and motivation to all players.
            </p>

          </div>

          <div className="facility-card">
            <FaFutbol className="feature-icon" />
            <h3>Sports Infrastructure</h3>

            <p>
              Well-maintained grounds and courts provide students with an ideal
              environment for practice and competitions.
            </p>

          </div>

          <div className="facility-card">
            <FaAward className="feature-icon" />
            <h3>Achievement Recognition</h3>

            <p>
              Outstanding performers are recognized through certificates,
              medals, awards, and opportunities to represent the college.
            </p>

          </div>

        </div>

      </section>

      {/* Closing */}

      <section className="about-footer">

        <h2>Join Our Winning Team</h2>

        <p>
          Whether you're a beginner or an experienced athlete, the KLS BCA
          Sports Club welcomes you with open arms. Here, you'll find a
          supportive community that encourages growth, celebrates achievements,
          and inspires every student to reach their full potential.
        </p>

        <p>
          Join us today and become part of a tradition built on passion,
          dedication, teamwork, and excellence in sports.
        </p>

      </section>

    </div>
  );
};

export default About;