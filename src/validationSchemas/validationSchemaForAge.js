import * as yup from 'yup';
import validationSchemaForProfileSetting from 'validationSchemas/validationSchemaForSettdingsPage';

const validationSchemaForAge = yup.object({
  age: validationSchemaForProfileSetting.fields.age,
});

export default validationSchemaForAge;
