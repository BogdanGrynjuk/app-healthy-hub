import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

const BaseButton = styled.button`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  width: 100%;
  padding: 8px 12px;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;
  border: ${props => props.theme.borders.normal} transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;

  &:hover {
    border-color: ${props => props.theme.colors.greenLite};
  }

  &:focus {
    outline: none;
  }
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 212px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 20px;
  }
`;

export const FormGroupLabel = styled.p`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 12px;
`;

export const WrapperRadioButton = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;

  & > label {
    flex-grow: 1;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  &[for='userAvatarFile'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }
`;

export const Input = styled(Field)`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};

  padding: 8px 10px;
  border-radius: ${props => props.theme.radii.normal};
  border: 1px solid ${props => props.theme.colors.gray};
  border: ${p =>
    p.$error
      ? `${p.theme.borders.normal} ${p.theme.colors.error}`
      : p.value === ''
      ? `${p.theme.borders.normal} ${p.theme.colors.greenLite}`
      : `${p.theme.borders.normal} ${p.theme.colors.correct}`};

  &:hover {
    border-color: ${props => props.theme.colors.greenLite};
  }

  &:focus {
    outline: none;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${p => p.theme.colors.gray};
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 12px;
  color: ${p => p.theme.colors.error};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BackButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
`;

export const NextButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.greenLite};
  color: ${props => props.theme.colors.black};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
`;
