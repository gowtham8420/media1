import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import UserDetails from './UserDetails';

const UserList = () => {
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    const fetchUsernames = async () => {
      try {
        const response = await fetch('http://localhost/mediareact/src/php/folders.php');
        const data = await response.json();
        setUsernames(data.data.usernames);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsernames();
  }, []);

  return (
    
  // <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
        <div className="folder-container">
      <h2 className="text-white">Users:</h2>
      <ul className="folder-list">
        {usernames.map((username, index) => (
          <li className="folder-item" key={index}>
            <Link to={`/UserDetails/${username}`} className="folder-link">
              <div className="folder">
                <i className="fas fa-folder folder-icon"></i>
                <span className="text-white">{username}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Route path="/UserDetails/:username" component={UserDetails} /> */}
    </div>
    // </div>
  );
};

export default UserList;
