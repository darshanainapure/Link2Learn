import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "./class8.css"; 
import Logo from "./logo.svg"; // Replace './logo.svg' with the correct path to your logo file
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CustomFooter from "./footer";
import CustomNavbar from "./navbar";


function Class8Page() {
  return (
    <div>
      {/* <CustomNavbar/> */}

      <header className="class8-header">
        <div className="text-center">
          <h1>Welcome to Class 8!</h1>
          <p className="lead">Choose your subject:</p>
          <div className="resource-buttons">
              <div className="button-wrapper">
               <Link to="/class8science">
                  <Button  variant="primary" className="btn">Science</Button>
                </Link>
              </div>
            <div className="button-wrapper">
            <Link to="/class8socialscience">
                  <Button  variant="primary" className="btn">Social Science</Button>
                </Link>
            </div>
            <div className="button-wrapper">
              <Link to="/class8maths">
                  <Button  variant="primary" className="btn">Mathematics</Button>
              </Link>
            </div>
            <div className="button-wrapper">
                <Link to="/class8english">
                  <Button  variant="primary" className="btn">English</Button>
                </Link>
            </div>
            <div className="button-wrapper">
              <Button variant="primary" className="btn">
                Prepare for Exam
              </Button>
            </div>
          </div>
        </div>
      </header>
      <CustomFooter/>
    </div>
  );
}

export default Class8Page;
