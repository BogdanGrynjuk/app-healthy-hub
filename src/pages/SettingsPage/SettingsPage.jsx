import TemplatePrivatePage from 'components/PageTemplates/TemplatePrivatePage';
import ContentForSettingsPage from 'components/ContentViews/ContentForSettingsPage';

const SettingsPage = () => {
  return (
    <>
      <TemplatePrivatePage>
        <ContentForSettingsPage />
      </TemplatePrivatePage>
    </>
  );
};

export default SettingsPage;
