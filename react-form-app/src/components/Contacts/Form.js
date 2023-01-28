import React from 'react'
import { useState } from "react";


const Form = () => {
    const [form, setForm] = useState({ fullname: "", phone_number: "" });
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }
    return (
        <div>
            <div>
                <input type="text" name='fullname' placeholder='Fullname' onChange={onChangeInput} />
            </div>
            <div>
                <input type="text" name='phone_number' placeholder='Phone Number' onChange={onChangeInput} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </div>
    )
}

export default Form