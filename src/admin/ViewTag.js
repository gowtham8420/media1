import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import '../App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import AddTag from './AddTag';
import { Link } from 'react-router-dom';

const ViewTag = () => {
     //.......................................Admin functiuons.....................................
     const name=sessionStorage.getItem('username');
  // const history = useHistory();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend
    fetch('http://localhost/mediareact/src/php/GetTags.php')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleDeleteUser = (userId) => {
    setShowConfirmation(true);
    setUserIdToDelete(userId);
  };

  const handleEditUser = (userId) => {
    // Redirect to the add tag page with the user ID as a query parameter
    const selectedTag = users.find(user => user.id === userId);
    // history.push({
    //   pathname: '/EditTag',
    //   state: { tag: selectedTag }
    // });
  };

  const confirmDeleteUser = () => {
    // Perform the actual deletion logic here
    console.log(`Deleting user with ID: ${userIdToDelete}`);
  
    fetch(`http://localhost/mediareact/src/php/DeleteTag.php?id=${userIdToDelete}`, {
      method: 'DELETE',
    })
      .then(response => response.text())  // Retrieve response body as text
      .then(data => {
        console.log(data);  // Display the response body
        // Rest of your code...
      })
      .catch(error => console.log(error));
    };    
    
     //.......................................User functiuons.....................................
     const userid =sessionStorage.getItem('id');
    //  const history_u = useHistory();
     const [tagIdToDelete_u, setTagIdToDelete_u] = useState('');
     const [tags_u, setTags_u] = useState([]);
   
     useEffect(() => {
       // Fetch tag data from the backend
       fetch('http://localhost/mediareact/src/php/GetTags.php')
         .then(response => response.json())
         .then(data => setTags_u(data))
         .catch(error => console.log(error));
     }, []);
   
     const handleDeleteTag_u = (tagId) => {
       const confirmed = window.confirm('Do you really want to delete this tag?');
       if (confirmed) {
         setTagIdToDelete_u(tagId);
         confirmDeleteTag_u();
       }
     };
   
     const handleEditTag_u = (tagId) => {
       // Redirect to the edit tag page with the tag ID as a query parameter
       const selectedTag = tags_u.find(tag => tag.id === tagId);
      //  history_u.push({
      //    pathname: '/EditTag',
      //    state: { tag: selectedTag }
      //  });
     };
   
     const confirmDeleteTag_u = () => {
       // Send an AJAX request to delete the tag
       fetch(`http://localhost/mediareact/src/php/DeleteTag.php?id=${tagIdToDelete_u}`, {
         method: 'DELETE',
       })
         .then(response => response.text())
         .then(data => {
           console.log(data);
           // Remove the deleted tag from the local state
           setTags_u(prevTags => prevTags.filter(tag => tag.id !== tagIdToDelete_u));
         })
         .catch(error => console.log(error));
     };

  return (
      
  <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
        <div className="container-fluid px-4">
          <Navbar />
          <Sidebar />
          <h1 className="mt-4 text-white">View Tags</h1>
          <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
          </li>
            <li className="breadcrumb-item active">View Tags</li>
          </ol>
          {name=="admin"?
          <div className="card mb-4">
            <div className="card-header">
              <i className="fas fa-table me-1"></i>
              Tags
            </div>
            <div className="card-body">
              <table id="datatablesSimple">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Tags</th>
                  </tr>
                </thead>
  
                <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.tag_name}</td>
                    <td>
                      <button>
                        <Link
                          to={{
                            pathname: '/EditTag',
                            state: { tag: user },
                          }}
                        >
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </Link>
                      </button>
                      <button onClick={() => handleDeleteUser(user.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>            </table>
              </div>
              </div>
              :
              <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Tags-u
          </div>
          <div className="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {tags_u.map((tag, index) => (
                  <tr key={tag.id}>
                    <td>{index + 1}</td>
                    <td>{tag.tag_name}</td>
                    <td>
                      <button>
                        <Link
                          to={{
                            pathname: '/EditTag',
                            state: { tag },
                          }}
                        >
                          <i className="fa fa-edit" aria-hidden="true"></i>
                        </Link>
                      </button>
                      <button onClick={() => handleDeleteTag_u(tag.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
            }
              {/* Confirmation dialog */}
        {showConfirmation && (
          <div className="confirmation-dialog">
            <div className="confirmation-content">
              <h3>Confirmation</h3>
              <p>Do you really want to delete this user?</p>
              <div className="confirmation-buttons">
                <button onClick={confirmDeleteUser}>Yes</button>
                <button onClick={() => setShowConfirmation(false)}>No</button>
              </div>
            </div>
          </div>
        )}
        </div>

      </div>
    );
  };

export default ViewTag;
