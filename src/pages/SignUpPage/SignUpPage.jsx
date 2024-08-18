import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  setNewUserName,
  setNewUserEmail,
  setNewUserPassword,
} from 'redux/Auth/authSlice';

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
} from './SignUpPage.styled';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .min(2, 'Name must be at least 3 characters long.')
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

  return (
    <>
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
            <SignUpForm>
              <InputWrapper>
                <Input type="text" name="name" placeholder="Name" />
                <ErrorMsg name="name" component="div" />
              </InputWrapper>

              <InputWrapper>
                <Input type="email" name="email" placeholder="E-mail" />
                <ErrorMsg name="email" component="div" />
              </InputWrapper>

              <InputWrapper>
                <Input type="password" name="password" placeholder="Password" />
                <ErrorMsg name="password" component="div" />
              </InputWrapper>

              <FormButton type="submit">Sign Up</FormButton>
            </SignUpForm>
          </Formik>

          <QuestionWrapper>
            <QuestionText>Do you already have an account?</QuestionText>
            <SignInLink to={'/signin'}>Sign in</SignInLink>
          </QuestionWrapper>
        </ContentBox>
      </Container>
    </>
  );
};

export default SignUpPage;
