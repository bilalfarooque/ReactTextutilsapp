import React, { useState } from "react";

export default function Textarea(props) {

  const handleUpClick = () => {
    console.log("UpperCase button clicked");
    let newText = text.toUpperCase();
    SetText(newText);
    props.showAlert("Converted to uppercase","success")
  };

  const handleLowClick = () => {
    console.log("LowerCase button clicked");
    let newText = text.toLowerCase();
    SetText(newText);
    props.showAlert("Converted to lowercase","success")
  };

  const handleSpace = () => {
    console.log("remove spaces");
    //Regex=The pattern is used to do pattern-matching "search-and-replace" functions on text.
    let newText = text.split(/[  ]+/);
    //regex,search for spaces, +means = Matches any string that contains at least one n
    SetText(newText.join(" "));
    props.showAlert("Removed extra spaces from text","success")
  };
  
  const handleClear = () => {
    console.log("clear");
    let newText = "";
    SetText(newText);
    props.showAlert("Cleared successfully","success")
  };

  const handleCopy = () => {
    console.log("Copy Text");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success")
  };

  const onChangeHandler = (e) => {
    console.log("State Change");
    SetText(e.target.value);
  };

  const [text, SetText] = useState("");
  return (
    <>
      <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.headings}</h1>

        <div className="mb-2">
          <textarea
            className="form-control"
            value={text}
            onChange={onChangeHandler}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container mt-4"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        {/* <p>{text.split(" ").length>1?text.split(" ").length-1 : "0"} Words {text.length} Characters</p> */}
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} Words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read whole text </p>
        <h2>Preview Text</h2>
        <p>{text.length>0? text : "Enter something  in above text box to preview it"}</p>
      </div>
    </>
  );
}
