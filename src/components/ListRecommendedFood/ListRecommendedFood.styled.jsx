import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  flex-basis: 100%;

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-basis: calc((100% - 20px) / 2);
  }
`;
