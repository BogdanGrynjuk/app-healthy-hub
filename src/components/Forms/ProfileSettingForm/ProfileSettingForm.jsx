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
  FormGroup,
  FormGroupLabel,
  FormWrapper,
  Input,
  InputFileContainer,
  Label,
  LinkDownloadPhoto,
  SaveButton,
  WrapperRadioButton,
} from './ProfileSettingForm.styled';

import { selectUser } from 'redux/Auth/authSelectors';
import { updateUser } from 'redux/Auth/authOperations';
import validationSchemaForProfileSetting from 'validationSchemas/validationSchemaForSettdingsPage';
import CustomRadioButton from 'components/UI/CustomRadioButton';
import { PHYSICAL_ACTIVITY_OPTIONS } from 'constants/physicalActivityOptions';
import { GENDER_OPTIONS } from 'constants/genderOptions';

import downloadPhoto from 'images/icons/download-new-photo.svg';
import avatar from 'images/icons/profile-circle.svg';

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
      validationSchema={validationSchemaForProfileSetting}
    >
      {({ values, errors, touched }) => (
        <FormWrapper>
          <Label>
            Your name
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              autoComplete="off"
              $error={touched.name && errors.name}
              value={values.name}
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
              autoComplete="off"
              $error={touched.age && errors.age}
              value={values.age}
              required
            />
            <ErrorMsg name="age" component="div" />
          </Label>

          <FormGroup role="group" aria-labelledby="gender-head">
            <FormGroupLabel id="gender-head">Gender</FormGroupLabel>
            <WrapperRadioButton>
              {GENDER_OPTIONS.map(option => (
                <CustomRadioButton
                  key={option.value}
                  name="gender"
                  value={option.value}
                  selectedValue={values.gender}
                  text={option.text}
                />
              ))}
            </WrapperRadioButton>
          </FormGroup>

          <Label>
            Height
            <Input
              type="number"
              name="height"
              placeholder="Enter your height"
              autoComplete="off"
              $error={touched.height && errors.height}
              value={values.height}
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
              autoComplete="off"
              $error={touched.weight && errors.weight}
              value={values.weight}
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
        </FormWrapper>
      )}
    </Formik>
  );
};

export default ProfileSettingForm;
