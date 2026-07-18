import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import badmintonHero from "./assets/badminton-hero.jpg";
import throwballHero from "./assets/throwball-hero.jpg";
import athleteHero from "./assets/athlete-hero.jpg";
import javelinHero from "./assets/javelin-hero.jpg";
import studentImages from "./studentImages";
import SportCard from "./SportCard";

import {
  FaRunning,
  FaBasketballBall,
  FaTableTennis
} from "react-icons/fa";

function SportDetails() {
  const { sport } = useParams();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/students/${sport}`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [sport]);

  const heroImages = {
  badminton: badmintonHero,
  throwball: throwballHero,
  athlete: athleteHero,
  javelin: javelinHero,
};

  return (
    <main className="sport-details-page">

      {/* Hero Section */}
      <section
        className="sport-details-hero"
        style={{
            backgroundImage: `linear-gradient(rgba(8,20,45,.75),rgba(8,20,45,.75)), url(${heroImages[sport.toLowerCase()]})`
        }}>

        </section>

      {/* Student Section */}

      <section className="student-section">

        <h2>Our {sport} Players</h2>

        {loading ? (

          <h3>Loading Students...</h3>

        ) : students.length === 0 ? (

          <h3>No Students Found</h3>

        ) : (

          <div className="student-grid">

            {students.map((student) => (

              <div
                key={student.id}
                className="student-card"
              >

                <img
                    src={studentImages[student.name] || "https://placehold.co/300x300"}
                    alt={student.name}
                />

                <div className="student-info">

                  <h3>{student.name}</h3>

                  <p>
                    <strong>Age :</strong> {student.age}
                  </p>

                  <p>
                    <strong>Class :</strong> {student.class}
                  </p>

                  <p>
                    <strong>Gender :</strong> {student.gender}
                  </p>

                  <p>
                    <strong>Sport :</strong> {student.sport}
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {/* Popular Game */}

      <section className="popular-game">

        <h2>Our Popular Game</h2>

        <p>

          Our college has consistently encouraged students to
          participate in various sports competitions. Every player
          is trained with dedication and teamwork, helping them
          achieve excellence in district, state, and national level
          tournaments.

        </p>

      </section>

      {/* Popular Sports */}

<section className="popular-section">

  <h1>Explore Other Popular Sports</h1>

  <div className="popular-grid">

    <SportCard
      title="Badminton"
      icon={<FaTableTennis />}
      description="Indoor racket sport requiring agility and speed."
    />

    <SportCard
      title="Throwball"
      icon={<FaBasketballBall />}
      description="Fast-paced team sport with teamwork and coordination."
    />

    <SportCard
      title="Athlete"
      icon={<FaRunning />}
      description="Track and field events developing endurance."
    />

    <SportCard
      title="Javelin"
      icon={<span style={{ fontSize: "90px" }}>🎯</span>}
      description="Power and precision in field events."
    />

  </div>

</section>

    </main>
  );
}

export default SportDetails;