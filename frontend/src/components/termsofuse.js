import React from "react";
import { Container, Card } from "react-bootstrap";
import CustomNavbar from "./navbar";
import CustomFooter from "./footer";

function TermsOfUsePage() {
  return (
    <div>
      {/* <CustomNavbar /> */}
        <br /><br />
      <Container className="terms-of-use-container">
        <h1 className="text-center">Terms of Use</h1>
        <Card className="terms-of-use-card">
          <Card.Body>
            <Card.Title>Ownership of Content</Card.Title>
            <Card.Text>
              Link2Learn does not host any educational materials on its platform. Therefore, we do not claim ownership of any content made available through our website. All materials provided here are either user-generated or sourced from third-party websites. We respect the intellectual property rights of content creators and strive to ensure compliance with copyright laws.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="terms-of-use-card">
          <Card.Body>
            <Card.Title>Compliance with Copyrights</Card.Title>
            <Card.Text>
              Users of Link2Learn are responsible for ensuring that any material they upload or share on the platform complies with applicable copyright laws. We do not endorse or condone any unauthorized use of copyrighted materials. If you believe that your intellectual property rights have been infringed upon, please contact us immediately, and we will take appropriate action.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="terms-of-use-card">
          <Card.Body>
            <Card.Title>Use of Provided Materials</Card.Title>
            <Card.Text>
              By accessing and using Link2Learn, you agree to utilize the educational materials available on our platform for personal, non-commercial purposes only. Users are prohibited from reproducing, distributing, or modifying any content without obtaining proper authorization from the respective owners. Link2Learn reserves the right to remove any infringing content and suspend or terminate accounts of users who violate our terms of use.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <CustomFooter />
    </div>
  );
}

export default TermsOfUsePage;
