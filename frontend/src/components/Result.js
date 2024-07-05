import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Result = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            const response = await axios.get(`/api/results/user/${user._id}`);
            setResults(response.data);
        };
        fetchResults();
    }, []);

    return (
        <div>
            <h2>Your Quiz Results</h2>
            <ul>
                {results.map((result) => (
                    <li key={result._id}>
                        Quiz ID: {result.quizId}, Score: {result.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Result;
