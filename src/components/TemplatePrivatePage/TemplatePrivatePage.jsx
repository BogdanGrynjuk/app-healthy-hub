import React from 'react';
import { Container, Content } from './TemplatePrivatePage.styled';
import PropTypes from 'prop-types';

const TemplatePrivatePage = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

TemplatePrivatePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplatePrivatePage;
