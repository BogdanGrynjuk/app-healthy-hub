import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import axios from 'axios';

import {
  FormWrapper,
  FormField,
  Input,
  ErrorMsg,
  FormButton,
} from './ForgotPasswordForm.styled';

import validationSchemaForgotPassword from 'validationSchemas/validationSchemaForgotPassword';
import toastifyMessage from 'helpers/toastify';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const handleSubmit = async ({ email }, { resetForm }) => {
    try {
      // !!! Тут є баг на стороні бекенда (на пошту не приходить оновлений пароль)
      const response = await axios.patch('/users/forgotpassword', { email });
      toastifyMessage('success', response.data.message);
      navigate('/signin');
      resetForm();
    } catch (error) {
      toastifyMessage('error', error.response.data.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaForgotPassword}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values }) => (
        <FormWrapper>
          <FormField>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              autoComplete="email"
              error={touched.email && errors.email}
              value={values.email}
            />
            <ErrorMsg
              className={touched.email && errors.email ? 'visible' : ''}
              name="email"
              component="div"
            />
          </FormField>

          <FormButton type="submit">Send</FormButton>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
