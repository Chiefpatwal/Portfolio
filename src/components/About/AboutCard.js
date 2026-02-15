import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Pankaj Patwal</span>,{" "}
            a final-year Computer Science student from{" "}
            <span className="purple">Haldwani, India</span>.
            <br />
            <br />
            I'm passionate about backend development and building scalable web 
            applications. When I'm not coding, I enjoy problem-solving through 
            competitive programming and exploring new technologies.
            <br />
            <br />
            Outside of tech, I love engaging in activities that keep me 
            creative and inspired:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess ♟️
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📕
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Exploring New Places 🌍
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;