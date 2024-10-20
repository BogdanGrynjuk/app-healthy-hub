import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  @media screen and (${p => p.theme.mq.desktop}) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const SectionHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 24px;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 32px;
  }
`;

export const LinkToRecommendedFoodPage = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover > span {
    color: ${p => p.theme.colors.greenLite};
    transition: color 0.5 ease-in-out;
  }
`;

export const LinkText = styled.span`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0;
  color: ${props => props.theme.colors.gray};

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 22px;
  }
`;

export const LinkImage = styled.img`
  width: 16px;
  height: 16px;
`;
