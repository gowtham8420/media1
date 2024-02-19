import React, { useState } from 'react';
import { Link,Z } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import ImageComponent from './ImageComponent';
import VideoComponent from './VideoComponent';
import AudioComponent from './AudioComponent';

const UserDetails = ({ userId }) => {
  const [activeFolder, setActiveFolder] = useState(null);
  const [folderClicked, setFolderClicked] = useState(false);
  // const history = useHistory();

  const handleFolderClick = (folder) => {
    setActiveFolder(folder);
    setFolderClicked(true);

    // Navigate to the corresponding component
    switch (folder) {
      case 'images':
        // history.push(`/UserDetails/${userId}/images`); // Replace `userId` with the actual user ID
        break;
      case 'videos':
        // history.push('/VideoComponent');
        break;
      case 'audios':
        // history.push('/AudioComponent');
        break;
      default:
        break;
    }
  };

  const renderFolderComponent = () => {
    switch (activeFolder) {
      case 'images':
        return <ImageComponent userId={userId} />; // Pass the userId prop to the ImageComponent
      case 'videos':
        return <VideoComponent />;
      case 'audios':
        return <AudioComponent />;
      default:
        return null;
    }
  };
  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4" >
      <Navbar />
      <Sidebar />
      <h2 className="text-white">User Details</h2>
      <div className="folder-container">
        <ul className="folder-list">
          <li className="folder-item">
            <div
              className="folder-link"
              onClick={() => handleFolderClick('images')}
              style={{ cursor: 'pointer' }}
            >
              <div className="folder">
                <i className="fas fa-folder folder-icon"></i>
                <span className="text-white">Images</span>
              </div>
            </div>
          </li>
            {/* ------------------------------------- */}
            <li className="folder-item">
            <div
              className="folder-link"
              onClick={() => handleFolderClick('videos')}
              style={{ cursor: 'pointer' }}
            >
              <div className="folder">
                <i className="fas fa-folder folder-icon"></i>
                <span className="text-white">Images</span>
              </div>
            </div>
          </li>
          {/* --------------------------------- */}
          <li className="folder-item">
            <div
              className="folder-link"
              onClick={() => handleFolderClick('videos')}
              style={{ cursor: 'pointer' }}
            >
              <div className="folder">
                <i className="fas fa-folder folder-icon"></i>
                <span className="text-white">Videos</span>
              </div>
            </div>
          </li>
          <li className="folder-item">
            <div
              className="folder-link"
              onClick={() => handleFolderClick('audios')}
              style={{ cursor: 'pointer' }}
            >
              <div className="folder">
                <i className="fas fa-folder folder-icon"></i>
                <span className="text-white">Audios</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {folderClicked && renderFolderComponent()}
    </div>
    </div>
  );
};

export default UserDetails;
