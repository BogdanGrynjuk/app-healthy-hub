import React from 'react';

import YourActivityLogoPic from '../../images/YourActivityLogoPic.png';
import AuthPageTemplate from 'components/AuthPageTemplate';
import YourActivityForm from 'components/YourActivityForm';

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
