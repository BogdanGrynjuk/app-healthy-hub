import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { updateUser, updateAvatar } from 'redux/Auth/authOperations';
import { selectUser } from 'redux/Auth/authSelectors';
import { getStats } from 'redux/Statistics/statisticsOperations';
import validationSchemaForSettingsPage from 'validationSchemas/validationSchemaForSettdingsPage';

import {
  SettingsPageSection,
  SettingsPageContainer,
  TitlePage,
  ButtonContainer,
  CancelButton,
  SaveButton,
  ProfileSettingsContainer,
  BannerThumb,
  Img,
  FormFormik,
  Label,
  Input,
  ErrorMsg,
  InputFileContainer,
  AvaThumb,
  AvaImg,
  WrapperRadioButton,
  FormGroup,
  FormGroupLabel,
  LinkDownloadPhoto,
} from './SettingsPage.styled';

import settingsPage from 'images/settings-page.png';
import downloadPhoto from 'images/icons/download-new-photo.svg';
import avatar from 'images/icons/profile-circle.svg';

import CustomRadioButton from 'components/CustomRadioButton/CustomRadioButton';

const SettingsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector(selectUser);

  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(userProfile.avatarURL);

  const initialValues = {
    name: userProfile.name,
    age: userProfile.age,
    gender: userProfile.gender,
    height: userProfile.height,
    weight: userProfile.weight,
    activity: userProfile.activity.toString(),
  };

  const handleSaveClick = values => {
    dispatch(updateUser(values));
    if (isAvatarChanged) {
      const formData = new FormData();
      formData.append('avatar', avatarFile);
      // dispatch(updateAvatar(formData));
    }
    dispatch(getStats('today'));
    navigate('/main');
  };

  const handleCancelClick = () => {
    setIsAvatarChanged(false);
    navigate('/main');
    dispatch(getStats('today'));
  };

  const handleChangeInputFile = event => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    const selectedFileUrl = URL.createObjectURL(selectedFile);

    setAvatarFile(selectedFile);
    setAvatarPreview(selectedFileUrl);
    setIsAvatarChanged(true);
  };

  return (
    <>
      <SettingsPageSection>
        <SettingsPageContainer>
          <TitlePage>Profile setting</TitlePage>

          <ProfileSettingsContainer>
            <BannerThumb>
              <Img src={settingsPage} alt="Banner settings page" />
            </BannerThumb>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSaveClick}
              validationSchema={validationSchemaForSettingsPage}
            >
              {({ values }) => (
                <FormFormik>
                  <Label>
                    Your name
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                    <ErrorMsg name="name" component="div" />
                  </Label>

                  <InputFileContainer>
                    Your photo
                    <Input
                      type="file"
                      name="userAvatarFile"
                      id="userAvatarFile"
                      accept="image/*"
                      onChange={handleChangeInputFile}
                    />
                    <Label htmlFor="userAvatarFile">
                      <AvaThumb>
                        <AvaImg
                          src={avatarPreview || avatar}
                          alt="userAvatar"
                        />
                      </AvaThumb>

                      <LinkDownloadPhoto>
                        <img src={downloadPhoto} alt="Select File" />
                        Download new photo
                      </LinkDownloadPhoto>
                    </Label>
                  </InputFileContainer>

                  <Label>
                    Your age
                    <Input
                      type="number"
                      name="age"
                      placeholder="Enter your age"
                      required
                    />
                    <ErrorMsg name="age" component="div" />
                  </Label>

                  <FormGroup role="group" aria-labelledby="gender-head">
                    <FormGroupLabel id="gender-head">Gender</FormGroupLabel>
                    <WrapperRadioButton>
                      <CustomRadioButton
                        name="gender"
                        value="Male"
                        selectedValue={values.gender}
                        text="Male"
                      />
                      <CustomRadioButton
                        name="gender"
                        value="Female"
                        selectedValue={values.gender}
                        text="Female"
                      />
                    </WrapperRadioButton>
                  </FormGroup>

                  <Label>
                    Height
                    <Input
                      type="number"
                      name="height"
                      placeholder="Enter your height"
                      required
                    />
                    <ErrorMsg name="height" component="div" />
                  </Label>

                  <Label>
                    Weight
                    <Input
                      type="number"
                      name="weight"
                      placeholder="Enter your weight"
                      required
                    />
                    <ErrorMsg name="weight" component="div" />
                  </Label>

                  <FormGroup role="group" aria-labelledby="activity-head">
                    <FormGroupLabel id="activity-head">
                      Your activity
                    </FormGroupLabel>
                    <CustomRadioButton
                      name="activity"
                      value="1.2"
                      selectedValue={values.activity}
                      text="1.2 - if you do not have physical activity and sedentary work"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.375"
                      selectedValue={values.activity}
                      text="1,375 - if you do short runs or light gymnastics 1-3 times a week"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.55"
                      selectedValue={values.activity}
                      text="1.55 - if you play sports with average loads 3-5 times a week"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.725"
                      selectedValue={values.activity}
                      text="1,725 - if you train fully 6-7 times a week"
                    />
                    <CustomRadioButton
                      name="activity"
                      value="1.9"
                      selectedValue={values.activity.toString()}
                      text="1.9 - if your work is related to physical labor, you train 2 times a day and include strength exercises in your training program"
                    />
                  </FormGroup>

                  <ButtonContainer>
                    <SaveButton type="submit">Save</SaveButton>
                    <CancelButton type="button" onClick={handleCancelClick}>
                      Cancel
                    </CancelButton>
                  </ButtonContainer>
                </FormFormik>
              )}
            </Formik>
          </ProfileSettingsContainer>
        </SettingsPageContainer>
      </SettingsPageSection>
    </>
  );
};

export default SettingsPage;
