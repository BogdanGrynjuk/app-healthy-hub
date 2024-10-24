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
  margin-bottom: 6px;

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
  width: calc(320px - (10px * 2));
  overflow-x: scroll;
  padding-bottom: 10px;

  @media screen and (${p => p.theme.mq.tablet}) {
    column-gap: 6px;
    width: calc(834px - (24px * 2));
    overflow-x: hidden;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc((1440px - (34px * 2)) / 2 - 10px);
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
  position: relative;
  padding: 24px 20px 24px 14px;
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  width: 676px;
  height: 382px;

  & canvas {
    position: absolute;
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 780px;

    & canvas {
      min-width: calc(780px - 34px);
      min-height: auto;
      margin: 0 auto;
    }
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: 676px;

    & canvas {
      min-width: calc(676px - 34px);
    }
  }
`;

export const ChartTooltip = styled.div`
  width: 90px;
  position: absolute;
  opacity: 0;
  padding: 8px 6px;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.black2};
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2px;
`;

export const TooltipValue = styled.span`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.19;
`;

export const TooltipMetric = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 1.43;
  color: ${p => p.theme.colors.gray};
`;
