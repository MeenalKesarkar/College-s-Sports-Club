import SportCard from "./SportCard";

import college from "./assets/college.jpg";

import {
  FaRunning,
  FaBasketballBall,
  FaTableTennis
} from "react-icons/fa";


function Sports() {

  return (

    <main>

      {/* HERO */}

      <section className="sports-hero">

        <div className="sports-overlay">

          <h1>

            SPORTS
            <br />
            BUILD
            CHAMPIONS

          </h1>

          <p>

            Excellence begins with discipline,
            teamwork and determination.

          </p>

        </div>

      </section>

      {/* FACILITY */}

      <section className="facility-section">

        <div className="facility-left">

          <img
            src={college}
            alt="College"
          />

        </div>

        <div className="facility-right">

          <h2>

            Sports Facilities At Our College

          </h2>

          <p>

            Our college believes that sports are as
            important as academics. We provide
            excellent infrastructure for students to
            practice and compete at district, state and
            national levels.

          </p>

          <div className="facility-list">

            <div>🏊 Swimming Pool</div>

            <div>🏋 Gymnasium</div>

            <div>🏀 Basketball Court</div>

            <div>⚽ Football Ground</div>

            <div>🏏 Cricket Practice Nets</div>

            <div>🏸 Badminton Court</div>

            <div>🏐 Throwball Court</div>

            <div>🎯 Indoor Sports Club</div>

          </div>

        </div>

      </section>

      {/* POPULAR */}

      <section className="popular-section">

        <h1>

          Popular Sports We Are Known For

        </h1>

        <div className="popular-grid">

          <SportCard

            title="Badminton"

            icon={<FaTableTennis />}

            description="Indoor racket sport requiring agility and speed."

          />

          <SportCard

            title="Throwball"

            icon={<FaBasketballBall />}

            description="Fast paced team sport improving coordination."

          />

          <SportCard

            title="Athlete"

            icon={<FaRunning />}

            description="Track and field events with endurance."

          />

          <SportCard
            title="Javelin"
            icon={<span style={{ fontSize: "90px" }}>🎯</span>}
            description="Powerful throwing event requiring precision."
        />

        </div>

      </section>

    </main>

  );

}

export default Sports;