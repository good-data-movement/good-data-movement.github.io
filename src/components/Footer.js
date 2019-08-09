import React from 'react';
import styled from '@emotion/styled';
import { Text, Box, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';
import socialLinks from '../static/social';

const FooterContainer = styled.footer`
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const TextFooter = styled(Text)`
  color: ${props => props.theme.colors.background};

  & a {
    color: ${props => props.theme.colors.background};
  }
`;

const Footer = () => (
  <Box p={3} backgroundColor="primaryDark">
    <FooterContainer>
      <Fade left>
        <TextFooter>
          <span>GDM Website - Powered by </span>
          <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </TextFooter>
      </Fade>
      <Flex>
        <Fade right>
          {socialLinks.map(({ id, ...rest }) => (
            <Box key={id} mx={2} fontSize={4}>
              <SocialLink {...rest} invert />
            </Box>
          ))}
        </Fade>
      </Flex>
    </FooterContainer>
  </Box>
);

export default Footer;
