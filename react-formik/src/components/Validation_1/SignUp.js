import React from 'react'
import { useFormik } from 'formik';
// yupjs
const SignUp = () => {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
          email: 'some@mail',
          password: "",
          ConfirmPassword: "",
        },
        onSubmit: values => {
          // alert(JSON.stringify(values, null, 2));
          console.log(values)
        },
      });
  return (
    <div><h1>Sign Up</h1>
    <form onSubmit={handleSubmit} >
      <label htmlFor="email">Email</label>
      <input onChange={handleChange} value={values.email} name="email" type="email" />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input onChange={handleChange} value={values.password} name="password" />
      <br />
      <br />
      <label htmlFor="ConfirmPassword">Confirm</label>
      <input onChange={handleChange} value={values.pConfirmPassword} name="ConfirmPassword" />
      <br />
      <br />
      <button type="submit">Submit</button>
      <br />
      <br />
      {JSON.stringify(values)}
    </form></div>
  )
}

export default SignUp