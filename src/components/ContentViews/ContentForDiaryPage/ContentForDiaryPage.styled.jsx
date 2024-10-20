import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderPage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const LinkToBack = styled(NavLink)`
  display: flex;
  margin-right: 8px;

  @media screen and (${props => props.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  width: 16px;
  transform: rotate(180deg);

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const TitlePage = styled.h1`
  font-size: ${p => p.theme.fontSizes.l2};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 1.25;
  letter-spacing: 0em;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;
