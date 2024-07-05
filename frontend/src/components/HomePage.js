import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from "react-bootstrap";
import CustomNavbar from "./navbar";
import CustomFooter from "./footer";
import syllabusData from "./syllabusData"; // Assuming you have this file as per the previous instruction

const HomePage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [grade, setGrade] = useState(null);
  const [subject, setSubject] = useState("");
  const [syllabus, setSyllabus] = useState("");

  useEffect(() => {
    // Fetch accepted campaigns on component mount
    axios.get('http://localhost:8080/projects')
      .then(response => {
        setCampaigns(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the campaigns!', error);
      });
  }, []);

  const handleGradeChange = (e) => {
    setGrade(parseInt(e.target.value));
    setSubject("");
    setSyllabus("");
  };

  const handleSubjectChange = (e) => {
    const selectedSubject = e.target.value;
    setSubject(selectedSubject);
    if (grade && selectedSubject) {
      setSyllabus(syllabusData[grade][selectedSubject]);
    }
  };

  return (
    <div>
      <CustomNavbar />
      <Container className="d-flex flex-column align-items-center" style={{ minHeight: '80vh' }}>
        <h1>Accepted Campaigns</h1>
        <ul>
          {campaigns.map(campaign => (
            <li key={campaign.id}>{campaign.name}</li>
          ))}
        </ul>
        
        <div className="wrapper mt-5">
          <h2>Select Grade and Subject</h2>
          <Form>
            <Form.Group controlId="formGrade">
              <Form.Label>Select Grade:</Form.Label>
              <Form.Control as="select" value={grade || ""} onChange={handleGradeChange}>
                <option value="" disabled>Select Grade</option>
                <option value={11}>11th</option>
                <option value={12}>12th</option>
                <option value={10}>10th</option>
              </Form.Control>
            </Form.Group>

            {grade && (
              <Form.Group controlId="formSubject">
                <Form.Label>Select Subject:</Form.Label>
                <Form.Control as="select" value={subject} onChange={handleSubjectChange}>
                  <option value="" disabled>Select Subject</option>
                  {Object.keys(syllabusData[grade]).map((subject) => (
                    <option key={subject} value={subject}>{subject.charAt(0).toUpperCase() + subject.slice(1)}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
          </Form>

          {syllabus && (
            <div className="mt-4">
              <h3>Syllabus:</h3>
              <p>{syllabus}</p>
            </div>
          )}
        </div>
      </Container>
      <CustomFooter />
    </div>
  );
};

export default HomePage;
