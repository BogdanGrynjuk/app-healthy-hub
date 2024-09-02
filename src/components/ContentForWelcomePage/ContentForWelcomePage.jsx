import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BtnBox,
  BtnSignUp,
  BtnSignIn,
  List,
  Item,
  ItemText,
} from './ContentForWelcomePage.styled';

const ContentForWelcomePage = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/signin');
  };

  const handleClickSignUp = () => {
    navigate('/signup');
  };
  return (
    <>
      <BtnBox>
        <BtnSignIn onClick={handleClickSignIn}>Sign in</BtnSignIn>
        <BtnSignUp onClick={handleClickSignUp}>Sign up</BtnSignUp>
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
