import styled from 'styled-components';

export const Container = styled.main`
  background-color: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fontFamily.poppins};

  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (${props => props.theme.mq.tablet}) {
    padding-top: 24px;
    padding-bottom: 40px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    padding-top: 20px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 320px;
  padding: 0 10px;

  @media screen and (${props => props.theme.mq.tablet}) {
    position: relative;
    width: 834px;
    padding: 0 27px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 1440px;
    padding: 0 34px;
  }
`;
