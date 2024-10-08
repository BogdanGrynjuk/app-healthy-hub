import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const WrapperMetricMenu = styled(BaseButton)`
  cursor: pointer;
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const IconContainer = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid ${props => props.theme.colors.gray1};
  border-radius: ${props => props.theme.radii.normal};
  width: 48px;
  height: 48px;
`;

export const IconMetric = styled.img`
  width: 28px;
  height: 28px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
`;

export const TitleMetricMenu = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.semiBold};
`;

export const InfoBlockMetricMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

export const Value = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Unit = styled.span`
  color: ${p => p.theme.colors.gray};
  font-weight: ${p => p.theme.fontWeights.regular};
`;

export const IconArrow = styled.img`
  width: 14px;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

export const IconEdit = styled.img`
  width: 16px;
`;
