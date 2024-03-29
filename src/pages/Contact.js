import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import ContactForm from '../components/ContactForm';

// define ContactForm component
function Contact() {
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Contact Me</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h4>Contact Info</h4>
                <p><span><i className="far fa-envelope pr-3"></i></span>Arandaresume23@gmail.com</p>
                <p><span><i className="fab fa-linkedin pr-3"></i></span> linkedin.com/in/alexander-aranda1</p>
                <p><span><i className="fab fa-github pr-3"></i></span> github.com/arand013</p>
              </Container>
            </Col>
            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4>Send a Message</h4>
                <ContactForm />
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Contact;