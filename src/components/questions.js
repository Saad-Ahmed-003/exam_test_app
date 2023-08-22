import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextClick = () => {
    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    }
  };

  const handlePrevClick = () => {
    // Move to the previous question
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption("");
    }
  };

  useEffect(() => {
    // Fetch questions from the API
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/questions");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mt-4 border border-3">
      <form className="d-flex flex-column">
        <div className="mb-3">
          <label htmlFor="question" className="form-label">
            Question:
          </label>
          <p>{currentQuestion?.question}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Options:</label>
          {currentQuestion?.options.map((option, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="radio"
                name="option"
                id={`option${index}`}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label className="form-check-label" htmlFor={`option${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePrevClick}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Question;
