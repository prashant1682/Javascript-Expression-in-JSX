import React from "react";
import ReactDOM from "react-dom";

const fname = "Prashant";
const lname = "Chacko";
const number = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your lucky number is {number}.</p>
    <p>Your random lucky number is {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
