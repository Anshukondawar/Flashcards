
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './FlashcardList'

function EditFlashcard({ onEdit, flashcards }) {
  const { id } = useParams();
  const flashcardToEdit = flashcards.find(flashcard => flashcard.id === parseInt(id));
  const [question, setQuestion] = useState(flashcardToEdit?.question || '');
  const [answer, setAnswer] = useState(flashcardToEdit?.answer || '');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ id: parseInt(id), question, answer });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Flashcard</h2>
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
        <button type="submit">Update Flashcard</button>
      </form>
    </div>
  );
}

export default EditFlashcard;


