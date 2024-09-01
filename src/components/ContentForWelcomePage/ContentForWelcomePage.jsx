import React from 'react';
import { Link } from 'react-router-dom';
import {
  BtnBox,
  BtnSignUp,
  BtnSignIn,
  List,
  Item,
  ItemText,
} from './ContentForWelcomePage.styled';

const ContentForWelcomePage = () => {
  return (
    <>
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
    </>
  );
};

export default ContentForWelcomePage;
