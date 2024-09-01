import React from 'react';

import SelectGenderLogoPic from '../../images/SelectGenderLogoPic.png';
import AuthPageTemplate from 'components/AuthPageTemplate';
import GenderAndAgeForm from 'components/GenderAndAgeForm';

const SelectGenderPage = () => {
  return (
    <AuthPageTemplate
      url={SelectGenderLogoPic}
      title="Select gender, Age"
      text="Choose a goal so that we can help you effectively"
    >
      <GenderAndAgeForm />
    </AuthPageTemplate>
  );
};

export default SelectGenderPage;
