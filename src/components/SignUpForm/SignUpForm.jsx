import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import {
  setNewUserName,
  setNewUserEmail,
  setNewUserPassword,
} from 'redux/Auth/authSlice';

import { ReactComponent as EyeCloseSvg } from '../../images/icons/eye-off.svg';
import { ReactComponent as EyeOpenSvg } from '../../images/icons/eye.svg';

import {
  FormWrapper,
  FormField,
  Input,
  ErrorMsg,
  FormButton,
  InputWrapper,
  IconWrapper,
} from './SignUpForm.styled';
import validationSchemaSignUp from 'validationSchemas/validationSchemaSignUp';
import { selectError, selectUser } from 'redux/Auth/authSelectors';
import { register } from 'redux/Auth/authOperations';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (error) {
      setEmailError('Email already in use');
    }
  }, [error]);

  const initialValues = {
    name: user.name || '',
    email: user.email || '',
    password: user.password || '',
  };

  const handleSignUp = ({ name, email, password }, { setFieldError }) => {
    dispatch(setNewUserName(name));
    dispatch(setNewUserEmail(email));
    dispatch(setNewUserPassword(password));

    const updatedUser = {
      ...user,
      name,
      email,
      password,
    };

    if (
      Object.values(updatedUser).every(
        value => value !== null && value !== undefined && value !== ''
      )
    ) {
      dispatch(register(updatedUser))
        .unwrap()
        .catch(error => {
          if (error) {
            setFieldError('email', emailError);
          }
        });
    } else {
      navigate('/your-goal');
    }
  };

  const showPassword = () => setIsVisiblePassword(true);
  const hidePassword = () => setIsVisiblePassword(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaSignUp}
      onSubmit={handleSignUp}
    >
      {({ errors, touched, values }) => (
        <FormWrapper>
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
              className={touched.password && errors.password ? 'visible' : ''}
              name="password"
              component="div"
            />
          </FormField>

          <FormButton type="submit">Sign Up</FormButton>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignUpForm;
