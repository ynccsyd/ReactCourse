// import Counter from "./components/Counter"
// import InputExp from "./components/InputExp"
// import Lifecycle from "./components/Lifecycle"
import Lifecycle2 from "./components/Lifecycle2"
import {useState  } from "react";
import './App.css';

function App() {
  const[isVisible, setIsVisible]=useState(true)
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <InputExp/> */}
      {/* <Lifecycle/> */}
      {isVisible && <Lifecycle2/>}
      <br />
      <button onClick={()=> setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
