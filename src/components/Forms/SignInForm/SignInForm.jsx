import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { signIn } from '../../../redux/Auth/authOperations';

import validationSchemaSignIn from 'validationSchemas/validationSchemaSignIn';
import SignInFormFields from './SignInFormFields';

const SignInForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = ({ email, password }) => {
    dispatch(signIn({ email, password }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaSignIn}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        touched,
        values,
        setFieldValue,
        setFieldError,
        setFieldTouched,
      }) => {
        return (
          <SignInFormFields
            values={values}
            errors={errors}
            touched={touched}
            setFieldValue={setFieldValue}
            setFieldError={setFieldError}
            setFieldTouched={setFieldTouched}
          />
        );
      }}
    </Formik>
  );
};

export default SignInForm;
