import { Link } from 'react-router-dom';
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
  transform: translate(0, 0px) scale(0);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  &.active {
    transform: translate(0, 0px) scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: translate(0, 0px) scale(0);
    opacity: 0;
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    top: 100px;
    width: 160px;
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
  row-gap: 24px;
`;

export const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 8px;

  &:hover > span {
    color: ${p => p.theme.colors.greenLite};
    transition: color 0.5 ease-in-out;
  }
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

export const Title = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.white};
`;
