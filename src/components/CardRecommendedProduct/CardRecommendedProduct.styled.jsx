import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 20px 24px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.black2};
`;

export const ImgThumb = styled.div`
  width: 46px;
  height: 46px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 2px;
`;

export const ProductName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;
`;

export const Value = styled.p`
  margin-right: 6px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 20px;
  letter-spacing: 0em;

  & > span {
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.gray};
  }
`;
