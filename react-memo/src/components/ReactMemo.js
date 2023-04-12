import React from 'react'
import{useState} from "react"
import Header from './Header';

const ReactMemo = () => {
    const [number, setNumber] = useState(0);
    return (
        <div className='App'>
        <Header/>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>İncrease</button>
        </div>
    )
}

export default ReactMemo 