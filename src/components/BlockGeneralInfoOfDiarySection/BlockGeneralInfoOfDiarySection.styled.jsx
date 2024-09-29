import styled from 'styled-components';

export const Container = styled.header`
  @media screen and (${p => p.theme.mq.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (${p => p.theme.mq.tablet}) {
    margin-bottom: 0;
  }
`;

export const ThumbImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 26px;

  @media screen and (${props => props.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 32px;
  }
`;

export const Info = styled.div`
  display: flex;
  row-gap: 12px;
  column-gap: 20px;
  flex-wrap: wrap;

  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 20px;

  @media screen and (${p => p.theme.mq.tablet}) {
    margin-right: 110px;
    flex-wrap: nowrap;
  }
`;

export const CarbohydratesWrap = styled.p`
  width: 100%;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: auto;
  }
`;

export const ProteinWrap = styled.p`
  width: auto;
`;

export const FatWrap = styled.p`
  width: auto;
`;

export const Value = styled.span`
  color: ${props => props.theme.colors.gray};
  font-weight: ${p => p.theme.fontWeights.medium};
`;
