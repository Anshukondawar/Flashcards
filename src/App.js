
import './App.css';
import Flashcard from './Flashcard';
import AddFlashcard from './components/AddFlashcard';
import EditFlashcard from './components/EditFlashcard';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: "What is the capital of France?", answer: "Paris" },
    { id: 2, question: "What is 12 + 20?", answer: "32" },
    { id: 3, question: "What is the largest planet?", answer: "Jupiter" },
    {id:4,  question:"What is the largest ocean on Earth?",answer: "Pacific Ocean"},
    { id: 5, question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
    { id: 6, question: "How many continents are there in the world?", answer: "Seven" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const addFlashcard = (newFlashcard) => {
    const flashcardWithId = {
      id: flashcards.length + 1,
      ...newFlashcard,
    };
    setFlashcards([...flashcards, flashcardWithId]);
  };


  const editFlashcard = (updatedFlashcard) => {
    const updatedFlashcards = flashcards.map((flashcard) =>
      flashcard.id === updatedFlashcard.id ? updatedFlashcard : flashcard
    );
    setFlashcards(updatedFlashcards);
  };

  const deleteFlashcard = (id) => {
    const updatedFlashcards = flashcards.filter(
      (flashcard) => flashcard.id !== id
    );
    setFlashcards(updatedFlashcards);
    if (currentIndex >= updatedFlashcards.length) {
      setCurrentIndex(updatedFlashcards.length - 1);
    }
  };


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <h1>Flashcards</h1>
                {flashcards.length > 0 ? (
                  <Flashcard
                    

                    question={flashcards[currentIndex]?.question || "No flashcards available"}
                    answer={flashcards[currentIndex]?.answer || ""}
                    currentId={flashcards[currentIndex]?.id}
                    addRoute="/add"
                    editRoute={`/edit/${flashcards[currentIndex]?.id}`}
                    onDelete={deleteFlashcard}
                  />
                ) : (
                  <p>No flashcards available</p>
                )}
                <div className="buttons">
                  <button onClick={handlePrevious} disabled={currentIndex === 0}>
                    Previous
                  </button>
                  <button onClick={handleNext} disabled={currentIndex === flashcards.length - 1}>
                    Next
                  </button>
                </div>
              </>
            }
          />
          <Route 
            path="/add" 
            element={<AddFlashcard onAdd={addFlashcard} />} 
          />
           <Route 
            path="/edit/:id" 
            element={<EditFlashcard onEdit={editFlashcard} flashcards={flashcards} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
