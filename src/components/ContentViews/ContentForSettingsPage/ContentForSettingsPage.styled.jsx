import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderPage = styled.div`
  display: flex;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    column-gap: 160px;
  }
`;

export const BannerThumb = styled.div`
  margin-bottom: 24px;
  width: 300px;
  height: 312px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
    height: 396px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 536px;
    height: 560px;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
