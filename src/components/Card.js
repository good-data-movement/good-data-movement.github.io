import styled from '@emotion/styled';
import { Image, Card as CardRebass } from 'rebass';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const Card = styled(CardRebass)`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  &:hover {
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

Card.defaultProps = {
  bg: 'white',
  boxShadow: 0,
  borderRadius: 8,
};

export const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${props => props.height});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${props => props.height} / 2));
  }
`;

CardTextContainer.defaultProps = { height: '200px' };

export const CardImageContainer = styled.div`
  margin: auto;
  width: ${props => props.height};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${props => props.height} / 2);
  }
`;

CardImageContainer.defaultProps = { height: '200px' };

export const CardImage = styled(Image)`
  width: ${props => props.height};
  height: ${props => props.height};
  padding: 40px;
  margin-top: 0px;

  ${MEDIA_QUERY_SMALL} {
    height: calc(${props => props.height} / 2);
    width: calc(${props => props.height} / 2);
    margin-top: calc(${props => props.height} / 4);
    padding: 10px;
  }
`;

CardImage.defaultProps = { height: '200px' };

export const CardTag = styled.div`
  position: relative;
  height: ${props => props.height};
  top: calc(
    -${props => props.height} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */

  ${MEDIA_QUERY_SMALL} {
    top: calc(
      -${props => props.height} - 3.5px + (${props => props.height} / 4)
    );
  }
`;

CardTag.defaultProps = { height: '200px' };

export default Card;
