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

export const Modal = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  width: 300px;
  padding: 24px;
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 4px 14px 0 rgba(227, 255, 168, 0.2);
  opacity: 0;
  transform: translate(-50%, 0px) scale(0);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  &.active {
    transform: translate(-50%, 0px) scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: translate(-50%, 0px) scale(0);
    opacity: 0;
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
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
