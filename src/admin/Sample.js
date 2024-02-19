import React, { memo } from 'react'
import { Link } from 'react-router-dom';
const Sample =() => {
  return (
    <div >
            <ul className="navbar-nav  sidebar sidebar-dark accordion" >
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Menu </div>
      </div>
      <li className="nav-item ">
          <Link className="nav-link text-white" to="/Dashboard">
              <i className="fas fa-tachometer-alt"></i>
            <span> Dashboard</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/AddUser">
              <i className="fas fa-user"></i>
            <span> Add User</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/Profile">
              <i className="fas fa-user"></i>
            <span> Profile</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Video</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/Video">
              <i className="fas fa-video"></i>
            <span> Video</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/AddVideo">
              <i className="fas fa-upload"></i>
            <span> Add Video</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Audio</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/Audio">
              <i className="fas fa-music"></i>
            <span> Audio</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/AddAudio">
              <i className="fas fa-upload"></i>
            <span> Add Audio</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Photo</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/Photo">
              <i className="fas fa-photo-video"></i>
            <span> Photo</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/AddPhoto">
              <i className="fas fa-upload"></i>
            <span> Add Photo</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Category</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/AddCategory">
              <i className="fas fa-photo-video"></i>
            <span> Add Category</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/ViewCategory">
              <i className="fas fa-upload"></i>
            <span> ViewCategory</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Tag</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/AddTag">
              <i className="fas fa-photo-video"></i>
            <span> Add Tag</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/ViewTag">
              <i className="fas fa-upload"></i>
            <span> View Tag</span>
          </Link>
      </li>
    </ul>
        {/* <h1 className="mt-4 text-white">Manage users</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
          
          </li>
          <li className="breadcrumb-item active">Manage users</li>
        </ol> */}
        {/* <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Registered User Details
          </div>
          <div className="card-body profile-card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User Name</th>
                  <th>Mobile Number</th>
                  <th>Address</th>
                  <th>Pincode</th>
                  <th>Email</th>
                  <th>Company Name</th>
                  <th>Country</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
  )
}

export default Sample