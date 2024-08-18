import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 24px 0;
  background-color: ${props => props.theme.colors.black};

  @media screen and (${props => props.theme.mq.desktop}) {
    row-gap: 60px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 100px;
    justify-content: center;
    padding: 40px 0;
  }
`;

export const Image = styled.img`
  width: 300px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 590px;
    height: 590px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 450px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.white};
  font-family: Poppins;
  font-weight: ${props => props.theme.fontWeights.medium};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l2};
  line-height: 1.25;

  @media screen and (${props => props.theme.mq.desktop}) {
    text-align: left;
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  width: 300px;
  margin-bottom: 24px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  text-align: center;
  color: ${props => props.theme.colors.gray};

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 450px;
    font-size: ${p => p.theme.fontSizes.l};
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    text-align: left;
    line-height: 1.45;
  }
`;

export const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-self: center;

  @media screen and (${props => props.theme.mq.desktop}) {
    align-self: flex-start;
  }
`;

export const InputWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-bottom: 20px;

  &:nth-child(3) {
    margin-bottom: 40px;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 212px;
  }
`;

export const Input = styled(Field)`
  height: 36px;
  padding: 10px 8px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: 12px;
  background-color: ${p => p.theme.colors.black2};
  color: ${p => p.theme.colors.gray};
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: 10px;
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 12px;
  color: ${p => p.theme.colors.error};
`;

export const FormButton = styled.button`
  width: 300px;
  margin-bottom: 48px;
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
    margin-bottom: 206px;
  }

  @media (${props => props.theme.mq.desktop}) {
    width: 212px;
    margin-bottom: 168px;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-family: ${p => p.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;

  @media (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    justify-content: center;
  }

  @media (${props => props.theme.mq.desktop}) {
    justify-content: flex-start;
  }
`;

export const QuestionText = styled.p`
  color: ${p => p.theme.colors.gray};
  font-weight: ${p => p.theme.fontWeights.regular};
`;

export const SignInLink = styled(Link)`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
