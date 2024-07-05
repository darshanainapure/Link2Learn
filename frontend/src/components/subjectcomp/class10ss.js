import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa"; 

function Class10ss() {
  const handleSeeSyllabusClick = () => {
    window.open("https://ncert.nic.in/textbook.php?hemh1=0-13", "_blank");
  };

  const handleDownloadBookClick = () => {
    window.open("https://ncert.nic.in/textbook/textbook.htm", "_blank");
  };

  return (
    <Container>
      <h1>Class 10 Social Science</h1>
      <Button 
        variant="primary" 
        onClick={handleSeeSyllabusClick} 
        style={{ marginRight: '10px' }}
      >
        See Syllabus Online
      </Button>
      <Button 
        variant="secondary" 
        onClick={handleDownloadBookClick}
        style={{ marginRight: '10px' }}
      >
        Download Book
      </Button>
    </Container>
  );
}

export default Class10ss;


