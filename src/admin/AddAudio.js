import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import '../csstemp/addAudio.css';
import { Link } from 'react-router-dom';

const AddAudio = () => {
  //.....................................Admin Function............................................
  const name=sessionStorage.getItem('username');
  const [categoryName, setCategoryName] = useState('');
  const [tagName, setTagName] = useState('');
  const [userId, setUserId] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [users, setUsers] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get('http://localhost/mediareact/src/php/GetCategories.php');
        setCategories(categoriesResponse.data);
        
        const tagsResponse = await axios.get('http://localhost/mediareact/src/php/GetTags.php');
        setTags(tagsResponse.data);
        
        const usersResponse = await axios.get('http://localhost/mediareact/src/php/GetUsers.php');
        setUsers(usersResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const  fetchData_u= async () => {
      try {
        const categoriesResponse = await axios.get('http://localhost/mediareact/src/php/GetCategories.php');
        setCategories_u(categoriesResponse.data);
        
        const tagsResponse = await axios.get('http://localhost/mediareact/src/php/GetTags.php');
        setTags_u(tagsResponse.data);
        
        const usersResponse = await axios.get('http://localhost/mediareact/src/php/GetUsers.php');
        setUsers_u(usersResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData_u();
  }, []);

  const generateAudioTitle = () => {
    const fileName = audioFile ? audioFile.name : 'Untitled Audio';
    return fileName;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    const formData = new FormData();
    formData.append('audioTitle', generateAudioTitle());
    formData.append('categoryName', categoryName);
    formData.append('tagName', tagName);
    formData.append('userId', userId);
    formData.append('audioFile', audioFile);
    formData.append('thumbnail', thumbnail);
  
    axios
      .post('http://localhost/mediareact/src/php/AddAudio.php', formData)
      .then((response) => {
        console.log(response.data);
        setCategoryName('');
        setTagName('');
        setUserId('');
        setAudioFile(null);
        setThumbnail(null);
        setErrors({});
        window.alert('Audio uploaded successfully!'); // Display success message
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!categoryName) {
      errors.categoryName = 'Category is required.';
      isValid = false;
    }

    if (!tagName) {
      errors.tagName = 'Tag is required.';
      isValid = false;
    }

    if (!userId) {
      errors.userId = 'User ID is required.';
      isValid = false;
    }

    if (!audioFile) {
      errors.audioFile = 'Audio file is required.';
      isValid = false;
    }

    if (!thumbnail) {
      errors.thumbnail = 'Thumbnail is required.';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  
  //.....................................User Function............................................
  const [categoryName_u, setCategoryName_u] = useState('');
  const [tagName_u, setTagName_u] = useState('');
  const [userId_u, setUserId_u] = useState('');
  const [audioFile_u, setAudioFile_u] = useState(null);
  const [categories_u, setCategories_u] = useState([]);
  const [tags_u, setTags_u] = useState([]);
  const [users_u, setUsers_u] = useState([]);
  const [thumbnail_u, setThumbnail_u] = useState(null);
  const [errors_u, setErrors_u] = useState({});
  const generateAudioTitle_u = () => {
    const fileName = audioFile_u ? audioFile_u.name : 'Untitled Audio';
    return fileName;
  };

  const handleSubmit_u = (e) => {
    e.preventDefault_u();
  
    if (!validateForm_u()) {
      return;
    }
  
    const formData = new FormData();
    formData.append('audioTitle', generateAudioTitle_u());
    formData.append('categoryName', categoryName_u);
    formData.append('tagName', tagName_u);
    formData.append('userId', userId_u);
    formData.append('audioFile', audioFile_u);
    formData.append('thumbnail', thumbnail_u);
  
    axios
      .post('http://localhost/mediareact/src/php/AddAudio.php', formData)
      .then((response) => {
        console.log(response.data);
        setCategoryName_u('');
        setTagName_u('');
        setUserId_u('');
        setAudioFile_u(null);
        setThumbnail_u(null);
        setErrors_u({});
        window.alert('Audio uploaded successfully!'); // Display success message
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const validateForm_u = () => {
    let isValid = true;
    const errors_u = {};

    if (!categoryName_u) {
      errors_u.categoryName_u = 'Category is required.';
      isValid = false;
    }

    if (!tagName_u) {
      errors_u.tagName_u = 'Tag is required.';
      isValid = false;
    }

    if (!userId_u) {
      errors_u.userId_u = 'User ID is required.';
      isValid = false;
    }

    if (!audioFile_u) {
      errors_u.audioFile_u = 'Audio file is required.';
      isValid = false;
    }

    if (!thumbnail_u) {
      errors_u.thumbnail_u = 'Thumbnail is required.';
      isValid = false;
    }

    setErrors_u(errors_u);
    return isValid;
  };
  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className='container-fluid px-4'>
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">Add Audio</h1>
          <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
          </li>
            <li className="breadcrumb-item active">Add Audio</li>
          </ol>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
          {name=="admin"
          ?
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h2 className='text-center'>Add Audios</h2>
              <hr />
            </div>
            <div className='card-body'>
              <form className='form-container' onSubmit={handleSubmit}>
                <div className='modal-header bg-info'>
                  <h5 className='modal-title' id='exampleModalLongTitle'>
                    Add New Audio
                  </h5>
                </div>
                <div className='modal-body text-center'>
                  <select
                    className='form-control'
                    name='categoryName'
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  >
                    <option value=''>Select Category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.category_name}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                  {errors.categoryName && <div className="error-message">{errors.categoryName}</div>}
                  <br />
                  <select
                    className='form-control'
                    name='tagName'
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                  >
                    <option value=''>Select Tag</option>
                    {tags.map((tag) => (
                      <option key={tag.id} value={tag.tag_name}>
                        {tag.tag_name}
                      </option>
                    ))}
                  </select>
                  {errors.tagName && <div className="error-message">{errors.tagName}</div>}
                  <br />
                  <select
                    className='form-control'
                    name='userId'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  >
                    <option value=''>Select User ID</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.id}
                      </option>
                    ))}
                  </select>
                  {errors.userId && <div className="error-message">{errors.userId}</div>}
                  <br />
                  <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                    Add New Audio File
                  </h5>
                  <input
                    type='file'
                    className='form-control'
                    placeholder='Choose Audio File'
                    name='audioFile'
                    onChange={(e) => setAudioFile(e.target.files[0])}
                  />
                  {errors.audioFile && <div className="error-message">{errors.audioFile}</div>}
                  <br />
                  <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                    Add Thumbnail
                  </h5>
                  <input
                    type='file'
                    className='form-control'
                    placeholder='Choose Thumbnail'
                    name='thumbnail'
                    onChange={(e) => setThumbnail(e.target.files[0])}
                  />
                  {errors.thumbnail && <div className="error-message">{errors.thumbnail}</div>}
                  <br />
                </div>
                <div className='modal-footer'>
                  <input
                    type='submit'
                    name='but_upload'
                    value='Upload'
                    className='btn btn-info'
                  />
                </div>
              </form>
            </div>
          </div>
          :
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
          <div className='card-header'>
            <h2 className='text-center'>Add User Audios</h2>
            <hr />
          </div>
          <div className='card-body'>
            <form className='form-container' onSubmit={handleSubmit_u}>
              <div className='modal-header bg-info'>
                <h5 className='modal-title' id='exampleModalLongTitle'>
                  Add New Audio
                </h5>
              </div>
              <div className='modal-body text-center'>
                <select
                  className='form-control'
                  name='categoryName'
                  value={categoryName_u}
                  onChange={(e) => setCategoryName_u(e.target.value)}
                >
                  <option value=''>Select Category</option>
                  {categories_u.map((category) => (
                    <option key={category.id} value={category.category_name}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
                {errors_u.categoryName_u && <div className="error-message">{errors_u.categoryName_u}</div>}
                <br />
                <select
                  className='form-control'
                  name='tagName'
                  value={tagName_u}
                  onChange={(e) => setTagName_u(e.target.value)}
                >
                  <option value=''>Select Tag</option>
                  {tags_u.map((tag) => (
                    <option key={tag.id} value={tag.tag_name}>
                      {tag.tag_name}
                    </option>
                  ))}
                </select>
                {errors_u.tagName_u && <div className="error-message">{errors_u.tagName_u}</div>}
                <br />
                <select
                  className='form-control'
                  name='userId'
                  value={userId_u}
                  onChange={(e) => setUserId_u(e.target.value)}
                >
                  <option value=''>Select User ID</option>
                  {users_u.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.id}
                    </option>
                  ))}
                </select>
                {errors_u.userId_u && <div className="error-message">{errors_u.userId_u}</div>}
                <br />
                <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                  Add New Audio File
                </h5>
                <input
                  type='file'
                  className='form-control'
                  placeholder='Choose Audio File'
                  name='audioFile'
                  onChange={(e) => setAudioFile_u(e.target.files[0])}
                />
                {errors_u.audioFile_u && <div className="error-message">{errors_u.audioFile_u}</div>}
                <br />
                <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                  Add Thumbnail
                </h5>
                <input
                  type='file'
                  className='form-control'
                  placeholder='Choose Thumbnail'
                  name='thumbnail'
                  onChange={(e) => setThumbnail_u(e.target.files[0])}
                />
                {errors_u.thumbnail_u && <div className="error-message">{errors_u.thumbnail_u}</div>}
                <br />
              </div>
              <div className='modal-footer'>
                <input
                  type='submit'
                  name='but_upload'
                  value='Upload'
                  className='btn btn-info'
                />
              </div>
            </form>
          </div>
        </div>}
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddAudio;
