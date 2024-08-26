import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { logIn } from '../../redux/Auth/authOperations';

import { ReactComponent as EyeCloseSvg } from '../../images/icons/eye-off.svg';
import { ReactComponent as EyeOpenSvg } from '../../images/icons/eye.svg';

import {
  Input,
  FormButton,
  ForgotPasswordLink,
  FormWrapper,
  InputWrapper,
  ErrorMsg,
  FormField,
  IconWrapper,
} from './SignInForm.styled';

import validationSchemaSignIn from 'validationSchemas/validationSchemaSignIn';

const SignInForm = () => {
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaSignIn}
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
          <ForgotPasswordLink to={'/forgot-password'}>
            Forgot your password?
          </ForgotPasswordLink>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default SignInForm;
