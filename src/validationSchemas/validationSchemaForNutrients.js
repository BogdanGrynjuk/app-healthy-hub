import * as yup from 'yup';

const validationSchemaForNutrients = yup.object({
  productList: yup.array().of(
    yup.object().shape({
      mealName: yup
        .string()
        .required('Name is required')
        .trim('Name cannot include leading and trailing spaces')
        .strict(true),
      carbonohidrates: yup
        .number()
        .required('Carbohydrates is required')
        .typeError('Must be a number')
        .min(0, 'Must be a positive number')
        .max(100, 'The maximum allowable value is 100')
        .test(
          'maxDigitsAfterDecimal',
          'Must have 1 digits after decimal',
          number => /^\d+(\.\d{1})?$/.test(number)
        ),
      protein: yup
        .number()
        .required('Protein is required')
        .typeError('Must be a number')
        .min(0, 'Must be a positive number')
        .max(100, 'The maximum allowable value is 100')
        .test(
          'maxDigitsAfterDecimal',
          'Must have 1 digits after decimal',
          number => /^\d+(\.\d{1})?$/.test(number)
        ),
      fat: yup
        .number()
        .required('Fat is required')
        .typeError('Must be a number')
        .min(0, 'Must be a positive number')
        .max(100, 'The maximum allowable value is 100')
        .test(
          'maxDigitsAfterDecimal',
          'Must have 1 digits after decimal',
          number => /^\d+(\.\d{1})?$/.test(number)
        ),
      calories: yup
        .number()
        .required('Calories is required')
        .typeError('Must be a number')
        .min(0, 'Must a be positive number')
        .max(1000, 'The maximum allowable value is 1000')
        .integer('Must be an integer'),
    })
  ),
});

export default validationSchemaForNutrients;
