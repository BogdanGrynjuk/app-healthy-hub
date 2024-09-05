import * as yup from 'yup';

const validationSchemaSignUp = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Name must be at least 2 characters long.')
    .max(50, 'Name must be no more than 50 characters.')
    .required('Name is required')
    .trim('Name cannot include leading and trailing spaces')
    .strict(true),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password can be at most 16 characters')
    .matches(
      /[A-Z]/,
      'Password must contain at least one uppercase Latin letter'
    )
    .matches(
      /[a-z]/,
      'Password must contain at least one lowercase Latin letter'
    )
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .required('Password is required'),
});

export default validationSchemaSignUp;
