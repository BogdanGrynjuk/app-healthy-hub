import styled from 'styled-components';
import { Form } from 'formik';

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
    width: 460px;
    align-items: center;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 330px;
    align-items: flex-start;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 20px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 212px;
  }
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
