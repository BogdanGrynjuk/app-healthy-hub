import AuthPageTemplate from 'components/PageTemplates/AuthPageTemplate';
import ForgotPasswordForm from 'components/Forms/ForgotPasswordForm';

import logoPic from 'images/WelcomeLogoPic.png';

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
