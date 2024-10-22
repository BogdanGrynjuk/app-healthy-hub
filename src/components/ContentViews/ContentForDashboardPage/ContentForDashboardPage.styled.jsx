import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MainHeaderBlock = styled.div`
  position: relative;
  display: flex;
`;

export const LinkToBack = styled(NavLink)`
  display: flex;
  margin-right: 8px;

  @media screen and (${p => p.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  width: 16px;
  transform: rotate(180deg);

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const ButtonToggleDropdown = styled.button`
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding: 0;
  border: ${p => p.theme.borders.none};
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
`;

export const TitlePage = styled.h1`
  font-size: ${p => p.theme.fontSizes.l2};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.25;
  letter-spacing: 0em;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const DropdownPeriodToggle = styled.button`
  position: absolute;
  background-color: ${p => p.theme.colors.black2};
  border: ${p => p.theme.borders.none};
  padding: 16px 0 16px 12px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 4px 14px 0px #e3ffa833;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  text-align: left;
  color: inherit;
  z-index: 1000;
  top: 32px;
  left: 24px;
  width: 188px;
  height: 52px;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.38;

  opacity: 0;
  transform: scale(0);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;
  will-change: transform, opacity;

  &.active {
    transform: scale(1);
    opacity: 1;
  }

  &:not(.active) {
    transform: scale(0);
    opacity: 0;
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    top: 40px;
    left: 36px;
    width: 212px;
    height: 64px;
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.45;
  }
`;

export const SecondHeader = styled.h3`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.38;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.33;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 27px;

  @media screen and (${p => p.theme.mq.tablet}) {
    gap: 40px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 20px;

    & > div:first-child {
      grid-column: 1 / 2;
    }

    & > div:nth-child(2) {
      grid-column: 2 / 3;
    }

    & > div:nth-child(3) {
      grid-column: 1 / 3;
    }
  }
`;
