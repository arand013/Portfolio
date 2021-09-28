import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import Project from '../components/Project';

// import images for apps
import shuffleImage from '../assets/image/shuffle_music.png'


function Projects() {
  const projects = [
    {
      "title": "Shuffle",
      "description": "A MERN app for discovering and saving movies",
      "key": "music-finder",
      "imageSrc": shuffleImage,
      "repository": "https://github.com/arand013/Music-Finder",
      "deployed_app": "https://shuffle-music.herokuapp.com/"
    }
  ]
  return (
    <>
      <Jumbotron fluid className="p-5 mb-0 shadow">
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Recent Projects</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container className="p-3 ">
        <Row>
          {projects.map((project) => {
            return(
              <Col s={12} lg={6} key={project.key}>
                <Project project={project} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Projects;