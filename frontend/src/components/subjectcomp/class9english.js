import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa"; 

function Class9english() {
  const handleSeeSyllabusClick = () => {
    window.open("https://ncert.nic.in/textbook.php?iemo1=0-9", "_blank");
  };

  const handleDownloadBookClick = () => {
    window.open("https://ncert.nic.in/textbook/textbook.htm", "_blank");
  };

  const handleQuestionPaperClick = () => {
    window.open("https://ncert.nic.in/textbook/textbook.htm", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://www.youtube.com/", "_blank"); // Replace with your YouTube link
  };


  return (
    <Container>
      <h1>Class 9 English</h1>
      <div style={{ marginBottom: '10px' }}>
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
          variant="secondary" 
          onClick={handleQuestionPaperClick}
          style={{ marginRight: '10px' }}
        >
          Get Previous Year Paper
        </Button>
        <Button 
          variant="danger" 
          onClick={handleYoutubeClick}
          style={{ marginRight: '10px' }}
        >
          <FaYoutube style={{ marginRight: '5px' }} /> YouTube
        </Button>
      </div>
    </Container>
  );
}

export default Class9english;


