import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  @media screen and (${p => p.theme.mq.desktop}) {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 16px;
  font-family: ${props => props.theme.fontFamily.poppins};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 24px;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 32px;
  }
`;

export const ButtonSeeMore = styled(Link)`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.s};
    line-height: 22px;
  }
`;
