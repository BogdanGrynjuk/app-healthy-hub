import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import {
  FormWrapper,
  FormField,
  Input,
  ErrorMsg,
  FormButton,
} from './ForgotPasswordForm.styled';

import validationSchemaForgotPassword from 'validationSchemas/validationSchemaForgotPassword';
import { useDispatch } from 'react-redux';
import { resetPassword } from 'redux/Auth/authOperations';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
  };

  const handleSubmit = ({ email }, { resetForm }) => {
    dispatch(resetPassword({ email }))
      .unwrap()
      .catch(error => {
        console.error(error);
        resetForm();
        navigate('/signin');
      });
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
              $error={touched.email && errors.email}
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
