import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SectionHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 24px;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 32px;
  }
`;

export const LinkToDiaryPage = styled(Link)`
  padding: 0;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fontFamily.poppins};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 22px;
  }
`;

export const SectionList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  width: 100%;
`;
