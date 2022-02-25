import React from 'react';
import { Link } from 'react-router-dom';

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import me from '../assets/image/Me-pic.jpg';

function About() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4} className="justify-content-center">
              <Image
                src={me}
                roundedCircle
                width="410vw"
                height="400vw" />
            </Col>
            <Col className="pl-md-5">
              <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                I am  Alexander Aranda!</h1>
              <p className="text-dark text-center text-md-left h3">
                An intuitive problem solver. Software Programmer based in Los Angeles.
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <h3>About Me</h3>
          <p>
            An eager entreprenurial minded professional looking to push the boundaries of technology one project at a time.
            As the pandemic began in 2019 I made a decision to propel myself forward into technology.
            While balancing my day job and taking A web bootcamp I worked 80 hours a week, and successfully honed new skills
            by building projects as fun as <Link to='/Projects'>Visual Amp and Shuffle!</Link>


          </p>
          <p>
            After, earning a certificate in Full Stack Web Development from the University of
            California Los Angeles, I developed my skills with Javascript, databases and React. Building creative user responsive
            web applications.
            In terms of my attitude I have an ambitious outlook in providing value to growing brands and
            group efforts aiming to make an impact!
          </p>
          <p>
            Occasionally when I need a break, you might find me creating music, learning something new, or spending time with friends and family.
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;