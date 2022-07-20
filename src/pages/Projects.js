import React from 'react';

// import react-bootstrap components
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import custom components
import Project from '../components/Project';

// import images for apps
import mintImage from '../assets/image/nft-mint.png'
import ampImage from '../assets/image/visual-amp.png'
import shuffleImage from '../assets/image/shuffle_music.png'
import autoImage from '../assets/image/auto-tech.png'
import weatherImage from '../assets/image/weather-dash.png'
import techImage from '../assets/image/tech-spot.png'
import trackerImage from '../assets/image/tracker.png'
import passImage from '../assets/image/password-gen.png'
import spiralImage from '../assets/image/spiralJS.png'


function Projects() {
  const projects = [


    {
      "title": "NFT-MintEngine",
      "description": "This small project allows you to Mint any jpeg or png, then receive it on Rarible.io",
      "key": "nft-Mint",
      "imageSrc": mintImage,
      "repository": "https://github.com/arand013/NFT-Minter",
      "deployed_app": "https://arand013.github.io/NFT-Minter/"
    },
    {
      "title": "Visual Amp",
      "description": "This visualizer is a simple way. To import 3D effects to your favorite mp3, mp4, wav files with a music player and 3D graphics.",
      "key": "Visual-App",
      "imageSrc": ampImage,
      "repository": "https://github.com/arand013/VisualAmp",
      "deployed_app": "https://arand013.github.io/VisualAmp/"
    },
    {
      "title": "Shuffle",
      "description": "A MERN app for discovering and saving music",
      "key": "music-finder",
      "imageSrc": shuffleImage,
      "repository": "https://github.com/arand013/Music-Finder",
      "deployed_app": "https://shuffle-music.herokuapp.com/"
    },
    {
      "title": "New Gen Mechanic",
      "description": "An MVC app, designed for a business owner looking to reach an online audience to expand his growing business",
      "key": "Auto-technician",
      "imageSrc": autoImage,
      "repository": "https://github.com/arand013/Auto-Technician-project-2",
      "deployed_app": "https://www.newgenmechanics.com"
    },
    {
      "title": "Weather Dashboard",
      "description": "An html, css and server side api webpage, that will generate weekly weather reports for cities across the world",
      "imageSrc": weatherImage,
      "key": "Weather Dashboard",
      "repository": "https://github.com/arand013/Weather-Dashboard",
      "deployed_app": " https://arand013.github.io/Weather-Dashboard/"
    },
    {
      "title": "The Tech Spot",
      "description": "An MVC app, created for a blogging and sharing post online",
      "key": "Tech-Blog",
      "imageSrc": techImage,
      "repository": "https://github.com/arand013/The-Tech-Spot",
      "deployed_app": "https://enigmatic-garden-76168.herokuapp.com"
    },
    {
      "title": "Employee Tracker System",
      "description": "An database template application, designed to add, update or delete a business's employee ",
      "key": "Tracker-system",
      "imageSrc": trackerImage,
      "repository": "https://github.com/arand013/employee-tracker-system",
      "deployed_app": "https://drive.google.com/file/d/1XsJXpi8bwNel1nLO6y0vbIPjEJ6Tr8mz/view"
    },
    {
      "title": "Password Generator",
      "description": "A javascript built app created to generate random long term passwords ",
      "key": "Password-Gen",
      "imageSrc": passImage,
      "repository": "https://github.com/arand013/PasswordGenerator",
      "deployed_app": "https://arand013.github.io/PasswordGenerator/"
    }
    ,
    {
      "title": "Three JS Spiral",
      "description": " A 3D Space Animation using Three.js ",
      "key": "ThreeJS-Spiral",
      "imageSrc": spiralImage,
      "repository": "https://github.com/arand013/three-js-spiral",
      "deployed_app": "https://arand013.github.io/three-js-spiral/"
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
            return (
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