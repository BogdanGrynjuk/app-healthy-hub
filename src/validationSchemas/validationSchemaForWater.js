import * as yup from 'yup';

const validationSchemaForWater = yup.object({
  water: yup
    .number()
    .required('Required')
    .typeError('Must be a number')
    .positive('Must be a positive number')
    .max(2000, 'The maximum allowable value is 2000')
    .integer('Must be an integer'),
});

export default validationSchemaForWater;
