import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ChartBox = styled.div`
  width: 48px;
  height: 48px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 160px;
  gap: 2px;
`;

export const Title = styled.h4`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};
`;

export const CounterList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Counter = styled.p`
  display: flex;
  column-gap: 4px;
  width: calc((100% - 12px) / 2);
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};
`;

export const CounterValue = styled.span`
  color: ${props =>
    props.$isGoalExceeded ? '#E74A3B' : props.theme.colors.gray};
`;
