import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/home";
import Class8Page from "./components/class8";
import Class9Page from "./components/class9";
import Class10Page from "./components/class10";
import AboutUsPage from "./components/aboutus";
import PrivacyPolicyPage from "./components/privacy";
import TermsOfUsePage from "./components/termsofuse";
import SignInPage from "./components/signin";
import SignUpPage from "./components/signup";
import CustomNavbar from "./components/navbar";
import Class8english from "./components/subjectcomp/class8english";
import Class8science from "./components/subjectcomp/class8science";
import Class8maths from "./components/subjectcomp/class8maths";
import Class8ss from "./components/subjectcomp/class8ss";
import Class9english from "./components/subjectcomp/class9english";
import Class9science from "./components/subjectcomp/class9science";
import Class9maths from "./components/subjectcomp/class9maths";
import Class9ss from "./components/subjectcomp/class9ss";
import Class10english from "./components/subjectcomp/class10english";
import Class10science from "./components/subjectcomp/class10science";
import Class10maths from "./components/subjectcomp/class10maths";
import Class10ss from "./components/subjectcomp/class10ss";
import UserProfilePage from "./components/userprofile"; // Import the UserProfilePage
import Feedback from "./components/feedback";
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';
import Logo from "./components/logo"
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";
import QuestionForm from "./components/QuestionForm";
import Result from "./components/Result";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUsername("");
    setUserId("");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <CustomNavbar 
          isAuthenticated={isAuthenticated} 
          onSignOut={handleSignOut} 
          username={username} 
          userId={userId} 
          toggleDarkMode={toggleDarkMode} 
          darkMode={darkMode} 
        />
        <Routes>
          <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
          <Route path="/class8" element={<Class8Page />} />
          <Route path="/class9" element={<Class9Page />} />
          <Route path="/class10" element={<Class10Page />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfUsePage />} />
          <Route 
            path="/signin" 
            element={
              <SignInPage 
                setIsAuthenticated={setIsAuthenticated} 
                setUsername={setUsername} 
                setUserId={setUserId} 
              />
            } 
          />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/class8english" element={<Class8english />} />
          <Route path="/class8science" element={<Class8science />} />
          <Route path="/class8maths" element={<Class8maths />} />
          <Route path="/class8socialscience" element={<Class8ss />} />
          <Route path="/class9english" element={<Class9english />} />
          <Route path="/class9science" element={<Class9science />} />
          <Route path="/class9maths" element={<Class9maths />} />
          <Route path="/class9socialscience" element={<Class9ss />} />
          <Route path="/class10english" element={<Class10english />} />
          <Route path="/class10science" element={<Class10science />} />
          <Route path="/class10maths" element={<Class10maths />} />
          <Route path="/class10socialscience" element={<Class10ss />} />
          <Route path="/profile/:username" element={<UserProfilePage />} />
          <Route path="/feedback" element={<Feedback username={username} />} />
          <Route path="/logo" element={<Logo />}/>
          <Route path="/QuizList" element={<QuizList />} />
          <Route path="/QuestionForm" component={QuestionForm} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Result" component={Result} />

        </Routes>
        <div className="chatbot-container">
          {isChatbotOpen && (
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          )}
          <button className="chatbot-toggle-button" onClick={toggleChatbot}>
            <img src="/chatbot-icon.png" alt="Chatbot Icon" />
          </button>
        </div>
      </Router>
    </div>
  );
}

export default App;
