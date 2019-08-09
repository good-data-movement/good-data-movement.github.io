import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import 'react-tippy/dist/tippy.css';
import colors from '../../colors';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCoffee, faGlobe);

const globalStyles = css`
  *,
  *::after,
  *::before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    font-family: Cabin;
    overflow-x: hidden;
  }
`;

const Layout = ({ children }) => (
  <Fragment>
    <Global styles={globalStyles} />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>{children}</ScrollingProvider>
    </ThemeProvider>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
