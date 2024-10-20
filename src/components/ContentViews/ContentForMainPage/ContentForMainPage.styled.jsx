import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderMainPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (${props => props.theme.mq.tablet}) {
    margin-bottom: 24px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    margin-bottom: 16px;
  }
`;

export const TitlePage = styled.h1`
  font-size: 24px;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
`;

export const LinkToDashboard = styled(Link)`
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

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    flex-basis: calc((100% - 20px) / 2);
  }
`;
