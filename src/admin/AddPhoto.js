import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import '../csstemp/addPhoto.css';
import { Link } from 'react-router-dom';

const AddPhoto = () => {
   //.....................................Admin Function............................................
   const name=sessionStorage.getItem('username');
  const [categoryName, setCategoryName] = useState('');
  const [tagName, setTagName] = useState('');
  const [userId, setUserId] = useState('');
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [users, setUsers] = useState([]);
  const [categoryName_u, setCategoryName_u] = useState('');
  const [tagName_u, setTagName_u] = useState('');
  const [userId_u, setUserId_u] = useState('');
  const [file_u, setFile_u] = useState(null);
  const [categories_u, setCategories_u] = useState([]);
  const [tags_u, setTags_u] = useState([]);
  const [users_u, setUsers_u] = useState([]);
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
    const fetchData_u = async () => {
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

  const generateImageTitle = () => {
    const fileName = file ? file.name : 'Untitled Photo';
    return fileName;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imageTitle', generateImageTitle());
    formData.append('categoryName', categoryName);
    formData.append('tagName', tagName);
    formData.append('userId', userId);
    formData.append('file', file);

    axios.post('http://localhost/mediareact/src/php/AddPhoto.php', formData)
      .then((response) => {
        console.log(response.data);
        setCategoryName('');
        setTagName('');
        setUserId('');
        setFile(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
   //.....................................User Function............................................
   const generateImageTitle_u = () => {
    const fileName = file_u ? file_u.name : 'Untitled Photo';
    return fileName;
  };

  const handleSubmit_u = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('imageTitle', generateImageTitle_u());
    formData.append('categoryName', categoryName_u);
    formData.append('tagName', tagName_u);
    formData.append('userId', userId_u);
    formData.append('file', file_u);

    axios.post('http://localhost/mediareact/src/php/AddPhoto.php', formData)
      .then((response) => {
        console.log(response.data);
        setCategoryName_u('');
        setTagName_u('');
        setUserId_u('');
        setFile_u(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className='container-fluid px-4'>
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">Add Photo</h1>
          <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
          </li>
            <li className="breadcrumb-item active">Add Photo</li>
          </ol>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
          {name=="admin"
          ?
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h2 className='text-center'>Add Photos</h2>
              <hr />
            </div>
            <div className='card-body'>
              <form className='form-container' onSubmit={handleSubmit}>
                <div className='modal-header bg-info'>
                  <h5 className='modal-title' id='exampleModalLongTitle'>
                    Add New Photo
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
                      <option key={category.category_id} value={category.category_name}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                  <br />

                  <select
                    className='form-control'
                    name='tagName'
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                  >
                    <option value=''>Select Tag</option>
                    {tags.map((tag) => (
                      <option key={tag.tag_id} value={tag.tag_name}>
                        {tag.tag_name}
                      </option>
                    ))}
                  </select>
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
                  <br />

                  <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                    Add New Photo
                  </h5>
                  <input
                    type='file'
                    className='form-control'
                    placeholder='Choose File'
                    name='file'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
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
              <h2 className='text-center'>Add User Photos</h2>
              <hr />
            </div>
            <div className='card-body'>
              <form className='form-container' onSubmit={handleSubmit_u}>
                <div className='modal-header bg-info'>
                  <h5 className='modal-title' id='exampleModalLongTitle'>
                    Add New Photo
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
                      <option key={category.category_id} value={category.category_name}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                  <br />

                  <select
                    className='form-control'
                    name='tagName'
                    value={tagName_u}
                    onChange={(e) => setTagName_u(e.target.value)}
                  >
                    <option value=''>Select Tag</option>
                    {tags_u.map((tag) => (
                      <option key={tag.tag_id} value={tag.tag_name}>
                        {tag.tag_name}
                      </option>
                    ))}
                  </select>
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
                  <br />

                  <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                    Add New Photo
                  </h5>
                  <input
                    type='file'
                    className='form-control'
                    placeholder='Choose File'
                    name='file'
                    onChange={(e) => setFile_u(e.target.files[0])}
                  />
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
          }
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddPhoto;
