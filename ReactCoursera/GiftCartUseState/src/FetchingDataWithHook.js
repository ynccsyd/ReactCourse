import React, {useState} from 'react'


const FetchingDataWithHook = () => {
    const [petName, setPetName] = useState("Fluffy");
    console.log(petName)
    function nameLooper(){
        if(petName==="Fluffy"){
           useState("Rexy")
        }else if(petName==="Rexy"){
            useState("Gizmo")
        }else if(petName==="Gizmo"){
            useState("Fluffy")
        }
    }
  return (
    <div>
        <hr />
        <h1>I'm thinking to my pet {petName} </h1>
        <button onClickClick={nameLooper}>Pick a new name</button>
    </div>
  )
}

export default FetchingDataWithHook