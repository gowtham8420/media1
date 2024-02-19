import React, { useState } from "react";
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import "./App.css";
import "./css/sb-admin-2.css";
import "./css/style.css";


import AddUser from "./admin/AddUser";
import Video_setting from "./admin/Video_setting";
import Email_setting from "./admin/Email_setting";
import Social_setting from "./admin/Social_setting";
import Payment_setting from "./admin/Payment_setting";
import Siteurl_setting from "./admin/Siteurl_setting";
import Other_setting from "./admin/Other_setting";
import Contact_setting from "./admin/Contact_setting";
import SEO_setting from "./admin/SEO_setting";
import Mobile_setting from "./admin/Mobile_setting";
import SubscriptionPayments from "./admin/SubscriptionPayments";
import Setting from "./admin/Setting";
import Setting_sidebar from "./admin/Setting_sidebar";
import AddCastCrew from "./admin/AddCastCrew";
import Profile from "./admin/Profile";
import Video from "./admin/Video";
import AddVideo from "./admin/AddVideo";
import Audio from "./admin/Audio";
import AddAudio from "./admin/AddAudio";
import Photo from "./admin/Photo";
import AddPhoto from "./admin/AddPhoto";
import AddCategory from "./admin/AddCategory";
import ViewCategory from "./admin/ViewCategory";
import Navbar from "./admin/navbar";
import Login from "./admin/login";
import AddTag from "./admin/AddTag";
import ViewTag from "./admin/ViewTag";
import EditComponent from "./admin/EditComponent";
import VideoHomescreen from "./user/VideoHomescreen";
import usersidebar from "./user/usersidebar";
import search from "./user/search";
import Homescreen from "./user/Homescreen";
import Userlogin from "./user/Userlogin";
import Userprofile from "./user/Userprofile";
import Signin from "./user/Signin";
import Subscription_details from "./user/Subscription_details";
import video from "./user/video";
import Playback from "./user/Playback";
import movie from "./sample/Movie";
import Home from "./user/Screens/HomeScreen";
import MoviesPage from "./user/Screens/Movies";
import WatchPage from './user/Screens/WatchPage';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (

    <div >
       {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='Admin' element={< Login />} >
            <Route path='dashboard' element={< Dashboard />} />
            <Route path='addUser' element={< AddUser/>} />
            <Route path='profile' element={< Profile />} />
            <Route path='video' element={< Video />} />
            <Route path='addVideo' element={< AddVideo />} />
            <Route path='audio' element={< Audio />} />
            <Route path='addAudio' element={< AddAudio />} />
            <Route path='photo' element={< Photo />} />
            <Route path='addPhoto' element={< AddPhoto />} />
            <Route path='addCategory' element={< AddCategory />} />
            <Route path='addCastCrew' element={< AddCastCrew />} />
            <Route path='subscriptionPayments' element={< SubscriptionPayments />} />
            <Route path='setting' element={< Setting />} />
            <Route path='Video_setting' element={< Video_setting />} />
            <Route path='Setting_sidebar' element={< Setting_sidebar />} />
            <Route path='Social_setting' element={< Social_setting />} />
            <Route path='Payment_setting' element={< Payment_setting />} />
            <Route path='Email_setting' element={< Email_setting />} />
            <Route path='Siteurl_setting' element={< Siteurl_setting />} />
            <Route path='Other_setting' element={< Other_setting />} />
            <Route path='Contact_setting' element={< Contact_setting />} />
            <Route path='SEO_setting' element={< SEO_setting />} />
            <Route path='Mobile_setting' element={< Mobile_setting />} />
            <Route path='ViewCategory' element={< ViewCategory />} />
            {/* <Route path='AddTag' element={< AddTag />} />
            <Route path='ViewTag' element={< ViewTag />} />
            <Route path='EditComponent' element={< EditComponent />} /> */}
            {/* <Route path='Navbar' element={< Navbar />} /> */}
            {/* 
            
       
            
            */}
          </Route>

        </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;
