import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const MainHeaderBlock = styled.div`
  position: relative;
  display: flex;
`;

export const BackLink = styled(Link)`
  display: flex;
  @media screen and (${props => props.theme.mq.mobile}) {
    margin-right: 8px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-right: 12px;
  }
`;

export const ArrowReturn = styled.img`
  @media screen and (${props => props.theme.mq.mobile}) {
    width: 16px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    width: 24px;
  }
`;

export const Header = styled.h1`
  font-weight: ${props => props.theme.fontWeights.medium};

  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: 24px;
    line-height: 1.25;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const Button = styled.button`
  margin-left: 12px;
  padding: 0;
  border: ${props => props.theme.borders.none};
  background-color: transparent;
  color: transparent;
  cursor: pointer;
`;

export const ToggleButton = styled.button`
  position: absolute;
  background-color: ${props => props.theme.colors.black2};
  border: ${props => props.theme.borders.none};
  padding: 16px 0 16px 12px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 4px 14px 0px #e3ffa833;
  font-family: ${props => props.theme.fontFamily.poppins};
  font-weight: ${props => props.theme.fontWeights.regular};
  text-align: left;
  color: inherit;
  z-index: 1200;

  @media screen and (${props => props.theme.mq.mobile}) {
    top: 32px;
    left: 24px;
    width: 188px;
    height: 52px;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.38;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    top: 40px;
    left: 36px;
    width: 212px;
    height: 64px;
    font-size: ${props => props.theme.fontSizes.l};
    line-height: 1.45;
  }
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const SecondHeader = styled.h3`
  font-weight: ${p => p.theme.fontWeights.medium};

  @media screen and (${props => props.theme.mq.mobile}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.38;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: 1.33;
  }
`;

export const LineChartBlock = styled.div`
  display: flex;
  @media screen and (${props => props.theme.mq.mobile}) {
    flex-direction: column;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const ChartGrid = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    overflow-x: scroll;
    &:not(:last-child) {
      margin-bottom: 27px;
    }
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    display: inline-block;
    overflow-x: hidden;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  &::-webkit-scrollbar {
    height: 7px;
    width: 100px;
  }

  &::-webkit-scrollbar-thumb {
    width: 150px;
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: ${p => p.theme.radii.normal};
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }
`;

export const ScaleChartBlock = styled.div`
  @media screen and (${props => props.theme.mq.mobile}) {
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    margin-top: 27px;
    padding-bottom: 10px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    margin-top: 40px;
    overflow-x: hidden;
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    margin-top: 20px;
  }

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-thumb {
    width: 150px;
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: ${p => p.theme.radii.normal};
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }
`;
