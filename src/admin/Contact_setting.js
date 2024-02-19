import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';
import Setting_sidebar from './Setting_sidebar';
import Employee from './Employee'

const Contact_setting = () => {

  
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
     //===========================================API--G================================================================
     const [Contact_Email, setContact_Email] = useState('');
     const changeContact_EmailHandler = (event) => {
       const newValue = event.target.value;
       setContact_Email(newValue); // Updating the state using the setter function from useState
   };
   const [Contact_Mobile, setContact_Mobile] = useState('');
     const changeContact_MobileHandler = (event) => {
       const newValue = event.target.value;
       setContact_Mobile(newValue); // Updating the state using the setter function from useState
   };
   const [Contact_Address, setContact_Address] = useState('');
     const changeContact_AddressHandler = (event) => {
       const newValue = event.target.value;
       setContact_Address(newValue); // Updating the state using the setter function from useState
   };
   const [Copyright_Content, setCopyright_Content] = useState('');
     const changeCopyright_ContentHandler = (event) => {
       const newValue = event.target.value;
       setCopyright_Content(newValue); // Updating the state using the setter function from useState
   };
   const save=(e)=>{
     e.preventDefault();        
     let SiteSetting={contact_email: Contact_Email,contact_mobile: Contact_Mobile,contact_address: Contact_Address,copyright_content:Copyright_Content};
     console.log('employee =>'+JSON.stringify(SiteSetting));
     Employee.setContactsettings(SiteSetting).then(res =>{
       setCopyright_Content('')
       setContact_Mobile('')
       setContact_Email('')
       setContact_Address('')
   
 
     })
     
 }
 
  return (

    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem" }}>
      <div className="container-fluid px-4"   >
        <Navbar />
        <Sidebar />
        {/* <Sample /> */}
        <h1 className="mt-4 text-white">Setting</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">Setting</li>
        </ol>
        <div className="card md-8" style={{maxWidth: '91rem',paddingLeft: '0px'}}>           
          <div className="container card-body">
          <div class="row">
          <div class="col col-lg-2">
        <Setting_sidebar />
        </div>
        <div class="col col-lg-9">
        <ul className='breadcrumb-item' style={{paddingLeft: '0px'}}>
        <form onSubmit="" method="post" className="registration-form">
        <div className="row">
        <div className="col-md-6">
        <div className="form-group">
              <label className="custom-label">
              Contact Email
                </label>
                <input type="text" placeholder="Contact Email" name="Contact Email" value={Contact_Email} onChange={changeContact_EmailHandler} />
              </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
              <label className="custom-label">
              Contact Mobile
                </label>
                <input type="text" placeholder="Contact Mobile" name="Contact Mobile" value={Contact_Mobile} onChange={changeContact_MobileHandler} />
              </div>
          </div>
          <div className="col-md-6">
        <div className="form-group">
              <label className="custom-label">
              Contact Address
              </label>
              <input type="text" placeholder="Contact Address" name="Contact Address" value={Contact_Address} onChange={changeContact_AddressHandler} />
              </div>
          </div>
        
        <div className="col-md-6">
        <div className="form-group">
              <label className="custom-label">
              Copyright Content
               </label>
               <input type="text" placeholder="Copyright Content" name="Copyright Content" value={Copyright_Content} onChange={changeCopyright_ContentHandler} />
               </div>
          </div>
          <div className="col-md-12">
          <div className="col-md-2">
          <div className="form-group">
           <input type="submit" className="btn btn-info" name="submit" value="Submit" onClick={save} />
              </div>
               </div>
          </div>
        </div>
        </form>
        </ul>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_setting;
