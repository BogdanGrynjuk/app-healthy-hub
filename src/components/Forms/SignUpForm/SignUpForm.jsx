import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import {
  setUserName,
  setUserEmail,
  setUserPassword,
} from 'redux/Auth/authSlice';

import validationSchemaSignUp from 'validationSchemas/validationSchemaSignUp';
import { selectUser } from 'redux/Auth/authSelectors';
import { checkEmail } from 'redux/Auth/authOperations';
import SignUpFormFields from './SignUpFields';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const initialValues = {
    name: user.name || '',
    email: user.email || '',
    password: user.password || '',
  };

  const handleSignUp = ({ name, email, password }) => {
    dispatch(setUserName(name));
    dispatch(setUserEmail(email));
    dispatch(setUserPassword(password));

    dispatch(checkEmail(email))
      .unwrap()
      .then(() => navigate('/your-goal'))
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaSignUp}
      validateOnBlur={false}
      onSubmit={handleSignUp}
    >
      {({ errors, touched, values, setFieldError, setFieldTouched }) => (
        <SignUpFormFields
          values={values}
          errors={errors}
          touched={touched}
          setFieldTouched={setFieldTouched}
          setFieldError={setFieldError}
        />
      )}
    </Formik>
  );
};

export default SignUpForm;
