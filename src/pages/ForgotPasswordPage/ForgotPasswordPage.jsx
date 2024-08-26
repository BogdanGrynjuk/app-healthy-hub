import AuthPageTemplate from 'components/AuthPageTemplate';
import ForgotPasswordForm from 'components/ForgotPasswordForm';

const ForgotPasswordPage = () => {
  return (
    <AuthPageTemplate
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
