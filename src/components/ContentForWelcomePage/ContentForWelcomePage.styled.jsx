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
