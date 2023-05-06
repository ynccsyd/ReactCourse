import * as yup from 'yup';
const validations =yup.object().shape({

    email:yup.string().email("you can write your error message").required(),
    password:yup.string().min(5).required(), //min(5 ,"write your message or it will use defoult error message")
    ConfirmPassword:yup.string().oneOf([yup.ref('password')]).required() // [yup.ref('password')],"write your error message"
 
  });

export default validations;