import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation,useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [samp1, setsamp] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/admin') {
      setsamp(0);
    } else {
      setsamp(1);
    }
  }, [location.pathname]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const hide = () => {
    setsamp(1);
  };
  const Submit =(e)=>{
    e.preventDefault();
    if(user.username=='admin' && user.password=='admin'){
      // navigate('Dashboard'); 
      navigate('/admin/Dashboard', { state: { username: user.username, password: user.password } });
    }

  }
  return (
    <>
      {samp1 === 0 ? (
        <div className="contain">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="bg-image" style={{ backgroundImage: "url('img/bg.jpg')" }}>
                  <div className="card-header">
                    <h3 className="text-center text-black font-weight-light my-4">Admin Login </h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={Submit}>
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
                        <button className="btn btn-primary" type="submit" style={{ color: "black" }}>Login</button>
                      </div>
                      <div className="small text-center">
                        <Link to="Dashboard" onClick={hide}>Back to Home</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Outlet />
    </>
  );
};

export default Login;
