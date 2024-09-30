import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import {
  AvaImg,
  AvaThumb,
  ButtonContainer,
  CancelButton,
  ErrorMsg,
  FormFormik,
  FormGroup,
  FormGroupLabel,
  Input,
  InputFileContainer,
  Label,
  LinkDownloadPhoto,
  SaveButton,
  WrapperRadioButton,
} from './ProfileSettingForm.styled';

import { selectUser } from 'redux/Auth/authSelectors';
import validationSchemaForSettingsPage from 'validationSchemas/validationSchemaForSettdingsPage';
import CustomRadioButton from 'components/CustomRadioButton';

import downloadPhoto from 'images/icons/download-new-photo.svg';
import avatar from 'images/icons/profile-circle.svg';
import { updateUser } from 'redux/Auth/authOperations';
import { PHYSICAL_ACTIVITY_OPTIONS } from 'constants/physicalActivityOptions';

const ProfileSettingForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector(selectUser);

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(userProfile.avatarURL);

  const initialValues = {
    name: userProfile.name,
    age: userProfile.age,
    gender: userProfile.gender,
    height: userProfile.height,
    weight: userProfile.weight,
    physicalActivityRatio: userProfile.physicalActivityRatio.toString(),
  };

  const createFormData = (values, avatarFile) => {
    const formData = new FormData();

    const updatedValues = {
      ...values,
      physicalActivityRatio: Number(values.physicalActivityRatio),
    };

    if (avatarFile) {
      updatedValues.avatarURL = avatarFile;
    }

    for (const field in updatedValues) {
      formData.append(field, updatedValues[field]);
    }

    return formData;
  };

  const handleSaveClick = values => {
    const formData = createFormData(values, avatarFile);
    dispatch(updateUser(formData));
    navigate('/main');
  };

  const handleCancelClick = () => {
    navigate('/main');
  };

  const handleChangeInputFile = event => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) return;

    const selectedFileUrl = URL.createObjectURL(selectedFile);

    setAvatarFile(selectedFile);
    setAvatarPreview(selectedFileUrl);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSaveClick}
      validationSchema={validationSchemaForSettingsPage}
    >
      {({ values, errors, touched }) => (
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
                <AvaImg src={avatarPreview || avatar} alt="userAvatar" />
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
            <FormGroupLabel id="activity-head">Your activity</FormGroupLabel>
            {PHYSICAL_ACTIVITY_OPTIONS.map(option => (
              <CustomRadioButton
                key={option.value}
                name="physicalActivityRatio"
                value={option.value}
                selectedValue={values.physicalActivityRatio}
                text={option.text}
              />
            ))}
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
  );
};

export default ProfileSettingForm;
