import './App1.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleSubmit= (e) => {
   
    e.preventDefault();
    setName("");  //to clear input
    console.log("Form submitted!")
  }
  return (
    <div className="App1">

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="">Name</label>
            <input 
            id='Name'
            type="text" 
            name="name" 
            placeholder='Name' 
            value={name} 
            onChange={(e) => 
              setName(e.target.value)

            } />
          </div>
          <button 
          disabled={!name}  // when enter some letters it will able/active
          type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
