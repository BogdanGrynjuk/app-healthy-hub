import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const MainMenuContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const Logo = styled(Link)`
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.gray};

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const MainMenu = styled(BaseButton)`
  @media screen and (${props => props.theme.mq.tablet}) {
    display: none;
  }
`;

export const MainMenuImage = styled.img`
  width: 16px;
`;

export const UserMetricsSection = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 513px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    width: 604px;
  }
`;

export const MetricsSection = styled.div`
  display: none;

  @media screen and (${props => props.theme.mq.tablet}) {
    display: flex;
    column-gap: 40px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    column-gap: 80px;
  }
`;
