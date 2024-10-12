import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: calc(320px - (2 * 10px));

  @media screen and (${props => props.theme.mq.tablet}) {
    width: calc(834px - (2 * 27px));
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: calc(1440px - (2 * 34px));
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  padding: 24px;
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  opacity: 0;
  transform: translate(0, 0) scale(0);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;
  color: ${p => p.theme.colors.white};

  &.active {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }

  @media screen and (${props => props.theme.mq.tablet}) {
    top: 100px;
    right: calc(513px - 392px);
    width: 392px;
    height: 200px;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    right: 0;
  }
`;

export const ButtonClose = styled(BaseButton)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const IconClose = styled.img`
  width: 16px;
  height: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.gray};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.xs};
  margin-bottom: 16px;
  max-width: 284px;
`;

export const CurrentDate = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};

  & > span {
    color: ${p => p.theme.colors.gray};
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
