import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100%;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.regular};
  line-height: 24px;
  letter-spacing: 0em;
  color: ${props => props.theme.colors.white};
`;

export const InfoBox = styled.div`
  padding: 16px 12px;
  background-color: ${props => props.theme.colors.black2};
  border-radius: ${props => props.theme.radii.normal};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  flex-grow: 1;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const ChartBox = styled.div`
  width: 168px;
  height: 168px;
`;

export const NutrientList = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  gap: 12px;
`;
