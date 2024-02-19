import React, { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';

const AddTag = () => {
   //.......................................Admin functiuons.....................................
   const name=sessionStorage.getItem('username');
  const [tagName, setTagName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append('tag_name', tagName);

    console.log(tagName);
    // Send the Tag name to the server using a POST request
    fetch('http://localhost/mediareact/src/php/AddTag.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    })
    
      .then(response => response.text())
      .then(data => {
        if (data === 'success') {
          setSuccessMessage('Tag inserted successfully!');
          setTagName('');
        } else {
          setErrorMessage('Error occurred while inserting Tag.');
        }
      })
      .catch(error => {
        setErrorMessage('Error occurred while inserting Tag.');
        console.error('Error:', error);
      });
  };

   //.......................................User functiuons.....................................
  const userid_u =sessionStorage.getItem('id');
  const [tagName_u, setTagName_u] = useState('');
  const [errorMessage_u, setErrorMessage_u] = useState('');
  const [successMessage_u, setSuccessMessage_u] = useState('');

  const handleSubmit_u = (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append('tag_name', tagName_u);

    console.log(tagName_u);
    // Send the Tag name to the server using a POST request
    fetch('http://localhost/mediareact/src/php/AddTag.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    })
    
      .then(response => response.text())
      .then(data => {
        if (data === 'success') {
          setSuccessMessage_u('Tag inserted successfully!');
          setTagName_u('');
        } else {
          setErrorMessage_u('Error occurred while inserting Tag.');
        }
      })
      .catch(error => {
        setErrorMessage_u('Error occurred while inserting Tag.');
        console.error('Error:', error);
      });
  };

  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className='container-fluid px-4'>
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">Add Tags</h1>
          <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
          </li>
            <li className="breadcrumb-item active">Add Tags</li>
          </ol>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
          <div className='card shadow-lg border-0 rounded-lg mt-5'>
            <div className='card-header'>
              <h2 className='text-center'>Add Tags</h2>
              <hr />
            </div>
            {name=="admin"?
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
                    Add New Tags
                  </h5>
                </div>
                <div className='modal-body text-center'>
                  <input
                    type='text'
                    name='tag_name'
                    className='form-control'
                    id='name'
                    required
                    placeholder='Tag Name'
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
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
            :
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
                    Add New Tags-u
                  </h5>
                </div>
                <div className='modal-body text-center'>
                  <input
                    type='text'
                    name='tag_name'
                    className='form-control'
                    id='name'
                    required
                    placeholder='Tag Name'
                    value={tagName_u}
                    onChange={(e) => setTagName_u(e.target.value)}
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
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddTag;
