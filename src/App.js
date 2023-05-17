import "./App.css";
import Herosection from "./hero-section/heroSection";
import NavDown from "./Components/NavDown";

function App() {

  console.log("hello world");
  return (
    <div className="App">
      <div>Hi Guys</div>
      <NavDown />
      <Herosection />
    </div>
  );
}

export default App;
