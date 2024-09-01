import * as yup from 'yup';

const validationSchemaForSettingsPage = yup.object({
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
  age: yup
    .number()
    .min(18, 'Age must be at least 18 years old')
    .max(110, 'Age must be no more than 110 years old')
    .required('Age is required')
    .integer('Age must be an integer'),
  height: yup
    .number()
    .min(120, 'Height must be at least 120cm')
    .max(220, 'Height must be no more than 220cm')
    .required('Height is required')
    .integer('Height must be an integer'),
  weight: yup
    .number()
    .min(40, 'Weight must be at least 40kg')
    .max(200, 'Weight must be no more than 200kg')
    .required('Weight is required')
    .test('maxDigitsAfterDecimal', 'Must have 1 digits after decimal', number =>
      /^\d+(\.\d{1})?$/.test(number)
    ),
});

export default validationSchemaForSettingsPage;
