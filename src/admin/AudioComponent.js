import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import { useHistory } from 'react-router-dom';

const AudioComponent = () => {
  // const history = useHistory();

  const handleGoBack = () => {
    // history.goBack(); // Navigate back to the UserDetails component
  };

  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      <h2 className="text-white">Audio Component</h2>
      {/* Display audio component content */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
    </div>
      



  );
};

export default AudioComponent;