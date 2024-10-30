import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 250px;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 676px;
    height: 300px;
    padding: 24px;
  }

  &.active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`;

export const ModalTitle = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.l2};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 30px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.white};

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 36px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row-reverse;
  }
`;

export const CustomLink = styled(Link)`
  padding: 8px 10px;
  width: 100%;
  background-color: ${p => p.theme.colors.greenLite};
  color: ${p => p.theme.colors.black2};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.normal};
  text-align: center;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 212px;
  }
`;

export const ButtonCancel = styled.button`
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${p => p.theme.colors.gray};
  cursor: pointer;

  &:hover {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 212px;
  }
`;
