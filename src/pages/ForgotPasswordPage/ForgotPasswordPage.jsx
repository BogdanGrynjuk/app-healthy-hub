import AuthPageTemplate from 'components/AuthPageTemplate';
import ForgotPasswordForm from 'components/ForgotPasswordForm';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const ForgotPasswordPage = () => {
  return (
    <AuthPageTemplate
      url={logoPic}
      title="Forgot your password"
      text="We will send you an email with recovery instructions"
      ctaText="Do you already have an account?"
      ctaLink="/signin"
      ctaLinkText="Sign in"
    >
      <ForgotPasswordForm />
    </AuthPageTemplate>
  );
};
export default ForgotPasswordPage;
