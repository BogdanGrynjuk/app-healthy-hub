import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectError } from 'redux/Auth/authSelectors';
import { clearError } from 'redux/Auth/authSlice';

import {
  ErrorMsg,
  ForgotPasswordLink,
  FormButton,
  FormField,
  FormWrapper,
  IconWrapper,
  Input,
  InputWrapper,
} from './SignInForm.styled';

import { ReactComponent as EyeCloseSvg } from 'images/icons/eye-off.svg';
import { ReactComponent as EyeOpenSvg } from 'images/icons/eye.svg';

const SignInFormFields = ({
  values,
  errors,
  touched,
  setFieldValue,
  setFieldTouched,
  setFieldError,
}) => {
  const dispatch = useDispatch();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const errorFromState = useSelector(selectError);

  const togglePassword = () => setIsVisiblePassword(!isVisiblePassword);

  const handleForgotPasswordClick = () => {
    dispatch(clearError());
  };

  useEffect(() => {
    let errorFields = {};
    if (errorFromState) {
      try {
        errorFields = JSON.parse(errorFromState);
      } catch (e) {
        dispatch(clearError());
        return;
      }
      setFieldValue('email', errorFields.email);
      setFieldValue('password', errorFields.password);
      setTimeout(() => {
        setFieldTouched('email', true);
        setFieldTouched('password', true);
        setFieldError('email', 'Please check your email and try again');
        setFieldError('password', 'Please check your password and try again');
      }, 0);
    }
  }, [errorFromState, setFieldValue, setFieldError, setFieldTouched, dispatch]);

  return (
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
        <ErrorMsg name="email" component="div" />
      </FormField>

      <FormField>
        <InputWrapper>
          <Input
            type={isVisiblePassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            $error={touched.password && errors.password}
            value={values.password}
          />
          <IconWrapper onClick={togglePassword}>
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
      <ForgotPasswordLink
        to={'/forgot-password'}
        onClick={handleForgotPasswordClick}
      >
        Forgot your password?
      </ForgotPasswordLink>
    </FormWrapper>
  );
};

SignInFormFields.propTypes = {
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
};

export default SignInFormFields;
