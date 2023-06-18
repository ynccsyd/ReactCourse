import React, {useState} from "react";
export default function App(){
  const [toggle, setToggle] = useState(false);

  const clickHandler= () => {
    setToggle(!toggle)
  }
  React.useEffect( () => {
    document.title=toggle ? "Welcome to Little Lemon" : " Using useEffect hook"
  }, [toggle])
  return(
    <div>
      <hr />
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {toggle && <h2>Welcome to Little Lemon</h2> }
    </div>
  )
}
