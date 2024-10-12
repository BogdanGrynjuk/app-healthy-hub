import { Field, Form } from 'formik';
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
  row-gap: 16px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${p =>
    p.$checked ? `${p.theme.colors.violet}` : `${p.theme.colors.white}`};
  cursor: pointer;
`;

export const Input = styled(Field)`
  display: none;
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: ${props => props.theme.radii.normal};
  outline: ${p =>
    p.$checked
      ? `2px solid ${p.theme.colors.violet}`
      : `1px solid ${p.theme.colors.gray1}`};
`;

export const IconGoal = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
  }
`;

export const CancelButton = styled(BaseButton)`
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
    width: 212px;
  }
`;

export const ConfirmButton = styled(BaseButton)`
  background-color: ${props => props.theme.colors.greenLite};
  width: 212px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${props => props.theme.radii.normal};
  padding: 8px;
  cursor: pointer;

  @media screen and (max-width: 833px) {
    width: 100%;
  }
`;
