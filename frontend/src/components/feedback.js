import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './feedback.css';

const questions = [
  "How would you rate the overall quality of the website?",
  "How easy is it to navigate the website?",
  "How satisfied are you with the content provided?",
  "How likely are you to recommend this website to a friend?",
  "How satisfied are you with the website's design and layout?"
];

const Feedback = ({ username }) => {
  const [ratings, setRatings] = useState(Array(questions.length).fill(0));
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRatingChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allQuestionsAnswered = ratings.every(rating => rating > 0);

    if (!allQuestionsAnswered) {
      setErrorMessage('Please provide ratings for all questions.');
      return;
    }

    try {
      await axios.post('http://localhost:8888/api/feedback', { username, ratings });
      alert('Feedback successfully submitted!');
      navigate('/');  // Redirect to the logged-in user's home page
    } catch (error) {
      if (error.response && error.response.data === 'Feedback already submitted.') {
        setErrorMessage('You have already submitted feedback.');
        alert("You have already submitted feedback.")
      } else if (error.response) {
        setErrorMessage(error.response.data.error || 'An error occurred');
      } else {
        setErrorMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div className="feedback-container">
      <h2>Submit Feedback</h2>
      <div className="rates">
        1-Worst<br />5-Best
      </div>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="feedback-question">
            <label>{question}</label>
            <div className="feedback-rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className="rating-option">
                  <input
                    type="radio"
                    value={value}
                    checked={ratings[index] === value}
                    onChange={() => handleRatingChange(index, value)}
                    required
                  />
                  <label>{value}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
