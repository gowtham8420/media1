import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import { useHistory } from 'react-router-dom';

const ImageComponent = () => {
  const [images, setImages] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    // Fetch images from the database or API
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost/mediareact/src/php/images.php');
        const data = await response.json();
        setImages(data.images); // Assuming the response has an array of image data
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, []);

  const handleGoBack = () => {
    // history.goBack(); // Navigate back to the UserDetails component
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <h2 className="text-white">Image Component</h2>
      {/* Display image component content */}
      <div>
        {images.map((image, index) => (
          <img key={index} src={image.url} alt={`Image ${index}`} />
        ))}
      </div>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default ImageComponent;
