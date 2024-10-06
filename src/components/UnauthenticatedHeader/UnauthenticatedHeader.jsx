import React from 'react';
import { useDispatch } from 'react-redux';

import { clearError } from 'redux/Auth/authSlice';

import {
  Logo,
  Navigation,
  NavigationLink,
} from './UnauthenticatedHeader.styled';

const UnauthenticatedHeader = () => {
  const dispatch = useDispatch();

  const handlerNavigationLinkClick = () => {
    dispatch(clearError());
  };

  return (
    <>
      <Logo to={'/'} onClick={handlerNavigationLinkClick}>
        HealthyHub
      </Logo>

      <Navigation>
        <NavigationLink to="/signin" onClick={handlerNavigationLinkClick}>
          Sign in
        </NavigationLink>
        <span> / </span>
        <NavigationLink to="/signup" onClick={handlerNavigationLinkClick}>
          Sign up
        </NavigationLink>
      </Navigation>
    </>
  );
};

export default UnauthenticatedHeader;
