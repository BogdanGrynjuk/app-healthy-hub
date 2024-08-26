import AuthPageTemplate from 'components/AuthPageTemplate';
import SignUpForm from 'components/SignUpForm';

const SignUpPage = () => {
  return (
    <AuthPageTemplate
      title="Sign up"
      text="You need to register to use the service"
      ctaText="Do you already have an account?"
      ctaLink="/signin"
      ctaLinkText="Sign in"
    >
      <SignUpForm />
    </AuthPageTemplate>
  );
};

export default SignUpPage;
