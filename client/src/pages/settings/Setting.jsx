import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function Setting() {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/');
  }


  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit" onClick={handleClick}>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Setting;
