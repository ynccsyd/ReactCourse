import React from 'react'
import { useState } from "react"
import Header from './Header';

const UseMemo = () => {
  const [number, setNumber] = useState(0);
    return (
      <div className='App'>
        <Header number={number <5? 0 : number}/>
        <hr />
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>İncrease</button>
        </div>
    )
}


export default UseMemo