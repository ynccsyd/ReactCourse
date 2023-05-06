import React from 'react'
import { useFormik } from 'formik';
import  validationSchema  from "./validations";
// yupjs
const SignUp = () => {
    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
          email: 'some@mail',
          password: "",
          ConfirmPassword: "",
        },
        onSubmit: values => {
          // alert(JSON.stringify(values, null, 2));
          console.log(values)
        },
        validationSchema,
      });
      console.log(errors)
  return (
    <div><h1>Sign Up</h1>
    <form onSubmit={handleSubmit} >
      <label htmlFor="email">Email</label>
      <input onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" type="email" />
      {errors.email && touched.email && <div className='error'>{errors.email}</div> }
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" />
      {errors.password && <div className='error'>{errors.password}</div> }
      <br />
      <br />
      <label htmlFor="ConfirmPassword">Confirm</label>
      <input onBlur={handleBlur} onChange={handleChange} value={values.ConfirmPassword} name="ConfirmPassword" />
      {errors.ConfirmPassword && <div className='error'>{errors.ConfirmPassword}</div> }
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