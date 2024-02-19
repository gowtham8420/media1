import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../csstemp/PhotoStyle.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

const Photo = () => {
  
  //.....................................Admin Function............................................
  const name=sessionStorage.getItem('username');
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [photos_u, setPhotos_u] = useState([]);
  const [selectedPhoto_u, setSelectedPhoto_u] = useState(null);
  const [users_u, setUsers_u] = useState([]);
  const [categories_u, setCategories_u] = useState([]);
  const [tags_u, setTags_u] = useState([]);
  const userid_u = parseInt(sessionStorage.getItem('id'), 10); // Get user ID from session storage

  useEffect(() => {
    // Fetch photos from the backend API
    fetchPhotos();
    fetchUsers();
    fetchCategories();
    fetchTags();
    fetchPhotos_u();
    fetchCategories_u();
    fetchTags_u();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('http://localhost/mediareact/src/php/getPhotos.php');
      setPhotos(response.data);
      console.log('Fetched Photos:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost/mediareact/src/php/getUsers.php');
      setUsers(response.data);
      console.log('Fetched Users:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost/mediareact/src/php/getCategories.php');
      setCategories(response.data);
      console.log('Fetched Categories:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await axios.get('http://localhost/mediareact/src/php/getTags.php');
      setTags(response.data);
      console.log('Fetched Tags:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const openPhotoModal = (photoId) => {
    const selectedPhoto = photos.find((photo) => photo.id === photoId);
    setSelectedPhoto(selectedPhoto);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.username : '';
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.category_name : '';
  };

  const getTagName = (tagId) => {
    const tag = tags.find((tag) => tag.id === tagId);
    return tag ? tag.tag_name : '';
  };
  
  //.....................................User Function............................................

  const fetchPhotos_u = async () => {
    try {
      const response = await axios.get(`http://localhost/mediareact/src/php/getUserPhotos.php?userid=${userid_u}`);
      setPhotos_u(response.data);
      console.log('Fetched Photos:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

 
  const fetchCategories_u = async () => {
    try {
      const response = await axios.get('http://localhost/mediareact/src/php/getCategories.php');
      setCategories_u(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchTags_u = async () => {
    try {
      const response = await axios.get('http://localhost/mediareact/src/php/getTags.php');
      setTags_u(response.data);
  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const openPhotoModal_u = (photoId) => {
    const selectedPhoto_u = photos_u.find((photo) => photo.id === photoId);
    setSelectedPhoto_u(selectedPhoto_u);
  };

  const closePhotoModal_u = () => {
    setSelectedPhoto_u(null);
  };

  const getUserName_u = (userId) => {
    const user = users_u.find((user) => user.id === userId);
    return user ? user.username : '';
  };

  const getCategoryName_u = (categoryId) => {
    const category = categories_u.find((category) => category.id === categoryId);
    return category ? category.category_name : '';
  };

  const getTagName_u = (tagId) => {
    const tag = tags_u.find((tag) => tag.id === tagId);
    return tag ? tag.tag_name : '';
  };
  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">Photos</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="breadcrumb-item active">Photos</li>
      </ol>
      {name=="admin"
      ?
      <div>
      <div className='photo-grid'>
        {photos.length > 0 ? (
          photos.map((photo) => (
           <div className='photo-item' key={photo.id} onClick={() => openPhotoModal(photo.id)}>

              <div className='photo-thumbnail'>
                <img src={`http://localhost/mediareact/src/php/${photo.file_location}`} alt={photo.img_title} />
              </div>
              <h3 className='photo-title'>{photo.img_title}</h3>
            </div>
          ))
        ) : (
          <p>No photos found.admin</p>
        )}
      </div>
      {selectedPhoto && (
        <div className='photo-modal'>
          <div className='photo-modal-content'>
            <div className='selected-photo-container'>
              <img src={`http://localhost/mediareact/src/php/${selectedPhoto.file_location}`} alt={selectedPhoto.photo_title} className='selected-photo' />
            </div>
            <div className='photo-details'>
              <h3 className='photo-title'>Photo ID: {selectedPhoto.id}</h3>
              <p className='photo-details'>User: {getUserName(selectedPhoto.user_id)}</p>
              <p className='photo-details'>Category: {getCategoryName(selectedPhoto.category_id)}</p>
              <p className='photo-details'>Tag: {getTagName(selectedPhoto.tag_id)}</p>
            </div>
            <div className='close-icon' onClick={closePhotoModal}>
              X
            </div>
          </div>
        </div>
      )}
     </div>
      :
      <div>
      <div className='photo-grid'>
      {Array.isArray(photos_u) && photos_u.length > 0 ? (
        photos_u.map((photo) => (
           <div className='photo-item' key={photo.id} onClick={() => openPhotoModal_u(photo.id)}>

              <div className='photo-thumbnail'>
                <img src={`http://localhost/mediareact/src/php/${photo.file_location}`} alt={photo.img_title} />
              </div>
              <h3 className='photo-title'>{photo.img_title}</h3>
            </div>
          ))
        ) : (
          <p>No photos found.user</p>
        )}
      </div>
      {selectedPhoto_u && (
        <div className='photo-modal'>
          <div className='photo-modal-content'>
            <div className='selected-photo-container'>
              <img src={`http://localhost/mediareact/src/php/${selectedPhoto_u.file_location}`} alt={selectedPhoto_u.photo_title} className='selected-photo' />
            </div>
            <div className='photo-details'>
              <h3 className='photo-title'>Photo ID: {selectedPhoto_u.id}</h3>
              <p className='photo-details'>User: {getUserName_u(selectedPhoto_u.user_id)}</p>
              <p className='photo-details'>Category: {getCategoryName_u(selectedPhoto_u.category_id)}</p>
              <p className='photo-details'>Tag: {getTagName_u(selectedPhoto_u.tag_id)}</p>
            </div>
            <div className='close-icon' onClick={closePhotoModal_u}>
              X
            </div>
          </div>
        </div>
      )}
      </div>}
     
    </div>
    </div>
  );
};

export default Photo;
