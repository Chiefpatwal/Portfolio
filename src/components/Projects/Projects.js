import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatty from "../../Assets/Projects/chatty.png"
import Notebook from "../../Assets/Projects/Notebook.png"
import Devtinder from "../../Assets/Projects/Devtinder.png"
import Confess from "../../Assets/Projects/Confess.png"
import Movie from "../../Assets/Projects/Movie.png"
import Resume from "../../Assets/Projects/Resume.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Confess}
              isBlog={false}
              title="Confess"
              description="Confess is a platform that allows users to share their confessions, messages, poems, and stories anonymously. Readers can explore these posts, while signed-in users get a secure and personalized experience."
              ghLink="https://github.com/Chiefpatwal/CONFESS"
              demoLink="https://confess-frontend.onrender.com/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resume}
              isBlog={false}
              title="Ai-Resume-Parser"
              description="

This project combines modern web technologies with advanced AI capabilities to create a sophisticated resume analysis platform. The system evaluates resumes against industry standards, identifies areas for improvement, and provides actionable insights to increase ATS compatibility and hiring success rates."
              ghLink="https://github.com/Chiefpatwal/Movie_Review_Classification"
              // demoLink="https://blogs.pankaj-patwal.tech/"      <--------Please include a demo link here 
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Devtinder}
              isBlog={false}
              title="Devtinder"
              description="A Full-Stack MERN  application , inspired by tinder for Developers where they can connect with other techies ,rest api , mognodb , jwt authentication and pagination"
              ghLink="https://github.com/Chiefpatwal/DevTinder"
                        
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie_Review_Classification"
              description="This project implements a sentiment analysis model to automatically classify movie reviews from the IMDB dataset. The model uses natural language processing techniques and LSTM networks to understand the context and sentiment of movie reviews with high accuracy."
              ghLink="https://github.com/Chiefpatwal/Movie_Review_Classification"
              
            />
          </Col>

             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatty}
              isBlog={false}
              title="Chatyy"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, daisy-UI, and MongoDb, using Web sockets for realtime chatting experience."
              ghLink="https://github.com/Chiefpatwal/fullstack_chatapp"
              demoLink="https://fullstack-chatapp-dbzd.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notebook}
              isBlog={false}
              title="Notebook"
              description="A Full-Stack Note-Making Application built using the MERN stack implemented rate limiting with Upstash Redis for security and scalability"
              
            />
          </Col>
         

          

         
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
