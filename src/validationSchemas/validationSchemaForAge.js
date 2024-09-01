import * as yup from 'yup';
import validationSchemaForSettingsPage from 'validationSchemas/validationSchemaForSettdingsPage';

const validationSchemaForAge = yup.object({
  age: validationSchemaForSettingsPage.fields.age,
});

export default validationSchemaForAge;
