import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (${p => p.theme.mq.desktop}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    & > div:nth-child(2) {
      order: 2;
    }

    & > div:nth-child(3) {
      order: 1;
    }

    & > div:nth-child(4) {
      order: 3;
    }
  }
`;
