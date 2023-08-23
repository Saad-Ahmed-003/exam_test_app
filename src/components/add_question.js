import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const AddQuestion = () => {
  const [options, setOptions] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddOption = () => {
    if (options.trim() !== "" && optionList.length < 4) {
      setOptionList([...optionList, options.trim()]);
      setOptions("");
    }
  };

  const handleOptionKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddOption();
    }
  };

  const handleClear = () => {
    setOptions("");
    setOptionList([]);
    setCorrectAnswer("");
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = optionList.filter((_, i) => i !== index);
    setOptionList(updatedOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create the JSON object
    const questionData = {
      correct_answer: correctAnswer,
      difficulty: document.getElementById("difficulty").value,
      options: optionList,
      question: document.getElementById("questionText").value,
      topic: document.getElementById("programmingLanguage").value,
    };

    try {
      // Make the POST request using Axios
      const response = await axios.post(
        "http://localhost:5000/addQuestions",
        questionData
      );
      console.log("Question added:", response.data);

      // Reset form values after successful submission
      setOptions("");
      setOptionList([]);
      setCorrectAnswer("");
      document.getElementById("programmingLanguage").selectedIndex = 0;
      document.getElementById("difficulty").selectedIndex = 0;
      document.getElementById("questionText").value = "";
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form className="border border-3 p-4 rounded" onSubmit={handleSubmit}>
            <h2 className="mb-4"></h2>
            <div className="mb-3">
              <label htmlFor="programmingLanguage" className="form-label">
                Programming Language
              </label>
              <select
                className="form-select"
                id="programmingLanguage"
                required=""
              >
                <option value="" disabled="" selected="">
                  Select a language
                </option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="difficulty" className="form-label">
                Difficulty Level
              </label>
              <select className="form-select" id="difficulty" required="">
                <option value="" disabled="" selected="">
                  Select a difficulty
                </option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="questionText" className="form-label">
                Question Text
              </label>
              <textarea
                className="form-control"
                id="questionText"
                rows={3}
                required=""
                defaultValue={""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="options" className="form-label">
                Options
              </label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="options"
                  placeholder="Enter options"
                  value={options}
                  onChange={(e) => setOptions(e.target.value)}
                  onKeyPress={handleOptionKeyPress}
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={handleAddOption}
                >
                  Add
                </button>
              </div>
              <ul className="list-unstyled">
                {optionList.map((option, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    {option}
                    <button
                      className="btn btn-sm btn-danger"
                      type="button"
                      onClick={() => handleRemoveOption(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* ... Other form elements ... */}
            <div className="mb-3">
              <label htmlFor="correctAnswer" className="form-label">
                Correct Answer
              </label>
              <select
                className="form-select"
                id="correctAnswer"
                value={correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select correct answer
                </option>
                {optionList.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="btn btn-secondary me-2"
              onClick={handleClear}
            >
              Clear
            </button>
            <button type="submit" className="btn btn-primary">
              Add Question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
