import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const EditTag = ({ location }) => {
  const [tagName, setTagName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    console.log('Location State:', location.state); // Check the location state object
    if (location.state && location.state.tag) {
      setTagName(location.state.tag.tag_name);
    }
  }, [location.state]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
   // Debug statements
   console.log('Tag ID:', location.state.tag ? location.state.tag.id : 'No ID');
   console.log('Tag Name:', tagName);
 
    // Create form data object
    const formData = new FormData();
    formData.append('tag_name', tagName);
  
    // Determine the URL based on whether it's an edit or add operation
    // Determine the URL based on whether it's an edit or add operation
const url = location.state.tag ? `http://localhost/mediareact/src/php/EditTag.php?id=${location.state.tag.id}&tag_name=${encodeURIComponent(tagName)}` : 'http://localhost/mediareact/src/php/AddTag.php';
    console.log('URL:', url); // Log the constructed URL
    const method = location.state.tag ? 'PUT' : 'POST';

    // Send the Tag name to the server using the appropriate request method
    // ...

fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
    credentials: 'include',
  })
    .then((response) => response.text()) // Parse the response as plain text
    .then((data) => {
      if (data === 'success') { // Check the response text
        setSuccessMessage('Tag updated successfully!');
      } else {
        setErrorMessage('Error occurred while updating Tag.');
      }
    })
    .catch((error) => {
      setErrorMessage('Error occurred while updating Tag.');
      console.error('Error:', error);
    });
}
  // ...
  
  
  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header">
              <h2 className="text-center">
                {location.state.tag ? 'Edit Tag' : 'Add New Tag'}
              </h2>
              <hr />
            </div>
            <div className="card-body">
              {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="modal-body text-center">
                  <input
                    type="text"
                    name="tag_name"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Tag Name"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                  />
                  <br />
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    name="but_upload"
                    value={location.state.tag ? 'Update' : 'Save'}
                    className="btn btn-info"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EditTag;
