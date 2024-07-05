import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./signin.css"; // Import the CSS file

function SignInPage({ setIsAuthenticated, setUsername, setUserId }) {
  const [username, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const errors = {
    uname: "Username does not exist",
    pass: "Invalid Password",
  };

  function renderErrorMessage(name) {
    return (
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      )
    );
  }

  async function login(event) {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8888/api/v1/customer/login",
        {
          username: username,
          password: password,
        }
      );
      console.log(res.data);

      if (res.data.message === "Invalid Username") {
        setErrorMessages({ name: "uname", message: errors.uname });
      } else if (res.data.message === "Login Success") {
        toast.success("Login successful!");
        setIsAuthenticated(true); // Set authentication status
        setUsername(username); // Set the username
        //setUserId(res.data.user._id); // Set the user ID
        setTimeout(() => {
          navigate(`/`);
        }, 3000); // 3 seconds delay for the toast to be visible
      } else {
        setErrorMessages({ name: "pass", message: errors.pass });
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={login}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="username"
              required
              className="form-control"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsernameInput(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              required
              className="form-control"
              id="password"
              placeholder="*********"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {renderErrorMessage("uname")}
          {renderErrorMessage("pass")}
          <br />
          <button className="" type="submit">
            Log In
          </button>
        </form>
        <br />
        <button className="link-btn" onClick={() => navigate("/signup")}>
          Don't have an account? Register here.
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignInPage;
