import React from 'react';

// import react-bootstrap components
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <>
      <Jumbotron fluid className="mb-0">
        <Container>
          <Row>
            <Col sm={12} md={6}lg={4} className="justify-content-center">
              <Image
                src={require("../assets/cover/Electric-Spiral.jpeg")}
                roundedCircle
                width="300vw"
                height="300vw"/>
            </Col>
            <Col className="pl-md-5">
                <h1 className="display-4 text-center text-lg-left text-light p-0-lg pt-4">
                  hello, world!</h1>
                <p className="text-dark text-center text-md-left h3">
                  I'm Alexander, a full-stack developer based in Los Angeles.
                </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow mb-5 bg-light">
        <Container className="p-5">
          <h3>About Me</h3>
          <p>
          I am a Full Stack Web Developer leveraging an opportunity to build a more creative user experience on
          the web. Working towards earingn a certificate in full stack web development from the University of
          California Los Angeles, developing skills such as Javascript, CSS and React.js. To build user responsive
          web applications. 
          </p>
          <p>
          In a project involving a team of three developers, we built a dynamic database system
          along with a polished UI web-page. That now helps a local business owner to track their clients
          appointments and deal with requests by sending technicians to appointments. In terms of my attitude I
          have an ambitious outlook to work with industry leaders and group efforts to meet goals and over-deliver
          on client expectations.
          </p>
          <p>
            When I'm not in front of a screen, you might find me creating music, learning, or spending time with friends and family.
          </p>
        </Container>
      </Container>
    </>
  )
}

export default About;