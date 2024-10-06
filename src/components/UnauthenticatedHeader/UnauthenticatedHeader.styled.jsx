import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Logo = styled(Link)`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.gray};

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: ${p => p.theme.colors.white};
`;

export const NavigationLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.greenLite};
  }
`;
