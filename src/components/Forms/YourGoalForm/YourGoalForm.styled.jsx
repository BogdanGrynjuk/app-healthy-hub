import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (${props => props.theme.mq.desktop}) {
    align-self: flex-start;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.medium};
    line-height: 20px;
    margin-bottom: 24px;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: column;
  }
`;

export const NextButton = styled.button`
  width: 300px;
  padding: 8px 10px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  background-color: ${p => p.theme.colors.greenLite};
  cursor: pointer;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 212px;
  }
`;
