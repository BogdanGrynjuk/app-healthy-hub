import AuthPageTemplate from 'components/AuthPageTemplate';
import ContentForWelcomePage from 'components/ContentForWelcomePage';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const WelcomePage = () => {
  return (
    <AuthPageTemplate
      url={logoPic}
      title="Set goals and achieve them"
      text="The service will help you set goals and follow them."
    >
      <ContentForWelcomePage />
    </AuthPageTemplate>
  );
};

export default WelcomePage;
