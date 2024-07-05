import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const QuizList = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await axios.get('/api/Questions');
            setQuizzes(response.data);
        };
        fetchQuizzes();
    }, []);

    return (
        <div>
            <h1>Available Quizzes</h1>
            <ul>
                {quizzes.map((quiz) => (
                    <li key={quiz.id}>
                        <Link to={`/quiz/${quiz.id}`}>{quiz.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizList;
