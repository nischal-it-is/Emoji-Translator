import React, { useState } from "react";
import "./styles.css";

//var user = prompt("Enter User Name");
var user = "Nischal";
var count = 0;
export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [userInput, setUserInput] = useState(0);
  function likeClickHandler() {
    count += 1;
    setLikeCounter(count);
  }
  function inputHandler(event) {
    setUserInput(event.target.value);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Welcome {user}</h1>
      <input onChange={inputHandler}></input>
      <div>{userInput}</div>
      <button onClick={likeClickHandler}>Like</button>
      <h2>{likeCounter}</h2>
    </div>
  );
}
