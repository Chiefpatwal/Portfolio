import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a final-year Computer Science student passionate about building 
              efficient, scalable software solutions.
              <br />
              <br />I specialize in backend development with
              <i>
                <b className="purple"> Java, Python, JavaScript, and Node.js, </b>
              </i>
              and have a strong foundation in Data Structures & Algorithms, SQL, DBMS, and OOP principles.
              <br />
              <br />
              My focus areas include developing&nbsp;
              <i>
                <b className="purple">Web Applications, </b> designing{" "}
                <b className="purple">
                  Distributed Systems,
                </b>
              </i>
              &nbsp; and solving complex technical challenges through clean, maintainable code.
              <br />
              <br />
              I'm constantly exploring new technologies and best practices to improve my craft.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;