import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa"; 

function Class10maths() {
  const handleSeeSyllabusClick = () => {
    window.open("https://ncert.nic.in/textbook.php?hemh1=0-13", "_blank");
  };

  const handleDownloadBookClick = () => {
    window.open("https://ncert.nic.in/textbook/textbook.htm", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/", "_blank"); // Replace with your YouTube link
  };
  return (
    <Container>
      <h1>Class 10 Maths</h1>
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
      <Button 
          variant="danger" 
          onClick={handleYoutubeClick}
          style={{ marginRight: '10px' }}
        >
          <FaYoutube style={{ marginRight: '5px' }} /> YouTube
        </Button>
    </Container>
  );
}

export default Class10maths;


