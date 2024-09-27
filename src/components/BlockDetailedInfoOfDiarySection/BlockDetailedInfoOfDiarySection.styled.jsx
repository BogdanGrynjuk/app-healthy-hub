import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${p => p.theme.colors.black2};
  border-radius: ${p => p.theme.radii.normal};
  height: 232px;
  padding: 16px 12px;

  @media screen and (${p => p.theme.mq.tablet}) {
    height: 240px;
    padding: 32px 14px;
  }
`;

export const FoodList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  height: 200px;
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: ${p => p.theme.radii.normal};
    border: 1px solid rgba(227, 255, 168, 0.2);

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    }
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    height: 176px;
    row-gap: 32px;
  }
`;

export const FoodItem = styled.li``;
