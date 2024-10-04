import * as yup from 'yup';
import validationSchemaForProfileSetting from 'validationSchemas/validationSchemaForSettdingsPage';

const validationSchemaForHeightAndWeight = yup.object({
  height: validationSchemaForProfileSetting.fields.height,
  weight: validationSchemaForProfileSetting.fields.weight,
});

export default validationSchemaForHeightAndWeight;
