import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:8888/api/questions');
                console.log('Fetched questions:', response.data);
                if (Array.isArray(response.data) && response.data.length > 0) {
                    setQuestions(response.data);
                } else {
                    console.error('Unexpected data format or empty questions list:', response.data);
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchQuestions();
    }, []);

    const handleAnswerChange = (e) => {
        setUserAnswers({ ...userAnswers, [currentQuestionIndex]: e.target.value });
    };

    const handleSubmit = async () => {
        let newScore = 0;
        questions.forEach((question, index) => {
            if (userAnswers[index] === question.answer) {
                newScore++;
            }
        });
        setScore(newScore);
        setQuizCompleted(true);

        const result = {
            userId: "1", // replace with actual user ID from context/authentication
            score: newScore
        };
        try {
            await axios.post('http://localhost:8888/api/results', result);
        } catch (error) {
            console.error("Error submitting result:", error);
        }
    };

    if (quizCompleted) {
        return <div>Your score is: {score} / {questions.length}</div>;
    }

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <h2>{currentQuestion.questionText}</h2>
            <div>
                {currentQuestion.options.map((option, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            value={option}
                            checked={userAnswers[currentQuestionIndex] === option}
                            onChange={handleAnswerChange}
                        />
                        {option}
                    </label>
                ))}
            </div>
            {currentQuestionIndex < questions.length - 1 ? (
                <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next</button>
            ) : (
                <button onClick={handleSubmit}>Submit</button>
            )}
        </div>
    );
};

export default Quiz;
