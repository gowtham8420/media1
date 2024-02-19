import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';
import Sample from './Sample';

const SubscriptionPayments = () => {

  
    // ---------------------Admin functions -------------------------------
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const [users, setUsers] = useState([]);
  const name = sessionStorage.getItem('username');

  useEffect(() => {

    // Fetch user data from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost/mediareact/src/php/profile.php');
        setUsers(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

       fetchUsers();
        }, []);

    const handleDeleteUser = (userId) => {
    const confirmDelete = window.confirm('Do you really want to delete this user?');
    if (confirmDelete) {
      // Perform the actual deletion logic here
      console.log(`Deleting user with ID: ${userId}`);

      // Make an API call to delete the user
      fetch(`http://localhost/mediareact/src/php/delete.php?id=${userId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log('User deleted successfully');

            // Remove the deleted user from the local state
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
          } else {
            console.log('Error deleting user');
          }
        })
        .catch((error) => {
          console.log('Error deleting user:', error);
        });
    }
    };
    // ---------------------User functions -------------------------------

    const [id, setId] = useState(sessionStorage.getItem('id') || '');
    const [username, setUsername] = useState(sessionStorage.getItem('username') || '');
    const [mobnum, setMobnum] = useState(sessionStorage.getItem('mobnum') || '');
    const [address, setAddress] = useState(sessionStorage.getItem('address') || '');
    const [pincode, setPincode] = useState(sessionStorage.getItem('pincode') || '');
    const [email, setEmail] = useState(sessionStorage.getItem('email') || '');
    const [compname, setCompname] = useState(sessionStorage.getItem('compname') || '');
    const [country, setCountry] = useState(sessionStorage.getItem('country') || '');
    const [password, setPassword] = useState(sessionStorage.getItem('password') || '');

    useEffect(() => {
      // Retrieve user data from sessionStorage on component mount
      setId(sessionStorage.getItem('id') || '');
      setUsername(sessionStorage.getItem('username') || '');
      setMobnum(sessionStorage.getItem('mobnum') || '');
      setAddress(sessionStorage.getItem('address') || '');
      setPincode(sessionStorage.getItem('pincode') || '');
      setEmail(sessionStorage.getItem('email') || '');
      setCompname(sessionStorage.getItem('compname') || '');
      setCountry(sessionStorage.getItem('country') || '');
      setPassword(sessionStorage.getItem('password') || '');
    }, []);
    const handleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'username':
          setUsername(value);
          break;
        case 'mobnum':
          setMobnum(value);
          break;
        case 'address':
          setAddress(value);
          break;
        case 'pincode':
          setPincode(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'compname':
          setCompname(value);
          break;
        case 'country':
          setCountry(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Save the edited user details to sessionStorage
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('mobnum', mobnum);
      sessionStorage.setItem('address', address);
      sessionStorage.setItem('pincode', pincode);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('compname', compname);
      sessionStorage.setItem('country', country);
      sessionStorage.setItem('password', password);
  
      // API call to update user data
      try {
        const response = await axios.post('http://localhost/mediareact/src/php/update.php', {
          id: id,
          username: username,
          mobnum: mobnum,
          address: address,
          pincode: pincode,
          email: email,
          compname: compname,
          country: country,
          password: password,
        });
  
        if (response.status === 200) {
          // Data updated successfully
          console.log(response.data.message);
        } else {
          // Error occurred while updating data
          console.error('Error:', response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle the error here
      }
    };

  return (

    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem" }}>
      <div className="container-fluid px-4"   >
        <Navbar />
        <Sidebar />
        {/* <Sample /> */}
        <h1 className="mt-4 text-white">Subscriptions</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">{name=="admin"?"Subscriptions":name}{name=="admin"?"":" Details"}</li>
        </ol>
        <div className="card-1 mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Subscription User Details
          </div>
          {name == 'admin' 
          ?
            <div className="card-body profile-card-body">
              <table id="datatablesSimple">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Subscription Title</th>
                    <th>Payment ID</th>
                    <th>Payment Mode</th>
                    <th>Paid Amount</th>
                    <th>Expiry Date</th>
                    <th>Status</th>
                    <th>Password</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.mobnum}</td>
                      <td>{user.address}</td>
                      <td>{user.pincode}</td>
                      <td>{user.email}</td>
                      <td>{user.compname}</td>
                      <td>{user.country}</td>
                      <td>{user.password}</td>
                      <td>
                        <Link
                          to={{
                            pathname: `/EditComponent`,
                            state: { user },
                          }}
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <button onClick={() => handleDeleteUser(user.id)}>
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> 
          : 
          <div className="card-body">
          <form onSubmit={handleSubmit} method='POST'>
            <div className="user-details">
              <label>User ID:</label>
              <span>{id}</span>
            </div>
            <div className="user-details">
              <label>Username:</label>
              <input type="text" name="username" value={username} onChange={handleChange} />
            </div>
            <div className="user-details">
              <label>Mobile Number:</label>
              <input type="text" name="mobnum" value={mobnum} onChange={handleChange} />
            </div>
            <div className="user-details">
              <label>Address:</label>
              <input type="text" name="address" value={address} onChange={handleChange} />
            </div>
            <div className="user-details">
              <label>Pincode:</label>
              <input type="text" name="pincode" value={pincode} onChange={handleChange} />
            </div>
            <div className="user-details">
              <label>Email:</label>
              <input type="text" name="email" value={email} onChange={handleChange} />
            </div>
            <div className="user-details">
              <label>Company Name:</label>
              <input type="text" name="compname" value={compname} onChange={handleChange} />
            </div>
            <div className="user-details">
              <label>Country:</label>
              <input type="text" name="country" value={country} onChange={handleChange} />
            </div>
            <div className="user-details">
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-info">Save Changes</button>
          </form>
        </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPayments;
