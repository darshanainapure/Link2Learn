import React from "react";
import { Container, Card } from "react-bootstrap";
import CustomNavbar from "./navbar";
import CustomFooter from "./footer";

function PrivacyPolicyPage() {
  return (
    <div>
      {/* <CustomNavbar /> */}
        <br />
      <Container className="privacy-policy-container">
        <h1 className="text-center">Privacy Policy</h1>
        <Card className="privacy-policy-card">
          <Card.Body>
            <Card.Title>Data Collection</Card.Title>
            <Card.Text>
              At Link2Learn, we prioritize the privacy and security of our users' personal information. We only collect data that is voluntarily provided during the sign-in process. This information may include your name, email address, and any other details necessary for account creation. We do not collect any additional information without your explicit consent.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="privacy-policy-card">
          <Card.Body>
            <Card.Title>Data Usage</Card.Title>
            <Card.Text>
              We use the data collected solely for the purpose of enhancing your experience on our platform and providing you with access to our services. Your personal information is never shared with third parties without your consent. We are committed to maintaining the confidentiality and security of any data you provide to us.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="privacy-policy-card">
          <Card.Body>
            <Card.Title>Data Sharing</Card.Title>
            <Card.Text>
              We do not share your personal information with third parties. Any data collected is used exclusively for internal purposes and to improve our services. Your privacy is of utmost importance to us, and we take all necessary measures to safeguard your personal information.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>

      <CustomFooter />
    </div>
  );
}

export default PrivacyPolicyPage;
