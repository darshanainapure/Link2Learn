import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa"; 

function Class8maths() {
  const handleSeeSyllabusClick = () => {
    window.open("https://ncert.nic.in/textbook.php?hemh1=0-13", "_blank");
  };

  const handleDownloadBookClick = () => {
    window.open("https://ncert.nic.in/textbook/textbook.htm", "_blank");
  };

  const handleQuestionPaperClick = () => {
    window.open("https://ncert.nic.in/exemplar-problems.php?ln=en&findall=1&class=8&subject=English", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open("https://youtube.com/playlist?list=PLVLoWQFkZbhUPr3lid5ATpymNOAfpk9-c&si=-e9IE5meGbZA0V3s", "_blank"); // Replace with your YouTube link
  };

  return (
    <Container>
      <h1>Class 8 Maths</h1>
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

export default Class8maths;


