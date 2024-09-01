import React from 'react';

import AuthPageTemplate from 'components/AuthPageTemplate';
import YourGoalForm from 'components/YourGoalForm';

import GoalLogoPic from '../../images/YourGoalLogo.png';

const YourGoalPage = () => {
  return (
    <AuthPageTemplate
      url={GoalLogoPic}
      title="Your goal"
      text="Choose a goal so that we can help you effectively"
    >
      <YourGoalForm />
    </AuthPageTemplate>
  );
};

export default YourGoalPage;
