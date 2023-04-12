import React from 'react'

const Header = () => {
    console.log("Header component Re-rendered")
  return (
    <div>Header</div>
  )
}

export default React.memo(Header) // it wont re-rendered again as long as the state doesnt change :)