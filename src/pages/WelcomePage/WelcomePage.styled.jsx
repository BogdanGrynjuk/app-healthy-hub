import styled from 'styled-components';

const BaseButton = styled.button`
  width: 140px;
  padding: 8px 10px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 20px;
  cursor: pointer;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 210px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: 190px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  padding: 24px 0;
  background-color: ${props => props.theme.colors.black};

  @media screen and (${props => props.theme.mq.desktop}) {
    row-gap: 60px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 100px;
    justify-content: center;
    padding: 40px 0;
  }
`;

export const Image = styled.img`
  width: 300px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 380px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    width: 590px;
    height: 590px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 450px;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  color: ${props => props.theme.colors.white};
  font-family: Poppins;
  font-weight: ${props => props.theme.fontWeights.medium};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l2};
  line-height: 1.25;

  @media screen and (${props => props.theme.mq.desktop}) {
    text-align: left;
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  width: 300px;
  margin-bottom: 24px;
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.33;
  text-align: center;
  color: ${props => props.theme.colors.gray};

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 450px;
    font-size: ${p => p.theme.fontSizes.m};
  }
  @media screen and (${props => props.theme.mq.desktop}) {
    text-align: left;
    line-height: 1.45;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  column-gap: 16px;
  margin-bottom: 40px;

  @media screen and (${props => props.theme.mq.tablet}) {
    width: 350px;
    margin: 0 auto 80px auto;
  }

  @media screen and (${props => props.theme.mq.desktop}) {
    column-gap: 38px;
    margin-bottom: 80px;
  }
`;

export const BtnSignIn = styled(BaseButton)`
  background-color: ${p => p.theme.colors.greenLite};
  color: ${p => p.theme.colors.black2};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  border-radius: ${p => p.theme.radii.normal};
`;

export const BtnSignUp = styled(BaseButton)`
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};

  &:hover {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.greenLite};
  }
`;

export const List = styled.ul`
  & > li:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 834px) and (max-width: 1439px) {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    row-gap: 16px;

    & > li:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;

export const Item = styled.li`
  position: relative;
  padding-left: 16px;

  &::before {
    content: ' ';
    position: absolute;
    width: 8px;
    height: 8px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: ${p => p.theme.colors.greenLite};
  }
`;

export const ItemText = styled.p`
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.poppins};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 20px;
`;
