import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const SectionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* margin-bottom: 20px; */

  @media screen and (${props => props.theme.mq.tablet}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const SectionItem = styled.li`
  flex-basis: 100%;

  &:not(:last-of-type) {
    @media screen and (${props => props.theme.mq.tablet}) {
      flex-basis: calc((100% - 20px) / 2);
    }
  }

  &:nth-child(1) {
    @media screen and (${props => props.theme.mq.desktop}) {
      flex-basis: 328px;
    }
  }

  &:nth-child(2) {
    @media screen and (${props => props.theme.mq.desktop}) {
      flex-basis: 444px;
    }
  }

  &:nth-child(3) {
    @media screen and (${props => props.theme.mq.desktop}) {
      flex-basis: 560px;
    }
  }
`;
