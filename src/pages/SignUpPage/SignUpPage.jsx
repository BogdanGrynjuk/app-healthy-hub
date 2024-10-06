import AuthPageTemplate from 'components/PageTemplates/AuthPageTemplate';
import SignUpForm from 'components/Forms/SignUpForm';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const SignUpPage = () => {
  return (
    <AuthPageTemplate
      url={logoPic}
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
