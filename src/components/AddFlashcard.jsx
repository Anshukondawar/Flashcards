
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'C:/Users/anshu/Downloads/my-app/src/Flashcard.css'

function AddFlashcard({ onAdd }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ question, answer });
    navigate('/');
  };

  return (
    <div>
      <h2>Add Flashcard</h2>
      <form onSubmit={handleSubmit} className="flashcard-form">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Add Flashcard</button>
      </form>
    </div>
  );
}

export default AddFlashcard;

