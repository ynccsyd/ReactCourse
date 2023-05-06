import React from 'react'

const Header = ({number, data}) => {
    console.log("Header component Re-rendered")
  return (
    <div>
    Header - {number}
    <br /><br />
    <code>{JSON.stringify(data)}</code>
    </div>
  )
}

export default React.memo(Header) // it wont re-rendered again as long as the state doesnt change :)