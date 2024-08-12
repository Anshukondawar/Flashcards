
import React, { useState } from 'react';
import './Flashcard.css';
import { useNavigate } from 'react-router-dom';

function Flashcard({ question, answer, addRoute, editRoute, onDelete, currentId }) {
  const [flipped, setFlipped] = useState(false);
  const navigate = useNavigate();

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleAdd = (e) => {
    e.stopPropagation(); 
    navigate(addRoute);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(editRoute);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(currentId);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-content">
        {flipped ? answer : question}
      </div>
      <div className="flashcard-buttons">
        <button onClick={handleAdd} className="small-button">
          Add
        </button>
        <button onClick={handleEdit} className="small-button">
          Edit
        </button>
        <button onClick={handleDelete} className="small-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Flashcard;
