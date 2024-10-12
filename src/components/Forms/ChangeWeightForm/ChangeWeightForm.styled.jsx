import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  cursor: pointer;
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
  }
`;

export const Label = styled.label`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
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

  @media screen and (${props => props.theme.mq.tablet}) {
    margin-top: 0;
    flex-direction: row;
    width: 100%;
  }
`;

export const CancelButton = styled(BaseButton)`
  display: block;
  color: ${props => props.theme.colors.white};

  width: 100%;
  padding: 8px 12px;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${props => props.theme.radii.normal};
  cursor: pointer;

  &:hover {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    display: none;
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.greenLite};
  width: 100%;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${props => props.theme.radii.normal};
  padding: 8px;
  cursor: pointer;
`;
