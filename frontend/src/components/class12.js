import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import "./class12.css"; // Import styles from class11.css
import Logo from "./logo.svg"; // Replace './logo.svg' with the correct path to your logo file
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CustomFooter from "./footer";
import CustomNavbar from "./navbar";

function Class12Page() {
  return (
    <div>
      {/* <CustomNavbar/> */}

      <header className="class11-header">
        <div className="text-center">
          <h1>Welcome to Class 10!</h1>
          <p className="lead">Choose your subject:</p>
          <div className="resource-buttons">
            <div className="button-wrapper">
            <Link to="/syllabusData?class=12&subject=Physics">
                  <Button  variant="primary" className="btn">Physics</Button>
                </Link>
              </div>
            <div className="button-wrapper">
            <Link to="/syllabusData?class=12&subject=Chemistry">
                  <Button  variant="primary" className="btn">Chemistry</Button>
                </Link>
            </div>
            <div className="button-wrapper">
              <Link to="/syllabusData?class=12&subject=Mathematics">
                  <Button  variant="primary" className="btn">Mathematics</Button>
              </Link>
            </div>
            <div className="button-wrapper">
                <Link to="/syllabusData?class=12&subject=Biology">
                  <Button  variant="primary" className="btn">Biology</Button>
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

export default Class12Page;
