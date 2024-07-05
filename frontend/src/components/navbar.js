import React from 'react';
import Logo from "./logo.svg"; // Replace './logo.svg' with the correct path to your logo file
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CustomNavbar({ isAuthenticated, onSignOut, username, toggleDarkMode, darkMode }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut();
    navigate('/signin');
  };

  const handleFeedback = () => {
    navigate('/feedback');
  };

  const handleProfileClick = () => {
    navigate(`/profile/${username}`);
  };

  return (
    <Navbar expand="lg" variant="dark" className={darkMode ? "bg-dark" : "bg-primary"}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={`text-${darkMode ? "light" : "light"} pe-3`}>
          <img
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top me-2"
            alt="Company Logo"
          />
          <div className="d-inline-block">
            <span className="fw-bold">Link2Learn</span>
            <div className="fs-6 text-light">Connecting Resources to Students</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={`text-${darkMode ? "light" : "light"}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus" className={`text-${darkMode ? "light" : "light"}`}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/privacy" className={`text-${darkMode ? "light" : "light"}`}>
              Privacy Policy
            </Nav.Link>
            <Nav.Link as={Link} to="/terms" className={`text-${darkMode ? "light" : "light"}`}>
              Terms of Use
            </Nav.Link>
            {isAuthenticated && (
              <Nav.Link as={Link} to="/quiz" className={`text-${darkMode ? "light" : "light"}`}>
                Quiz
              </Nav.Link>
            )}
            
          </Nav>
          <Nav>
            <Nav.Link onClick={toggleDarkMode} className={`text-${darkMode ? "light" : "light"}`}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Nav.Link>
            {isAuthenticated ? (
              <NavDropdown title={username} id="basic-nav-dropdown" className={`text-${darkMode ? "light" : "light"}`}>
                <NavDropdown.Item onClick={handleProfileClick}>User Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
                <NavDropdown.Item onClick={handleFeedback}>Feedback</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/signin" className={`text-${darkMode ? "light" : "light"}`}>
                Sign In
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
