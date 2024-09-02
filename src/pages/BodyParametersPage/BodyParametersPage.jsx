import AuthPageTemplate from 'components/AuthPageTemplate';
import BodyParametersLogoPic from '../../images/BodyParametersLogoPic.png';
import BodyParametersForm from 'components/BodyParametersForm';

const BodyParametersPage = () => {
  return (
    <AuthPageTemplate
      url={BodyParametersLogoPic}
      title="Body parameters"
      text="Enter your parameters for correct performance tracking"
    >
      <BodyParametersForm />
    </AuthPageTemplate>
  );
};

export default BodyParametersPage;
