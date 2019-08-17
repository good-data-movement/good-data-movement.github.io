import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box } from 'rebass';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import {
  MEDIA_QUERY_SMALL,
  CardTag,
  CardImage,
  CardImageContainer,
  CardTextContainer,
  CardContainer,
  Card,
} from '../components/Card';
import SocialLink from '../components/SocialLink';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';
import Hide from '../components/Hide';

import people from '../static/people';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      invertX
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const Person = ({ name, description, social, type, joinedDate, logo }) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <CardTextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
          {description}
        </Text>
      </CardTextContainer>

      <CardImageContainer>
        <CardImage src={logo.image.src} alt={logo.title} />
        <CardTag>
          <Flex
            style={{
              float: 'right',
            }}
          >
            <Fade right>
              {social.map(({ id, ...rest }) => (
                <Box key={id} mx={1} fontSize={5}>
                  <SocialLink {...rest} invert />
                </Box>
              ))}
            </Fade>
          </Flex>
          <ImageSubtitle
            bg="primaryLight"
            color="white"
            y="bottom"
            x="right"
            round
          >
            {type}
          </ImageSubtitle>
          <Hide query={MEDIA_QUERY_SMALL}>
            <ImageSubtitle bg="backgroundDark">{joinedDate}</ImageSubtitle>
          </Hide>
        </CardTag>
      </CardImageContainer>
    </Flex>
  </Card>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  joinedDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

const People = () => (
  <Section.Container id="people" Background={Background}>
    <Section.Header name="People" icon="🙋‍♂️" Box="notebook" />
    <CardContainer minWidth="350px">
      {people.map((p, i) => (
        <Fade bottom delay={i * 200} key={p.id}>
          <Person {...p} />
        </Fade>
      ))}
    </CardContainer>
  </Section.Container>
);

export default People;
