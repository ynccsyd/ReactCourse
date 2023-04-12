import React from 'react'
import { useState, useCallback } from "react"
import Header from './Header';

// const data={name:"Name"} // if you write out of function it will render once
const UseCallBackSample = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

/*const increment=useCallback(() => {
  setNumber(number+1)
},[number]); // it will be re-rendered with this*/

const increment=useCallback(() => {
    setNumber((prevState)=>prevState+1);
  },[]); // it won't be re-rendered with this

    return (
      <div className='App'>
        <Header increment={increment}/>
        <hr />
            <h1>{number}</h1>
            <br /><br />
            <input type="text" value={text} onChange={({target})=>setText(target.value)} />
        </div>
    )
}
export default UseCallBackSample