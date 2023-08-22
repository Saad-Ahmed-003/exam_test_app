import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const AddQuestion = () => {
  const [options, setOptions] = useState(""); // State to store options
  const [optionList, setOptionList] = useState([]); // State to store list of options

  const handleAddOption = () => {
    if (options.trim() !== "" && optionList.length < 4) {
      const optionPlaceholder =
        String.fromCharCode(97 + optionList.length) + ".";
      setOptionList([
        ...optionList,
        { text: options.trim(), placeholder: optionPlaceholder },
      ]);
      setOptions(""); // Clear the input field after adding an option
    }
  };

  const handleOptionKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddOption();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform necessary actions here, e.g., sending data to a server
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form className="border border-3 p-4 rounded" onSubmit={handleSubmit}>
            <h2 className="mb-4">Add Question</h2>
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
              <input
                type="text"
                className="form-control"
                id="options"
                placeholder="Enter options separated by commas"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                onKeyPress={handleOptionKeyPress}
                required
              />
              <ul className="list-unstyled">
                {optionList.map((option, index) => (
                  <li key={index}>
                    {option.placeholder} {option.text}
                  </li>
                ))}
              </ul>
            </div>
            {/* ... Other form elements ... */}
            <div className="mb-3">
              <label htmlFor="correctAnswer" className="form-label">
                Correct Answer
              </label>
              <input
                type="text"
                className="form-control"
                id="correctAnswer"
                required=""
              />
            </div>
            <button type="button" className="btn btn-secondary me-2">
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
