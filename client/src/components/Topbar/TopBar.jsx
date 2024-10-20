import React, { useState } from "react";
import "./topbar.css";
import {Link, useNavigate } from "react-router-dom";
function TopBar() {
  const user = true;
  // const navigate=NavLink();
  const navigate=useNavigate();
  const [toggle,setToggle]=useState(false);

  const handleClick=()=>{
    // navigate('/')
    if(!toggle){
      navigate('/settings')
      setToggle(true);
    }
    else{
      navigate('/');
      setToggle(false)
    }
   

  }
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook"></i>
        <i className=" topIcon fa-brands fa-twitter"></i>
        <i className=" topIcon fa-brands fa-instagram"></i>
        <i className=" topIcon fa-brands fa-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img onClick={handleClick} style={{cursor:"pointer"}}
            src="https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="topImg"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
            <Link className="link" to="/login">
              LOGIN
            </Link>
            </li>
            <li className="topListItem">
           
            <Link className="link" to="/register">
              REGISTER
            </Link>
            </li>
          </ul>
        )}

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
