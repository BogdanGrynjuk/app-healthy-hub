import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';

import { Container, Content } from './Header.styled';

import AuthenticatedHeader from 'components/AuthenticatedHeader';
import UnauthenticatedHeader from 'components/UnauthenticatedHeader';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <Content>
        {isLoggedIn ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
      </Content>
    </Container>
  );
};

export default Header;
