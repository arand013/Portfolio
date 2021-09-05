import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/run.png"

function Projects(props) {
  const currentCategory = {
    name: 'Work', description: 'Projects and Past experience' 
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="Projects"
            className="img-thumbnail mx-1"
           
          />
      </div>
    </section>
  );
}
export default Projects;