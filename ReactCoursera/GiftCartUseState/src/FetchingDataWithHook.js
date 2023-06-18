import React, {useState} from 'react'


const FetchingDataWithHook = () => {
    const [petName, setPetName] = useState("Fluffy");
    console.log(setPetName)
    function nameLooper(){
        if(petName==="Fluffy"){
            setPetName("Rexy")
        }else if(petName==="Rexy"){
            setPetName("Gizmo")
        }else if(petName==="Gizmo"){
            setPetName("Fluffy")
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