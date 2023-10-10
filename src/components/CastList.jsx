import React from 'react'
import { ActorWrap, CastItem, CastUl } from './Parts.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CastList = ({ castData }) => {

  return (
    <CastUl>
      {castData.map(({ id, character, name, profile_path }) => (
        <CastItem key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : defaultImg
            }
            alt={name}
            width={250}
          />
          <ActorWrap>
            <h4>{name}</h4>
            <p>Character: {character}</p>
          </ActorWrap>
        </CastItem>
      ))}
    </CastUl>
  );
};

export default CastList
