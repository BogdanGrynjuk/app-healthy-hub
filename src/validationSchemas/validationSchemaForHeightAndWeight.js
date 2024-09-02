import * as yup from 'yup';
import validationSchemaForSettingsPage from 'validationSchemas/validationSchemaForSettdingsPage';

const validationSchemaForHeightAndWeight = yup.object({
  height: validationSchemaForSettingsPage.fields.height,
  weight: validationSchemaForSettingsPage.fields.weight,
});

export default validationSchemaForHeightAndWeight;
