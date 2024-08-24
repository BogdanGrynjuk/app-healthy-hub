import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { logIn } from '../../redux/Auth/authOperations';

import { ReactComponent as EyeCloseSvg } from '../../images/icons/eye-off.svg';
import { ReactComponent as EyeOpenSvg } from '../../images/icons/eye.svg';

import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  Input,
  FormButton,
  ForgotPasswordLink,
  SignUpLink,
  SignInForm,
  InputWrapper,
  ErrorMsg,
  QuestionText,
  QuestionWrapper,
  FormField,
  IconWrapper,
} from './SignInPage.styled';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password can be at most 16 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one digit')
    .required('Password is required'),
});

const SignInPage = () => {
  const dispatch = useDispatch();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const showPassword = () => setIsVisiblePassword(true);
  const hidePassword = () => setIsVisiblePassword(false);

  const handleSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }));
  };

  return (
    <>
      <Container>
        <Image src={logoPic} alt="img" />
        <ContentBox>
          <Title>Sign in</Title>
          <Text>You need to login to use the service</Text>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values }) => (
              <SignInForm>
                <FormField>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    autoComplete="email"
                    error={touched.email && errors.email}
                    value={values.email}
                  />
                  <ErrorMsg name="email" component="div" />
                </FormField>

                <FormField>
                  <InputWrapper>
                    <Input
                      type={isVisiblePassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      error={touched.password && errors.password}
                      value={values.password}
                    />
                    <IconWrapper
                      onMouseEnter={showPassword}
                      onMouseLeave={hidePassword}
                    >
                      {isVisiblePassword ? (
                        <EyeOpenSvg width={16} height={16} />
                      ) : (
                        <EyeCloseSvg width={16} height={16} />
                      )}
                    </IconWrapper>
                  </InputWrapper>
                  <ErrorMsg name="password" component="div" />
                </FormField>

                <FormButton type="submit">Sign In</FormButton>
              </SignInForm>
            )}
          </Formik>

          <ForgotPasswordLink to={'/forgot-password'}>
            Forgot your password?
          </ForgotPasswordLink>

          <QuestionWrapper>
            <QuestionText>If you don't have an account yet</QuestionText>
            <SignUpLink to={'/signup'}>Sign up</SignUpLink>
          </QuestionWrapper>
        </ContentBox>
      </Container>
    </>
  );
};

export default SignInPage;
