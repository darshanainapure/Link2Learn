import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState({ a: '', b: '', c: '', d: '' });
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newQuestion = { question, options, correctAnswer };
        await axios.post('/api/questions', newQuestion);
        // Clear the form
        setQuestion('');
        setOptions({ a: '', b: '', c: '', d: '' });
        setCorrectAnswer('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question:
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </label>
            <label>
                Option A:
                <input
                    type="text"
                    value={options.a}
                    onChange={(e) => setOptions({ ...options, a: e.target.value })}
                    required
                />
            </label>
            <label>
                Option B:
                <input
                    type="text"
                    value={options.b}
                    onChange={(e) => setOptions({ ...options, b: e.target.value })}
                    required
                />
            </label>
            <label>
                Option C:
                <input
                    type="text"
                    value={options.c}
                    onChange={(e) => setOptions({ ...options, c: e.target.value })}
                    required
                />
            </label>
            <label>
                Option D:
                <input
                    type="text"
                    value={options.d}
                    onChange={(e) => setOptions({ ...options, d: e.target.value })}
                    required
                />
            </label>
            <label>
                Correct Answer:
                <input
                    type="text"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuestionForm;
