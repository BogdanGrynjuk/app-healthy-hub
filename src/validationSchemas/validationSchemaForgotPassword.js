import * as yup from 'yup';

const validationSchemaForgotPassword = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

export default validationSchemaForgotPassword;
