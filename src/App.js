import React from "react";
import { useState } from "react";
import Question from "./Components/Question";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Data from "./data.json";

function App() {
  const [isCheckedvalue, setIsCheckedvalue] = useState(0);
  const [buttonText, setButtonText] = useState("Show me my results!");
  const [disableForm, setdisableForm] = useState(false);
  const [result, setResult] = useState("");
  const [showResults, setShowResults] = useState(false);

  const getMax = function (str) {
    var max = 0,
      maxChar = "";
    str.split("").forEach(function (char) {
      if (str.split(char).length > max) {
        max = str.split(char).length;
        maxChar = char;
      }
    });
    return maxChar;
  };

  let common = getMax(result);

  return (
    <div>
      <h1 className="row d-flex justify-content-center flex-nowrap">
        UTB Quiz
      </h1>
      {Data.questions.map((question, index) => (
        <Question
          data={question}
          id={index}
          key={index}
          value={isCheckedvalue}
          disableForm={disableForm}
          func={setIsCheckedvalue}
          setResult={setResult}
          result={result}
        />
      ))}

      <div className="container">
        <div className="row">
          <div className="col text-center d-grid col-md-7 mx-auto">
            <button
              type="button"
              className="btn btn-primary btn-lg btn-block mt-4"
              disabled={isCheckedvalue !== Data.questions.length}
              onClick={() => {
                if (buttonText === "Show me my results!") {
                  setButtonText("Retake Quiz");
                  setShowResults(true);
                  setdisableForm(true);
                } else {
                  setButtonText("Show me my results!");
                  setdisableForm(false);
                  setShowResults(false);
                  window.location.reload();
                }
              }}
            >
              {buttonText}
            </button>{" "}
            {showResults && (
              <div id="resultDiv">
                <h3 id="resultDivTitle">Congratulations!</h3>
                <p id="resultDivText">{Data.results[common]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
