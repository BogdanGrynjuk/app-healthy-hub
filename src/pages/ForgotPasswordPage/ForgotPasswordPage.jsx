import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import {
  SignInLink,
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  ForgotPasswordForm,
  FormField,
  Input,
  ErrorMsg,
  FormButton,
  QuestionWrapper,
  QuestionText,
} from './ForgotPasswordPage.styled';

import toastifyMessage from 'helpers/toastify';
import logoPic from '../../images/WelcomePageImg/logoPic.png';

axios.defaults.baseURL = 'https://healthyhub-z4y1.onrender.com';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
  };

  const handleSubmit = async ({ email }, { resetForm }) => {
    try {
      // !!! Тут є баг на стороні бекенда (на пошту не приходить оновелений пароль)
      const response = await axios.patch('/users/forgotpassword', { email });
      toastifyMessage('success', response.data.message);
      navigate('/signin');
      resetForm();
    } catch (error) {
      toastifyMessage('error', error.response.data.message);
    }
  };

  return (
    <Container>
      <Image src={logoPic} alt="Logo" />
      <ContentBox>
        <Title>Forgot your password</Title>
        <Text>We will send you an email with recovery instructions</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values }) => (
            <ForgotPasswordForm>
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
            </ForgotPasswordForm>
          )}
        </Formik>

        <QuestionWrapper>
          <QuestionText>Do you already have an account?</QuestionText>
          <SignInLink to="/signin">Sign in</SignInLink>
        </QuestionWrapper>
      </ContentBox>
    </Container>
  );
};
export default ForgotPasswordPage;
