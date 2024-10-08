import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const IconArrow = styled.img`
  width: 14px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const WrapperProfileMenu = styled(BaseButton)`
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
