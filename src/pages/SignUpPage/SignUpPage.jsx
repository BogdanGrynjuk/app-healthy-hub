import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  setNewUserName,
  setNewUserEmail,
  setNewUserPassword,
} from 'redux/Auth/authSlice';

import { ReactComponent as EyeCloseSvg } from '../../images/icons/eye-off.svg';
import { ReactComponent as EyeOpenSvg } from '../../images/icons/eye.svg';

import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  SignUpForm,
  Input,
  ErrorMsg,
  FormButton,
  QuestionWrapper,
  QuestionText,
  SignInLink,
  InputWrapper,
  IconWrapper,
  FormField,
} from './SignUpPage.styled';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Name must be at least 2 characters long.')
    .max(50, 'Name must be no more than 50 characters.')
    .required('Name is required')
    .trim('Name cannot include leading and trailing spaces')
    .strict(true),
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

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleNewUserData = ({ name, email, password }) => {
    console.log(`name: ${name}, e-mail: ${email}, password: ${password}`);
    dispatch(setNewUserName(name));
    dispatch(setNewUserEmail(email));
    dispatch(setNewUserPassword(password));
    navigate('/your-goal');
  };

  const showPassword = () => setIsVisiblePassword(true);
  const hidePassword = () => setIsVisiblePassword(false);

  return (
    <Container>
      <Image src={logoPic} alt="Logo" />
      <ContentBox>
        <Title>Sign up</Title>
        <Text>You need to register to use the service</Text>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleNewUserData}
        >
          {({ errors, touched, values }) => (
            <SignUpForm>
              <FormField>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="username"
                  error={touched.name && errors.name}
                  value={values.name}
                />
                <ErrorMsg
                  className={touched.name && errors.name ? 'visible' : ''}
                  name="name"
                  component="div"
                />
              </FormField>

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
                <ErrorMsg
                  className={
                    touched.password && errors.password ? 'visible' : ''
                  }
                  name="password"
                  component="div"
                />
              </FormField>

              <FormButton type="submit">Sign Up</FormButton>
            </SignUpForm>
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

export default SignUpPage;
