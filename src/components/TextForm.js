import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here.");

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };
  const handleClearclick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    const data = document.querySelector("#my-box");
    data.select();
    navigator.clipboard.writeText(data.value);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleReset = () => {
    setText("Enter text here.");
  };
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="form-group">
          <textarea
            className="form-control"
            id="my-box"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLowclick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          onClick={handleClearclick}
        >
          Clear text
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button
          className="btn btn-primary my-2 mx-1"
          onClick={handleExtraSpaces}
        >
          Remove extra space
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          It will take {0.008 * text.split(" ").length} minutes to read above
          text.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
