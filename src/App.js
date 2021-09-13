import "./styles.css";

//var user = prompt("Enter User Name");
var user = "Nischal";
var count = 0;
export default function App() {
  function likeClickHandler() {
    console.log(count);
    count += 1;
  }
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Welcome {user}</h1>
      <button onClick={likeClickHandler}>Like</button>
      <h2>Yo</h2>
    </div>
  );
}
