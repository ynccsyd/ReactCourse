import React from 'react'
import { useState, useMemo } from "react"
import Header from './Header';

// const data={name:"Name"} // if you write out of function it will render once
const UseCallBackSample = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // const data=useMemo ( () => {  //header component will be rendered once
  //   return {name:"Name"}
  // },[])
  

  // const data=useMemo ( () => {  //header component will be rendered as number changes
  //   return {name:"Name", number}
  // },[number])

  const data=useMemo ( () => {  //header component will be rendered once
    return calculateObject();
  },[])

    return (
      <div className='App'>
        <Header data={data}/>
        <hr />
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>İncrease</button>
            <br /><br />
            <input type="text" value={text} onChange={({target})=>setText(target.value)} />
        </div>
    )
}
function calculateObject(){
  console.log("Calculating...");
  for (let i=0; i<1000; i++)
  console.log("Calculating completed!");
  return {name:"Name"}
}


export default UseCallBackSample