import * as yup from 'yup';
const validations =yup.object().shape({

    email:yup.string().email("you can write your error message").required(),
    password:yup.string().min(5).required(),
    ConfirmPassword:yup.string().oneOf([yup.ref('password')],"write your error message").required()
 
  });

export default validations;