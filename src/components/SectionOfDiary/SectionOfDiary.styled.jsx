import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (${p => p.theme.mq.tablet}) {
    gap: 6px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc((100% - 20px) / 2);
  }
`;
