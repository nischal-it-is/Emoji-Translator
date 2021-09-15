import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" ,
  "🥰":"Smiling Face with Hearts",
  "🤣": "Rolling on the Floor Laughing",
  "🤩": "Star-Struck",
  "😭": "Loudly Crying Face"
};
//var user = prompt("Enter User Name");
var user = "Nischal";
var count = 0;
const emojisWeKnow = Object.keys(emojiDictionary);
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
    //console.log(emojiMeaning);
    if (emojiMeaning == undefined) {
      emojiMeaning = "WE don't have this";
    }
    setMeaning(emojiMeaning);
  }
  function secondaryemojiClickHandler(emoji)
  {
    var emojiMeaning=emojiDictionary[emoji];
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
        {/* <ul>
            {
              emojis.map(item=>
              {
                  return <li>{item}</li>
              })
            }
        </ul> */}
        <h3>emojis we know</h3>
        {emojisWeKnow.map(item=>
        {
            return <span 
            onClick={()=>secondaryemojiClickHandler(item)}
            style={{cursor:"Pointer",padding:"0.5rem",fontSize:"larger"}}>
           
            {item}
            </span>
          })
        }
        
        
    </div>
  )
}
