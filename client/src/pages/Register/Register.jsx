import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")

    } catch (error) {
      setError(true)
      console.log(error)
    }

    // console.log(res.data);
  };

  return (
    <div className="Register">
      <span className="RegisterTitle">Register</span>
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="RegisterInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="RegisterInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="RegisterButton" type="submit">
          Register
        </button>
      </form>
      <button className="RegisterLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", fontWeight:"bold", marginTop:"3px"}} > Oops ! Somethings wents wrong !</span>}
    </div>
  );
}

export default Register;
