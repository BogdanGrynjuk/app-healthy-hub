import AuthPageTemplate from 'components/PageTemplates/AuthPageTemplate';
import SignInForm from 'components/Forms/SignInForm/SignInForm';

import logoPic from 'images/WelcomeLogoPic.png';

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
