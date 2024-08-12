// import React from 'react';
import { Link } from 'react-router-dom';

function FlashcardList({ flashcards, onDelete }) {
  return (
    <div>
      <h2>Flashcard List</h2>
      <Link to="/add">Add New Flashcard</Link>
      <ul>
        {flashcards.map((flashcard) => (
          <li key={flashcard.id}>
            <div>
              <strong>{flashcard.question}</strong>
              <p>{flashcard.answer}</p>
              <Link to={`/edit/${flashcard.id}`}>Edit</Link>
              <button onClick={() => onDelete(flashcard.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlashcardList;
