import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [textArea, setTextArea] = useState("");
  const [fnameV, setFnameV] = useState(false);
  const [DOB, setDOB] = useState("");
  const [DOBV, setDOBv] = useState(false);
  const [contactV, setContactV] = useState(false);

  const handleFname = (e) => {
    if (
      e.target.value == "1" ||
      e.target.value == "2" ||
      e.target.value == "3" ||
      e.target.value == "4" ||
      e.target.value == "5" ||
      e.target.value == "6" ||
      e.target.value == "7" ||
      e.target.value == "8" ||
      e.target.value == "9" ||
      e.target.value == "0"
    ) {
      setFnameV(true);
    } else {
      setFname(e.target.value);
    }
  };

  const handleLname = (e) => {
    if (
      e.target.value == "1" ||
      e.target.value == "2" ||
      e.target.value == "3" ||
      e.target.value == "4" ||
      e.target.value == "5" ||
      e.target.value == "6" ||
      e.target.value == "7" ||
      e.target.value == "8" ||
      e.target.value == "9" ||
      e.target.value == "0"
    ) {
      // setFname("");
    } else {
      // setFnameV(false)
      setLname(e.target.value);
    }
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleTextArea = (e) => {
    let val = e.target.value.toLocaleLowerCase();
    setTextArea(val);
  };
  const handleDOB = (e) => {
    setDOB(e.target.value);
    let currentData = DOB.slice(0, 4);
    console.log(currentData);
    let verif = 2024 - currentData;

    if (verif <= 18) {
      setDOBv(true);
      alert("age should be greate than 18");
    }
  };
  return (
    <div className="container">
      <div>
        <label htmlFor="fname">FirstName </label>
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => handleFname(e)}
        />
        {fnameV && <span>It contains only alphabets</span>}
      </div>

      <div>
        <label htmlFor="lname">Lastname </label>
        <input
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => handleLname(e)}
        />
      </div>

      <div>
        <label htmlFor="dob">DOB </label>
        <input
          type="date"
          id="dob"
          value={DOB}
          onChange={(e) => handleDOB(e)}
        />
        {DOB <= 18 && DOBV && <span>age should be 18 above</span>}
      </div>

      <div>
        <label htmlFor="lname">Text Area </label>
        <br />
        <textarea
          value={textArea}
          onChange={(e) => handleTextArea(e)}
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        Contact :{" "}
        <input type="text" value={contact} onChange={(e) => handleContact(e)} />
        {contact.length > 10 && <span>number should be Max 10</span>}
      </div>
    </div>
  );
};

export default App;
