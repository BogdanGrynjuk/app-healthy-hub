import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  row-gap: 24px;
  width: 300px;
  height: ${({ $hasCtaBlock }) => ($hasCtaBlock ? '450px' : 'auto')};
  font-family: ${p => p.theme.fontFamily.poppins};
  color: ${props => props.theme.colors.gray};

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 450px;
    height: ${({ $hasCtaBlock }) => ($hasCtaBlock ? '550px' : 'auto')};
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 80px;
    height: ${({ $hasCtaBlock }) => ($hasCtaBlock ? '600px' : 'auto')};
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.l2};
  line-height: 1.25;
  color: ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.mq.desktop}) {
    text-align: left;
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  width: 300px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  text-align: center;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 450px;
    font-size: ${p => p.theme.fontSizes.l};
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    text-align: left;
    line-height: 1.45;
  }
`;

export const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    justify-content: flex-start;
  }
`;

export const CtaText = styled.p`
  font-weight: ${p => p.theme.fontWeights.regular};
`;

export const CtaLink = styled(Link)`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.medium};

  &:hover {
    color: ${p => p.theme.colors.greenLite};
  }
`;
