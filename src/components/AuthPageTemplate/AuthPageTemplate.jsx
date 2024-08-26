import PropTypes from 'prop-types';
import {
  Container,
  Image,
  ContentBox,
  TextContainer,
  Title,
  Text,
  CtaContainer,
  CtaText,
  CtaLink,
} from './AuthPageTemplate.styled';

import logoPic from '../../images/WelcomePageImg/logoPic.png';

const AuthPageTemplate = ({
  title,
  text,
  ctaText,
  ctaLink,
  ctaLinkText,
  children,
}) => {
  return (
    <Container>
      <Image src={logoPic} alt="Logo" />

      <ContentBox>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>

        {children}

        <CtaContainer>
          <CtaText>{ctaText}</CtaText>
          <CtaLink to={ctaLink}>{ctaLinkText}</CtaLink>
        </CtaContainer>
      </ContentBox>
    </Container>
  );
};

AuthPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaLinkText: PropTypes.string.isRequired,
};

export default AuthPageTemplate;
