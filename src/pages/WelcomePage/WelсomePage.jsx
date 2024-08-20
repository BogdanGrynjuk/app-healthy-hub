import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Image,
  ContentBox,
  Title,
  Text,
  BtnBox,
  BtnSignUp,
  BtnSignIn,
  List,
  Item,
  ItemText,
} from './WelcomePage.styled';
import logoPic from '../../images/WelcomePageImg/logoPic.png';

const WelcomePage = () => {
  return (
    <Container>
      <Image src={logoPic} alt="Reg Logo" />
      <ContentBox>
        <Title>Set goals and achieve them</Title>
        <Text>The service will help you set goals and follow them.</Text>

        <BtnBox>
          <BtnSignIn>
            <Link to={'/signin'}>Sign in</Link>
          </BtnSignIn>

          <BtnSignUp>
            <Link to={'/signup'}>Sign up</Link>
          </BtnSignUp>
        </BtnBox>

        <List>
          <Item>
            <ItemText>Set goals</ItemText>
          </Item>

          <Item>
            <ItemText>Watch your calories</ItemText>
          </Item>

          <Item>
            <ItemText>Keep track of your water intake</ItemText>
          </Item>

          <Item>
            <ItemText>Control your weight</ItemText>
          </Item>
        </List>
      </ContentBox>
    </Container>
  );
};

export default WelcomePage;
