import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';
import Setting_sidebar from './Setting_sidebar';
import Employee from './Employee'

const Payment_setting = () => {


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
  const [Paypal_Id, setPaypal_Id] = useState('');
  const changePaypal_IdHandler = (event) => {
    const newValue = event.target.value;
    setPaypal_Id(newValue); // Updating the state using the setter function from useState
  };
  const [Paypal_Secret, setPaypal_Secret] = useState('');
  const changePaypal_SecretHandler = (event) => {
    const newValue = event.target.value;
    setPaypal_Secret(newValue); // Updating the state using the setter function from useState
  };
  const [Stripe_Publishable_Key, setStripe_Publishable_Key] = useState('');
  const changeStripe_Publishable_KeyHandler = (event) => {
    const newValue = event.target.value;
    setStripe_Publishable_Key(newValue); // Updating the state using the setter function from useState
  };
  const [Stripe_Secret_Key, setStripe_Secret_Key] = useState('');
  const changeStripe_Secret_KeyHandler = (event) => {
    const newValue = event.target.value;
    setStripe_Secret_Key(newValue); // Updating the state using the setter function from useState
  };
  const [Razorpay_Key, setRazorpay_Key] = useState('');
  const changeRazorpay_KeyHandler = (event) => {
    const newValue = event.target.value;
    setRazorpay_Key(newValue); // Updating the state using the setter function from useState
  };
  const [Razorpay_Secret_Key, setRazorpay_Secret_Key] = useState('');
  const changeRazorpay_Secret_KeyHandler = (event) => {
    const newValue = event.target.value;
    setRazorpay_Secret_Key(newValue); // Updating the state using the setter function from useState
  };
  const [Paystack_Key, setPaystack_Key] = useState('');
    const changePaystack_KeyHandler = (event) => {
      const newValue = event.target.value;
      setPaystack_Key(newValue); // Updating the state using the setter function from useState
  };
  const [Paystack_Secret_Key, setPaystack_Secret_Key] = useState('');
    const changePaystack_Secret_KeyHandler = (event) => {
      const newValue = event.target.value;
      setPaystack_Secret_Key(newValue); // Updating the state using the setter function from useState
  };
  const save = (e) => {
    e.preventDefault();
    let SiteSetting = { paypal_id: Paypal_Id, paypal_secret: Paypal_Secret,stripe_publishable_key: Stripe_Publishable_Key, stripe_secret_key: Stripe_Secret_Key,razorpay_key: Razorpay_Key, razorpay_secret_key: Razorpay_Secret_Key,paystack_key: Paystack_Key, paystack_secret_key: Paystack_Secret_Key  };
    console.log("'employee =>'+JSON.stringify(SiteSetting)");
    Employee.setPaymentsettings(SiteSetting).then(res => {
      setPaypal_Id('');
      setPaypal_Secret('');
      setStripe_Publishable_Key('');
      setStripe_Secret_Key('');
      setRazorpay_Key('');
      setRazorpay_Secret_Key('');
      setPaystack_Key('');
      setPaystack_Secret_Key('');
    })
  }

  return (

    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem", height: '55rem' }}>
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
        <div className="card md-8" style={{ maxWidth: '120rem', paddingLeft: '0px', height: '48rem' }}>
          <div className="container card-body" style={{ marginTop: '10px' }}>
            <div class="row">
              <div class="col col-lg-2">
                <Setting_sidebar />
              </div>
              <div class="col col-lg-9">
                <ul className='breadcrumb-item' style={{ paddingLeft: '0px' }}>
                  <form onSubmit="" method="post" className="registration-form" style={{ height: '44rem' }}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="custom-label">
                            PayPal Settings
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Paypal Id
                          </label>
                          <input type="text" placeholder="Paypal Id" name="Paypal Id" value={Paypal_Id} onChange={changePaypal_IdHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Paypal Secret
                          </label>
                          <input type="text" placeholder="Paypal Secret" name="Paypal Secret" value={Paypal_Secret} onChange={changePaypal_SecretHandler} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="custom-label">
                            Stripe Settings
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Stripe Publishable Key
                          </label>
                          <input type="text" placeholder="Stripe Publishable Key" name="Stripe Publishable Key" value={Stripe_Publishable_Key} onChange={changeStripe_Publishable_KeyHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Stripe Secret Key
                          </label>
                          <input type="text" placeholder="Stripe Secret Key" name="Stripe Secret Key" value={Stripe_Secret_Key} onChange={changeStripe_Secret_KeyHandler} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="custom-label">
                            Razorpay Settings
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Razorpay Key
                          </label>
                          <input type="text" placeholder="Razorpay Key" name="Razorpay Key" value={Razorpay_Key} onChange={changeRazorpay_KeyHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Razorpay Secret Key
                          </label>
                          <input type="text" placeholder="Razorpay Secret Key" name="Razorpay Secret Key" value={Razorpay_Secret_Key} onChange={changeRazorpay_Secret_KeyHandler} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="custom-label">
                            Paystack Settings
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Paystack Key
                          </label>
                          <input type="text" placeholder="Paystack Key" name="Paystack Key" value={Paystack_Key} onChange={changePaystack_KeyHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Paystack Secret Key
                           </label>
                           <input type="text" placeholder="Paystack Secret Key" name="Paystack Secret Key" value={Paystack_Secret_Key} onChange={changePaystack_Secret_KeyHandler} />
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

export default Payment_setting;
