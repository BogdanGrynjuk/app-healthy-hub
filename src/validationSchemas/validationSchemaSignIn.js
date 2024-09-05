import * as yup from 'yup';

const validationSchemaSignIn = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /[A-Z]/,
      'Password must contain at least one uppercase Latin letter'
    )
    .matches(
      /[a-z]/,
      'Password must contain at least one lowercase Latin letter'
    )
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password can be at most 16 characters')
    .required('Password is required'),
});

export default validationSchemaSignIn;
