import * as yup from 'yup';
import validationSchemaForProfileSetting from 'validationSchemas/validationSchemaForSettdingsPage';

const validationSchemaForWeight = yup.object({
  weight: validationSchemaForProfileSetting.fields.weight,
});

export default validationSchemaForWeight;
