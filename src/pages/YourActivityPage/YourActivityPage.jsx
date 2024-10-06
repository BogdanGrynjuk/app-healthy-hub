import React from 'react';

import YourActivityLogoPic from '../../images/YourActivityLogoPic.png';
import AuthPageTemplate from 'components/PageTemplates/AuthPageTemplate';
import YourActivityForm from 'components/Forms/YourActivityForm';

const YourActivityPage = () => {
  return (
    <AuthPageTemplate
      url={YourActivityLogoPic}
      title="Your Activity"
      text="To correctly calculate calorie and water intake"
    >
      <YourActivityForm />
    </AuthPageTemplate>
  );
};

export default YourActivityPage;
