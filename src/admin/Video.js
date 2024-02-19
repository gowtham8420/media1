import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../csstemp/VideoStyle.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
// import '../csstemp/VideoStyle.css';

const Video = () => {
  // ------------------------------ Admin Functions  -----------------------------------------
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const userid = parseInt(sessionStorage.getItem('id'), 10); // Get user ID from session storage
  const name = sessionStorage.getItem('username');

  useEffect(() => {
    // Fetch videos from the backend API
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`http://localhost/mediareact/src/php/getVideos.php`);
        setVideos(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchVideos();
  }, []);
  
  const openVideoModal = (video) => {
    const videoLocation = `${video.file_location}`;
    setSelectedVideo({ ...video, file_location: videoLocation });
  };
  const closeVideoModal = () => {
    setSelectedVideo(null);
  };
// ------------------------------ User Functions ----------------------------------------------
  useEffect(() => {
  // console.log('Fetching videos...');
  const fetchVideos_u = async () => {
    try {
      const response = await axios.get(
        `http://localhost/mediareact/src/php/getUserVideos.php?userid=${userid}`
      );
      console.log('API response:', response.data);
      setVideos(response.data); // Update this line to setVideos(response.data) instead of setVideos(response.data.videos)
    } catch (error) {
      console.error('Error fetching videos:', error);
      setVideos([]);
    }
  };
  fetchVideos_u();
}, []);

// console.log('Videos:', videos);
const openVideoModal_u = (video) => {
  const videoLocation = `${video.file_location}`;
  setSelectedVideo({ ...video, file_location: videoLocation });
};
const closeVideoModal_u = () => {
  setSelectedVideo(null);
};

  return (
   
  <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">{name=="admin"?"Admin-Videos":"User-Videos"}</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="breadcrumb-item active">Videos</li>
      </ol>
      {name==='admin'?
      <div>
      <div className="video-grid">
  {videos.length > 0 ? (
    videos.map((video) => (
      <div
        className="video-item"
        key={video.id}
        onClick={() => openVideoModal(video)}
      >
        <div className="video-thumbnail">
          <img src={video.thumbnail} alt={video.video_title} />
          <div className='play-button'></div>
        </div>
        <h3 className="video-title">{video.video_title}</h3> {/* Display video title here */}
        
      </div>
    ))
  ) : (
    <p>No videos found.</p>
  )}
      </div>  
{selectedVideo && (
  <div className='video-modal'>
    <div className='video-modal-content'>
      <div className='selected-video-container'>
        <ReactPlayer
          url={selectedVideo.file_location}
          controls
          className='selected-video'
          width='100%'
          height='100%'
        />
      </div>
      
      <div className='video-details'>
        <h3 className='video-title'>Video ID: {selectedVideo.id}</h3>
        <p className='video-details'>User: {selectedVideo.user}</p>
        <p className='video-details'>Category: {selectedVideo.category}</p>
        <p className='video-details'>Tag: {selectedVideo.tag}</p>
        <p className='video-details'>Name: {selectedVideo.video_title}</p>
      </div>
      <div className='close-icon' onClick={closeVideoModal}>
        X
      </div>
    </div>
  </div>
)}
</div>
:
<div>
      <div className="video-grid">
      {Array.isArray(videos) && videos.length > 0 ? (
        videos.map((video) => (
          <div
            className="video-item"
            key={video.id}
            onClick={() => openVideoModal_u(video)}
          >
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.video_title} />
              <div className='play-button'></div>
            </div>
            <h3 className="video-title">{video.video_title}</h3>
          </div>
        ))
      )  : (
        <p>Error: Unable to fetch videos.</p>
      )}
      </div>
      {selectedVideo && (
  <div className='video-modal'>
    <div className='video-modal-content'>
      <div className='selected-video-container'>
        <ReactPlayer
          url={selectedVideo.file_location}
          controls
          className='selected-video'
          width='100%'
          height='100%'
        />
      </div>
      
      <div className='video-details'>
        <h3 className='video-title'>Video ID: {selectedVideo.id}</h3>
        <p className='video-details'>User: {selectedVideo.user}</p>
        <p className='video-details'>Category: {selectedVideo.category}</p>
        <p className='video-details'>Tag: {selectedVideo.tag}</p>
        <p className='video-details'>Name: {selectedVideo.video_title}</p>
      </div>
      <div className='close-icon' onClick={closeVideoModal_u}>
        X
      </div>
    </div>
  </div>
      )}
      </div> }
    </div>
    </div>
  );
};

export default Video;
