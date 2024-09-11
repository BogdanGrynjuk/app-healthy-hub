import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectError } from 'redux/Auth/authSelectors';

import {
  FormWrapper,
  FormField,
  Input,
  ErrorMsg,
  FormButton,
  InputWrapper,
  IconWrapper,
} from './SignUpForm.styled';

import { ReactComponent as EyeCloseSvg } from '../../images/icons/eye-off.svg';
import { ReactComponent as EyeOpenSvg } from '../../images/icons/eye.svg';

const SignUpFormFields = ({
  values,
  errors,
  touched,
  setFieldTouched,
  setFieldError,
}) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const errorFromState = useSelector(selectError);

  const showPassword = () => setIsVisiblePassword(true);
  const hidePassword = () => setIsVisiblePassword(false);

  useEffect(() => {
    if (errorFromState) {
      setFieldTouched('email', true);
      setFieldError('email', errorFromState);
    }
  }, [errorFromState, setFieldError, setFieldTouched]);

  return (
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
          <IconWrapper onMouseEnter={showPassword} onMouseLeave={hidePassword}>
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
  );
};

SignUpFormFields.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  touched: PropTypes.shape({
    name: PropTypes.bool,
    email: PropTypes.bool,
    password: PropTypes.bool,
  }).isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  setFieldError: PropTypes.func.isRequired,
};

export default SignUpFormFields;
