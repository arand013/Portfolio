import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Auto-Technician',
      category: 'projects',
      description: 'Live URL https://new-gen-mechanics.herokuapp.com/  Github: https://github.com/arand013/Auto-Technician-project-2',
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      description: 'Live URL https://arand013.github.io/Run-Buddy/  Github: https://github.com/arand013/Run-Buddy',
    },
    {
      name: 'Password Generator',
      category: 'projects',
      description: 'Live URL https://arand013.github.io/PasswordGenerator/  Github: https://github.com/arand013/PasswordGenerator',
    },
    {
      name: 'Resume',
      category: 'resume',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
