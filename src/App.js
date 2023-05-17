import "./App.css";
import Herosection from "./hero-section/heroSection";
import NavDown from "./Components/NavDown";
import CardDown from "./card-down/card-down";

function App() {
  console.log("hello world");
  return (
    <div className="App">
      <NavDown />
      <CardDown />

      <Herosection />
    </div>
  );
}

export default App;
