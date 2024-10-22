import styled from 'styled-components';

export const Chart = styled.div`
  display: flex;
  row-gap: 6px;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 320px;
  }
`;

export const ChartTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.44;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.45;
  }
`;

export const ValueDisplay = styled.span`
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;
`;

export const MetricValue = styled.span`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;
  color: ${p => p.theme.colors.gray};
`;

export const ScrollWrapper = styled.div`
  width: 300px;
  overflow-x: scroll;
  padding-bottom: 10px;

  @media screen and (${p => p.theme.mq.tablet}) {
    column-gap: 6px;
    width: calc(834px - (24px * 2));
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc(1440px);
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

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  column-gap: 20px;
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  width: 1440px;
  padding: 24px 24px 20px;

  @media screen and (${p => p.theme.mq.tablet}) {
    column-gap: 6px;
    width: calc(834px - (24px * 2));
    padding: 24px 20px 44px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc(1440px - (34px * 2));
    padding: 24px 24px 36px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};

  @media screen and (${p => p.theme.mq.tablet}) {
    row-gap: 12px;
  }
  @media screen and (${p => p.theme.mq.desktop}) {
    row-gap: 16px;
  }
`;

export const ItemValue = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.43;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: 1.6;
  }
  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.43;
  }
`;
export const ItemDate = styled.span`
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: 1.4;
  color: ${p => p.theme.colors.gray};
`;
