// src/components/Chatbot.jsx

import React from 'react';
import logo from './logo-chat.jpg'; // Adjust the path as necessary

const Chatbot = () => {
  // Function to handle chat interactions
  const handleChatInteraction = () => {
    // Logic to handle chat interactions
    console.log('Chat interaction initiated');
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}>
      {/* Round container for the logo */}
      <div style={{ borderRadius: '50%', width: '60px', height: '60px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', backgroundColor: '#fff', cursor: 'pointer' }}>
        {/* Logo image */}
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      
      {/* Optional: Add a tooltip or label */}
      <span style={{ display: 'block', textAlign: 'center', marginTop: '5px', fontSize: '14px' }}>Chatbot</span>
      
      {/* Button or icon for opening the chat */}
      <button onClick={handleChatInteraction} style={{ display: 'block', width: '60px', textAlign: 'center', marginTop: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', borderRadius: '5px', padding: '8px 0', fontSize: '14px' }}>Open</button>
    </div>
  );
};

export default Chatbot;
