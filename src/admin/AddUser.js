import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import '../App.css';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const AddUser = () => {
  // const history = useHistory();
  const [data, setData] = useState({
    username: '',
    mobnum: '',
    address: '',
    pincode: '',
    email: '',
    compname: '',
    country: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate username
    if (!data.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    // Validate mobile number
    if (!data.mobnum.trim()) {
      newErrors.mobnum = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(data.mobnum)) {
      newErrors.mobnum = 'Invalid mobile number';
      isValid = false;
    }

    // Validate address
    if (!data.address.trim()) {
      newErrors.address = 'Address is required';
      isValid = false;
    }

    // Validate pincode
    if (!data.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
      isValid = false;
    } else if (!/^\d{6}$/.test(data.pincode)) {
      newErrors.pincode = 'Invalid pincode';
      isValid = false;
    }

    // Validate email
    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate company name
    if (!data.compname.trim()) {
      newErrors.compname = 'Company name is required';
      isValid = false;
    }

    // Validate country
    if (!data.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    // Validate password
    if (!data.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (!data.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const sendData = {
          username: data.username,
          mobnum: data.mobnum,
          address: data.address,
          pincode: data.pincode,
          email: data.email,
          compname: data.compname,
          country: data.country,
          password: data.password
        };

        console.log('Sending data:', sendData);

        const response = await axios.post(
          'http://localhost/mediareact/src/php/insert.php',
          sendData
        );

        console.log('API Response:', response);

        if (response.status === 200) {
          // history.push('/Dashboard');Z
        } else {
          console.log('Invalid User');
        }
      } catch (error) {
        console.error('Error:', error);
        console.log('An error occurred while registering. Please try again.');
      }
    }
  };

  
  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">Add User</h1>
          <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
          </li>
            <li className="breadcrumb-item active">Add User</li>
          </ol>
      <div className="row">
        <div className="col-md-12 text-white text-center" id="ta">
          <h1>Register</h1>
        </div>
      </div>
      <form onSubmit={submitForm} method="post" className="registration-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="custom-label">
                Username
                {errors.username && <span className="error-icon">!</span>}
              </label>
              <input
                type="text"
                name="username"
                className={`form-control ${errors.username ? 'error' : ''}`}
                onChange={handleChange}
                value={data.username}
              />
              {errors.username && <div className="error-message error">{errors.username}</div>}
            </div>
            <div className="form-group">
              <label className="custom-label">
                Mobile Number
                {errors.mobnum && <span className="error-icon">!</span>}
              </label>
              <input
                type="text"
                name="mobnum"
                className={`form-control ${errors.mobnum ? 'error' : ''}`}
                onChange={handleChange}
                value={data.mobnum}
              />
              {errors.mobnum && <div className="error-message error">{errors.mobnum}</div>}
            </div>
            <div className="form-group">
              <label className="custom-label">
                Pincode
                {errors.pincode && <span className="error-icon">!</span>}
              </label>
              <input
                type="text"
                name="pincode"
                className={`form-control ${errors.pincode ? 'error' : ''}`}
                onChange={handleChange}
                value={data.pincode}
              />
              {errors.pincode && <div className="error-message error">{errors.pincode}</div>}
            </div>
            <div className="form-group">
              <label className="custom-label">
                Password
                {errors.password && <span className="error-icon">!</span>}
              </label>
              <input
                type="password"
                name="password"
                className={`form-control ${errors.password ? 'error' : ''}`}
                onChange={handleChange}
                value={data.password}
              />
              {errors.password && <div className="error-message error">{errors.password}</div>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="custom-label">
                Email
                {errors.email && <span className="error-icon">!</span>}
              </label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'error' : ''}`}
                onChange={handleChange}
                value={data.email}
              />
              {errors.email && <div className="error-message error">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label className="custom-label">
                Company Name
                {errors.compname && <span className="error-icon">!</span>}
              </label>
              <input
                type="text"
                name="compname"
                className={`form-control ${errors.compname ? 'error' : ''}`}
                onChange={handleChange}
                value={data.compname}
              />
              {errors.compname && <div className="error-message error">{errors.compname}</div>}
            </div>
            <div className="form-group">
              <label className="custom-label">
                Country
                {errors.country && <span className="error-icon">!</span>}
              </label>
              <input
                type="text"
                name="country"
                className={`form-control ${errors.country ? 'error' : ''}`}
                onChange={handleChange}
                value={data.country}
              />
              {errors.country && <div className="error-message error">{errors.country}</div>}
            </div>
            <div className="form-group">
              <label className="custom-label">
                Confirm Password
                {errors.confirmPassword && <span className="error-icon">!</span>}
              </label>
              <input
                type="password"
                name="confirmPassword"
                className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                onChange={handleChange}
                value={data.confirmPassword}
              />
              {errors.confirmPassword && <div className="error-message error">{errors.confirmPassword}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label className="custom-label">
                Address
                {errors.address && <span className="error-icon">!</span>}
              </label>
              <textarea
                name="address"
                className={`form-control ${errors.address ? 'error' : ''}`}
                onChange={handleChange}
                value={data.address}
                rows={4}
              />
              {errors.address && <div className="error-message error">{errors.address}</div>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <input type="submit" className="btn btn-info" name="submit" value="Register" />
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddUser;
