import React from 'react'

const Header = ({number}) => {
    console.log("Header component Re-rendered")
  return (
    <div>Header - {number}</div>
  )
}

export default React.memo(Header) // it wont re-rendered again as long as the state doesnt change :)