import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOptionChange = (event) => {
    const questionId = questions[currentQuestionIndex].id;
    const selectedOption = event.target.value;

    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [questionId]: selectedOption,
    }));
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsSubmit(true);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/questions");
        const shuffledQuestions = shuffleArray(response.data.questions).slice(0, 10);
        setQuestions(shuffledQuestions);
        setTopic(shuffledQuestions[0]?.topic || ""); // Set topic from the first question
        setDifficulty(shuffledQuestions[0]?.difficulty || ""); // Set difficulty from the first question
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  // Utility function to shuffle an array using the Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionId = currentQuestion && currentQuestion.id;
  const currentSelectedOption = selectedOptions[currentQuestionId];

  return (
    <div className="container mt-4 border border-3">
      <div className="d-flex justify-content-between mb-3">
        <div>
          Topic: {topic} | Difficulty: {difficulty}
        </div>
        <div>
          Question {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>
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
                name={`option${currentQuestionId}`}
                id={`option${index}`}
                value={option}
                checked={currentSelectedOption === option}
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
            {isSubmit ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Question;
