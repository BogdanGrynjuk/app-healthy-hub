import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.black2};

  @media screen and (${props => props.theme.mq.mobile}) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 26px;
    padding-bottom: 26px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  width: 320px;
  padding: 0 10px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;
