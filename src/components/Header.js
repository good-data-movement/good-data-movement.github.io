import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image } from 'rebass';
import styled from '@emotion/styled';
import { SectionLinks } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
import Logo from '../static/gatsby-icon.png';
import { navigate } from '@reach/router';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.primaryDark};
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = ({ currentPath }) => (
  <HeaderContainer>
    <Fade top>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = home ? (
              <Image
                src={Logo}
                width="50px"
                alt="Portfolio Logo"
                onClick={home.onClick}
                style={{
                  cursor: 'pointer',
                }}
              />
            ) : (
              <Image
                src={Logo}
                width="50px"
                alt="Portfolio Logo"
                onClick={() => navigate('/')}
                style={{
                  cursor: 'pointer',
                }}
              />
            );

            const peopleLink = (
              <RouteLink
                key="People"
                onClick={() => navigate('/people')}
                selected={currentPath == '/people'}
              >
                People
              </RouteLink>
            );

            let navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                {name}
              </RouteLink>
            ));
            return (
              <Fragment>
                {homeLink}
                <Flex mr={[0, 3, 5]}>
                  <Flex>{navLinks}</Flex>
                  {/* Other links*/}
                  {peopleLink}
                  <Flex></Flex>
                </Flex>
              </Fragment>
            );
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
);

export default Header;
