import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

export default function Log() {
    const history = useHistory();
  const [user, setUser] = useState({ username: '', password: '' });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    // After successful login, redirect to dashboard
    history.push('/Dashboard');
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const sendData = {
        username: user.username,
        password: user.password
      };
      const adminresponse = await axios.post('http://localhost/mediareact/src/php/login.php', sendData);
    //   console.log(adminresponse); // Add this line to inspect the response object

      const userresponse = await axios.post('http://localhost/mediareact/src/php/userlogin.php', sendData);
    //   console.log(userresponse);
      
      if (adminresponse.data.data.status === 200  ) {
        // handleLogin();
        history.push('/Dashboard');
      } 
       else if (userresponse.data.status === 'success' ) {
        // alert('Invalid User');
        sessionStorage.setItem('id', userresponse.data.id);
        sessionStorage.setItem('username', userresponse.data.username);
        sessionStorage.setItem('mobnum', userresponse.data.mobnum); // Store mobile number
        // Store other values in the sessionStorage
        sessionStorage.setItem('address', userresponse.data.address);
        sessionStorage.setItem('pincode', userresponse.data.pincode);
        sessionStorage.setItem('email', userresponse.data.email);
        sessionStorage.setItem('compname', userresponse.data.compname);
        sessionStorage.setItem('country', userresponse.data.country);
        sessionStorage.setItem('password', userresponse.data.password);
        history.push('/UserDashboard');
      }
      else {
        alert('adminresponse');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in. Please try again.');
    }
  };
  return (
    // <div class="container bg-gradient-primary" style={{width: '100rem'}}>

    //     {/* <!-- Outer Row --> */}
    //     <div class="row justify-content-center">

    //         <div class="col-xl-6 col-lg-6 col-md-7">

    //             <div class="card o-hidden border-0 shadow-lg my-5">
    //                 {/* <!-- <div class="card-body p-0"> -->
    //                     <!-- Nested Row within Card Body --> */}
    //                     <div class="row" >
    //                         {/* <!-- <div class="col-lg-6 d-none d-lg-block bg-login-image"></div> --> */}
    //                         <div class="col-lg-6">
    //                             <div class="p-5">
    //                                 <div class="text-center">
    //                                     <h1 class="h4 text-gray-900 mb-4">ADMIN</h1>
    //                                 </div>
    //                                 <form class="user">
    //                                     <div class="form-group">
    //                                         <input type="email" class="form-control form-control-user"
    //                                             id="exampleInputEmail" aria-describedby="emailHelp"
    //                                             placeholder="Username"/>
    //                                     </div>
    //                                     <div class="form-group">
    //                                         <input type="password" class="form-control form-control-user"
    //                                             id="exampleInputPassword" placeholder="Password"/>
    //                                     </div>
    //                                     {/* <!-- <div class="form-group">
    //                                         <div class="custom-control custom-checkbox small">
    //                                             <input type="checkbox" class="custom-control-input" id="customCheck">
    //                                             <label class="custom-control-label" for="customCheck">Remember
    //                                                 Me</label>
    //                                         </div> --> */}
    //                                     {/* <!-- </div> -->
    //                                     <a href="index.html" class="btn btn-primary btn-user btn-block">
    //                                         Login
    //                                     </a>
    //                                     <!-- <hr> */}
    //                                     {/* <a href="index.html" class="btn btn-google btn-user btn-block">
    //                                         <i class="fab fa-google fa-fw"></i> Login with Google
    //                                     </a>
    //                                     <a href="index.html" class="btn btn-facebook btn-user btn-block">
    //                                         <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
    //                                     </a> --> */}
    //                                 </form>
    //                                 <hr/>
    //                                 <div class="text-center">
    //                                     <a class="small" href="forgot-password.html">Forgot Password?</a>
    //                                 </div>
    //                                 <div class="text-center">
    //                                     <a class="small" href="register.html">Back To Home</a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 {/* <!-- </div> --> */}
    //             </div>

    //         </div>

    //     </div>

    // </div>
    <div className="contain">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="bg-image" style={{ backgroundImage: "url('img/bg.jpg')" }}>
              <div className="card-header">
                <h3 className="text-center text-black font-weight-light my-4">Admin sample Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={submitForm}>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      name="username"
                      type="text"
                      placeholder="Username"
                      value={user.username}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="inputUsername">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a className="small" href="password-recovery.php">
                      Forgot Password?
                    </a>
                    <button className="btn btn-primary" type="submit">Login</button>
                  </div>
                  <div className="small text-center">
                    <Link to="/">Back to Home</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  )
}
