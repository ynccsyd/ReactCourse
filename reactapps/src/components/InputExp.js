import { useState } from 'react'
import React from 'react'

 const InputExp = () => {
    // const [name, setName] = useState("ali")
    // const [surname, setSurname] = useState("veli")
    const [form, setForm]=useState({name: "", surname: ""});
    const onChangeInput=(e)=>{
        setForm({...form, [e.target.name]: e.target.value });
    }
    return (
        <div>
           {/* Name: <br />
            <input value={name} type="text" onChange={(event)=>setName(event.target.value)} />
           <br />
           <br />
           Surname: <br />
            <input value={surname} type="text" onChange={(event)=>setSurname(event.target.value)} />
            <br />
            <br />
            {name} {surname} */}
            Name: <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
           <br />
           <br />
           Surname: <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />
            <br />
            <br />
            {form.name} {form.surname}
        </div>
    )
}
export default InputExp