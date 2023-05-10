import React, { useRef } from 'react'

/* We use the useRef hook to access a child element directly.
When you invoke the useRef hook, it will return a ref object. 
The ref object has a property named current.*/


const TextInputWithFocusButton = () => {
    const inputEl=useRef(null);
    const onButtonClick = () => {
     inputEl.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputEl} />
        <button onClick={onButtonClick}>Focus the input</button>
    </div>
  )
}

export default TextInputWithFocusButton