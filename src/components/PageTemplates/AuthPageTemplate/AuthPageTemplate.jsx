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

const AuthPageTemplate = ({
  url,
  title,
  text,
  ctaText,
  ctaLink,
  ctaLinkText,
  children,
}) => {
  const hasCtaBlock = ctaText && ctaLink && ctaLinkText;

  return (
    <Container>
      <Image src={url} alt="Banner" />

      <ContentBox $hasCtaBlock={hasCtaBlock}>
        <TextContainer>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextContainer>

        {children}

        {hasCtaBlock && (
          <CtaContainer>
            <CtaText>{ctaText}</CtaText>
            <CtaLink to={ctaLink}>{ctaLinkText}</CtaLink>
          </CtaContainer>
        )}
      </ContentBox>
    </Container>
  );
};

AuthPageTemplate.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaLinkText: PropTypes.string,
};

export default AuthPageTemplate;
