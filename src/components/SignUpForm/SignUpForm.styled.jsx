import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (${props => props.theme.mq.desktop}) {
    align-self: flex-start;
  }
`;

export const FormField = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 20px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 212px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  height: 36px;
  width: 100%;
  padding: 10px 8px;
  border: ${p =>
    p.error
      ? `${p.theme.borders.normal} ${p.theme.colors.error}`
      : p.value === ''
      ? `${p.theme.borders.normal} ${p.theme.colors.greenLite}`
      : `${p.theme.borders.normal} ${p.theme.colors.correct}`};
  border-radius: 12px;
  background-color: ${p => p.theme.colors.black2};
  color: ${p => p.theme.colors.gray};

  &:focus {
    outline: none;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 12px;
  color: ${p => p.theme.colors.error};
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const FormButton = styled.button`
  width: 300px;
  padding: 8px;
  text-align: center;
  background-color: ${p => p.theme.colors.greenLite};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;
  cursor: pointer;

  @media (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media (${props => props.theme.mq.desktop}) {
    width: 212px;
  }
`;
