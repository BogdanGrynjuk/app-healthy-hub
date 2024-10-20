import AuthPageTemplate from 'components/PageTemplates/AuthPageTemplate';
import ContentForWelcomePage from 'components/ContentViews/ContentForWelcomePage';

import logoPic from 'images/WelcomeLogoPic.png';

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
