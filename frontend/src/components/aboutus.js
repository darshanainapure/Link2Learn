import React from "react";
import { Container, Button, Nav, Navbar, Card } from "react-bootstrap";
import "./aboutus.css"; // Import styles from aboutUs.css
import Logo from "./logo.svg"; // Replace './logo.svg' with the correct path to your logo file
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CustomFooter from "./footer";
import CustomNavbar from "./navbar";

function AboutUsPage() {
  return (
    <div>
      {/* <CustomNavbar/> */}

      <Container className="about-us-container">
        <h1 className="text-center">About Us</h1>
        <p className="lead text-center">
          Empowering learners through quality education
        </p>
        <Card className="about-us-card">
          <Card.Body>
            <Card.Title>Our Mission</Card.Title>
            <Card.Text>
              At Link2Learn, we are passionate about revolutionizing education
              accessibility. Our mission is to support Sustainable Development
              Goal 4 (SDG 4) by ensuring quality education for all.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="about-us-card">
          <Card.Body>
            <Card.Title>Our Approach</Card.Title>
            <Card.Text>
              We believe in connecting learners with high-quality resources and
              educators from around the world. Through our innovative platform,
              we strive to make learning engaging, accessible, and inclusive.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="about-us-card">
          <Card.Body>
            <Card.Title>Join Us</Card.Title>
            <Card.Text>
              Join us on our journey to empower students and connect
              communities through the power of learning. Together, let's build
              a brighter future where every individual has the opportunity to
              thrive.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <CustomFooter/>
    </div>
  );
}

export default AboutUsPage;
