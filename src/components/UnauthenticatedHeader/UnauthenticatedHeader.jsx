import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { clearError } from 'redux/Auth/authSlice';
import {
  ActiveLink,
  DefaultLink,
  LogoBox,
  Unauthorized,
} from './UnauthenticatedHeader.styled';

import avatar from 'images/icons/profile-circle.svg';

const UnauthenticatedHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState(location.pathname);
  const handlerNavigationLinkClick = () => {
    dispatch(clearError());
  };

  useEffect(() => {
    // Update currentURL when the URL changes
    setCurrentURL(location.pathname);
  }, [location]);
  return (
    <>
      <LogoBox>
        <Link to={'/'} onClick={handlerNavigationLinkClick}>
          HealthyHub
        </Link>
      </LogoBox>
      {currentURL.endsWith('/signin') ? (
        <Unauthorized>
          <ActiveLink to={'/signin'} onClick={handlerNavigationLinkClick}>
            Sign in
          </ActiveLink>
          <p> / </p>
          <DefaultLink to={'/signup'} onClick={handlerNavigationLinkClick}>
            Sign up
          </DefaultLink>
          <img src={avatar} alt="weight" width={28} />
        </Unauthorized>
      ) : currentURL.endsWith('/signup') ? (
        <Unauthorized>
          <DefaultLink to={'/signin'} onClick={handlerNavigationLinkClick}>
            Sign in
          </DefaultLink>
          <p> / </p>
          <ActiveLink to={'/signup'} onClick={handlerNavigationLinkClick}>
            Sign up
          </ActiveLink>
          <img src={avatar} alt="weight" width={28} />
        </Unauthorized>
      ) : (
        <Unauthorized>
          <DefaultLink to={'/signin'} onClick={handlerNavigationLinkClick}>
            Sign in
          </DefaultLink>
          <p> / </p>
          <DefaultLink to={'/signup'} onClick={handlerNavigationLinkClick}>
            Sign up
          </DefaultLink>
          <img src={avatar} alt="weight" width={28} />
        </Unauthorized>
      )}
    </>
  );
};

export default UnauthenticatedHeader;
