import React, { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

const AddCategory = () => {
  
    //.....................................Admin Function............................................
    const name=sessionStorage.getItem('username');
  const [categoryName, setCategoryName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append('category_name', categoryName);

    console.log(categoryName);
    // Send the category name to the server using a POST request
    fetch('http://localhost/mediareact/src/php/AddCategory.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    })
    
      .then(response => response.text())
      .then(data => {
        if (data === 'success') {
          setSuccessMessage('Category inserted successfully!');
          setCategoryName('');
        } else {
          setErrorMessage('Error occurred while inserting category.');
        }
      })
      .catch(error => {
        setErrorMessage('Error occurred while inserting category.');
        console.error('Error:', error);
      });
  };
  
    //.....................................User Function............................................
    const userid =sessionStorage.getItem('id');
  const [categoryName_u, setCategoryName_u] = useState('');
  const [errorMessage_u, setErrorMessage_u] = useState('');
  const [successMessage_u, setSuccessMessage_u] = useState('');

  const handleSubmit_u = (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append('category_name', categoryName_u);

    console.log(categoryName_u);
    // Send the category name to the server using a POST request
    fetch('http://localhost/mediareact/src/php/AddCategory.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    })
    
      .then(response => response.text())
      .then(data => {
        if (data === 'success') {
          setSuccessMessage_u('Category inserted successfully!');
          setCategoryName_u('');
        } else {
          setErrorMessage_u('Error occurred while inserting category.');
        }
      })
      .catch(error => {
        setErrorMessage_u('Error occurred while inserting category.');
        console.error('Error:', error);
      });
  };

  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className='container-fluid px-4'>
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">Add Category</h1>
          <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
          </li>
            <li className="breadcrumb-item active">Add Categories</li>
          </ol>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
          {name=="admin"
          ?
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h2 className='text-center'>Add Categories</h2>
              <hr />
            </div>
            <div className='card-body'>
              {errorMessage && (
                <div className='alert alert-danger'>{errorMessage}</div>
              )}
              {successMessage && (
                <div className='alert alert-success'>{successMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className='modal-header bg-info'>
                  <h5 className='modal-title' id='exampleModalLongTitle'>
                    Add New Categories
                  </h5>
                </div>
                <div className='modal-body text-center'>
                  <input
                    type='text'
                    name='category_name'
                    className='form-control'
                    id='name'
                    required
                    placeholder='Category Name'
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                  <br />
                </div>
                <div className='modal-footer'>
                  <input
                    type='submit'
                    name='but_upload'
                    value='Save'
                    className='btn btn-info'
                  />
                </div>
              </form>
            </div>
          </div>
          :
          <div className='card shadow-lg border-0 rounded-lg mt-5'> 
            <div className='card-header'>
              <h2 className='text-center'>Add user Categories</h2>
              <hr />
            </div>
            <div className='card-body'>
              {errorMessage_u && (
                <div className='alert alert-danger'>{errorMessage_u}</div>
              )}
              {successMessage_u && (
                <div className='alert alert-success'>{successMessage_u}</div>
              )}
              <form onSubmit={handleSubmit_u}>
                <div className='modal-header bg-info'>
                  <h5 className='modal-title' id='exampleModalLongTitle'>
                    Add New Categories
                  </h5>
                </div>
                <div className='modal-body text-center'>
                  <input
                    type='text'
                    name='category_name'
                    className='form-control'
                    id='name'
                    required
                    placeholder='Category Name'
                    value={categoryName_u}
                    onChange={(e) => setCategoryName_u(e.target.value)}
                  />
                  <br />
                </div>
                <div className='modal-footer'>
                  <input
                    type='submit'
                    name='but_upload'
                    value='Save'
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

export default AddCategory;
