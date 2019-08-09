import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'rebass';
import { Tooltip } from 'react-tippy';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props =>
    props.invert ? props.theme.colors.background : props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const SocialLink = ({ fontAwesomeIcon, name, url, invert }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter">
    <IconLink href={url} target="_blank" invert={invert}>
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
);

SocialLink.propTypes = {
  fontAwesomeIcon: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  invert: PropTypes.bool,
};

export default SocialLink;
