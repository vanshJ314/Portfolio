import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaFutbol } from 'react-icons/fa';  // For football
import { ImLibrary } from 'react-icons/im'; // For books
import { ImLeaf } from 'react-icons/im';    // For nature



function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vansh Jain </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently pursuing a B.Tech in Information Technology from
            <br />
            Dwarkadas J. Sanghvi College of Engineering.
            <br />
            <br />
            Apart from analysis, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaFutbol /> Playing Football
            </li>
            <li className="about-activity">
              <ImLibrary /> Researching
            </li>
            <li className="about-activity">
              <ImLeaf /> Exploring nature
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
