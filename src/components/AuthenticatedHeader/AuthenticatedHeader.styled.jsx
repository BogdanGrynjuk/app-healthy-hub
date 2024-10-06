import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
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

export const MetricMenu = styled(BaseButton)`
  cursor: pointer;
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const IconContainer = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid ${props => props.theme.colors.gray1};
  border-radius: ${props => props.theme.radii.normal};
  width: 48px;
  height: 48px;
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
`;

export const TitleMetricMenu = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const InfoBlockMetricMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const Value = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Marker = styled.span`
  color: ${p => p.theme.colors.gray};
  font-weight: ${p => p.theme.fontWeights.regular};
`;

export const IconArrow = styled.img`
  width: 14px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const IconEdit = styled.img`
  width: 16px;
`;

export const ProfileMenu = styled(BaseButton)`
  display: flex;
  align-items: center;
  column-gap: 6px;
`;

export const UserName = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  max-width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserAvatarContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 24px;
    height: 24px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 28px;
    height: 28px;
  }
`;

export const UserAvatar = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
