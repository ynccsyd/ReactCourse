import React from 'react'

const Header = ({ number, increment }) => {
    console.log("Header component Re-rendered")
    return (
        <div>
            Header - {number}
            <br /><br />
            <button onClick={increment}>İncrease</button>
        </div>
    )
}
export default React.memo(Header) 
// it wont re-rendered again as long as the state doesnt change :)