import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import { useHistory } from 'react-router-dom';

const VideoComponent = () => {
  // const history = useHistory();

  const handleGoBack = () => {
    // history.goBack(); // Navigate back to the UserDetails component
  };

  return (
    
    <div>
      <Navbar />
      <Sidebar />
      <h2 className="text-white">Video Component</h2>
      {/* Display video component content */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};


export default VideoComponent;