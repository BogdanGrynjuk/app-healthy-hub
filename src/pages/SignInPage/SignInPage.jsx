import AuthPageTemplate from 'components/AuthPageTemplate';
import SignInForm from 'components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <AuthPageTemplate
      title="Sign in"
      text="You need to login to use the service"
      ctaText="If you don't have an account yet"
      ctaLink="/signup"
      ctaLinkText="Sign up"
    >
      <SignInForm />
    </AuthPageTemplate>
  );
};

export default SignInPage;
