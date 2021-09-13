import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":
    "annoyance" /** add some more to show how the app now expands when there's new data */
};

//var user = prompt("Enter User Name");
var user = "Nischal";
var count = 0;
export default function App() {
  // const [likeCounter, setLikeCounter] = useState(0);
  // const [userInput, setUserInput] = useState(0);
  // function likeClickHandler() {
  //   count += 1;
  //   setLikeCounter(count);
  // }
  const [emoji, setMeaning] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput];
    console.log(emojiMeaning);
    setMeaning(emojiMeaning);
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Welcome {user}</h1>
      <input onChange={emojiHandler}></input>
      {/* /* <div>{userInput}</div>
      <button onClick={likeClickHandler}>Like</button>
      <h2>{likeCounter}</h2> */}
      <h4>{emoji}</h4>
    </div>
  );
}
