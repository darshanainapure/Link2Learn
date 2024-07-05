import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UserProfilePage.css"; // Add a CSS file for styling

function UserProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { username} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/signin");
    } else {
      setLoading(true);
      axios
       .get(`http://localhost:8888/api/v1/customer/profile/${username}`)
       .then((response) => {
          console.log("API Response:", response.data);
          setProfile(response.data);
          setLoading(false);
        })
       .catch((error) => {
          console.error("Error fetching user profile:", error);
          setLoading(false);
        });
    }
  }, [username, navigate]);

  if (loading) {
    return (
      <div className="prof-loader">
        <h2>Loading... userprofile for user {username}</h2>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="prof-no-profile">
        <h2>No profile found for user {username}</h2>
      </div>
    );
  }

  return (
    <div className="prof-container">
      <nav className="prof-navbar">
        <a className="prof-brand" href="#">
          Dashboard
        </a>
        <button
          className="prof-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="prof-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="prof-nav">
            <li className="prof-nav-item active">
              <a className="prof-nav-link" href="#">
                Profile <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>
      </nav>

      <div className="prof-profile">
        <h2>User Profile</h2>
        <div className="prof-profile-details">
          <div className="prof-row">
            <div className="prof-col-md-6">
              <p>
                <strong>Username:</strong> {profile.username}
              </p>
              <p>
                <strong>First Name:</strong> {profile.firstName}
              </p>
            </div>
            <div className="prof-col-md-6">
              <p>
                <strong>Last Name:</strong> {profile.lastName}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
            </div>
          </div>
          <div className="prof-row">
            <div className="prof-col-md-12">
              <p>
                <strong>Phone Number:</strong> {profile.phone}
              </p>
            </div>
          </div>
          {/* Add more profile fields as necessary */}
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;