import React from "react";
import { useState } from "react";
import "./question.css";

function Question(props) {
  const prompt = props.data.prompt;
  const options = props.data.options;
  const id = props.id;
  const [checkedOption, setCheckedOption] = useState(-1);

  if (props.disableForm) {
    return (
      <div className="container col-md-4" id={id}>
        <h4 className="mt-2 mb-2">{prompt}</h4>
        <div>
          {Object.keys(options).map((key, i) => (
            <div className="border" id={4 * id + i} key={4 * id + i}>
              <input
                type="checkbox"
                className="check"
                checked={true ? checkedOption === i : false}
              />
              &nbsp; {key}: {options[key]}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container col-md-4" id={id}>
        <h4 className="mt-2 mb-2">{prompt}</h4>
        <div>
          {Object.keys(options).map((key, i) => (
            <div
              className="border"
              id={4 * id + i}
              key={4 * id + i}
              onClick={() => {
                if (checkedOption === i) {
                  setCheckedOption(-1);
                  let s = props.result;
                  for (var idx = 0; idx < props.result.length; idx++) {
                    // If ch is found
                    if (props.result[idx] === i.toString()) {
                      s = s.substring(0, idx) + s.substring(idx + 1);
                      break;
                    }
                  }
                  props.setResult(s);
                  props.func(props.value - 1);
                } else {
                  setCheckedOption(i);
                  let s = props.result;
                  s += i.toString();
                  props.setResult(s);
                  props.func(props.value + 1);
                }
              }}
            >
              <input
                type="checkbox"
                className="check"
                checked={true ? checkedOption === i : false}
              />
              &nbsp; {key}: {options[key]}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
