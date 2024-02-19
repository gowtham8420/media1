import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const EditCategory = ({ location }) => {
  const [categoryName, setCategoryName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    console.log('Location State:', location.state); // Check the location state object
    if (location.state && location.state.category) {
      setCategoryName(location.state.category.category_name);
    }
  }, [location.state]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Debug statements
    console.log('Category ID:', location.state.category ? location.state.category.id : 'No ID');
    console.log('Category Name:', categoryName);

    // Create form data object
    const formData = new FormData();
    formData.append('category_name', categoryName);
  
    // Determine the URL based on whether it's an edit or add operation
    const url = location.state.category ? `http://localhost/mediareact/src/php/EditCategory.php?id=${location.state.category.id}&category_name=${encodeURIComponent(categoryName)}` : 'http://localhost/mediareact/src/php/AddCategory.php';
    console.log('URL:', url); // Log the constructed URL
    const method = location.state.category ? 'PUT' : 'POST';

    // Send the Category name to the server using the appropriate request method
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
          setSuccessMessage('Category updated successfully!');
        } else {
          setErrorMessage('Error occurred while updating Category.');
        }
      })
      .catch((error) => {
        setErrorMessage('Error occurred while updating Category.');
        console.error('Error:', error);
      });
  }
  
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
                {location.state.category ? 'Edit Category' : 'Add New Category'}
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
                    name="category_name"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                  <br />
                </div>
                <div className="modal-footer">
                  <input
                    type="submit"
                    name="but_upload"
                    value={location.state.category ? 'Update' : 'Save'}
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

export default EditCategory;
