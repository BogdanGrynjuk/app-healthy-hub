import AuthPageTemplate from 'components/AuthPageTemplate';
import SignInForm from 'components/SignInForm/SignInForm';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const SignInPage = () => {
  return (
    <AuthPageTemplate
      url={logoPic}
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
