import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';


const Setting = () => {

  
    // ---------------------Admin functions -------------------------------
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const [users, setUsers] = useState([]);
  const name = sessionStorage.getItem('username');
  let site=1;
  const video=0;
  const social=0;
  const payment=0;
  const Email=0;
  const Siteurl=0;
  const mobile=0;
  const SEO=0;
  const Contact=0;
  const Other=0;
 
  let sitee = () => {
    site=0;
  };

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

    <ul className='breadcrumb-item' style={{paddingLeft: '0px',backgroundColor:'beige'}}>
    {/* <li className="breadcrumb-item" > */}
  <Link className="nav-link text-info" to="/admin/Setting" style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span> Site Settings</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/Video_Setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span>Video Settings</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/Social_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span>Social Settings</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/Payment_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span>Payment Settings</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/Email_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span>Email Settings</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/Siteurl_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span>Company Site Url's</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/Mobile_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span> Mobile Settings</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/SEO_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span> SEO Settings</span>
  </Link>
  <Link className="nav-link text-info" to="/admin/Contact_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span> Contact Settings</span>
  </Link><Link className="nav-link text-info" to="/admin/Other_setting"  style={{paddingLeft: '8px'}}>
      {/* <i className="fas fa-tachometer-alt"></i> */}
    <span> Other Settings</span>
  </Link>

    </ul>
  );
};

export default Setting;
