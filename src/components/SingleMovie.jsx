import React from 'react';
import { InfoWrapper, SingleImg, Wrapper } from './Parts.styled';
//import { Link } from 'react-router-dom';

const SingleMovie = ({ data }) => {
  //console.log({ data })
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const { poster_path, title, vote_average, overview, genres } = data;
  return (
    <InfoWrapper>
      <div>
        <SingleImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </div>

      <Wrapper>
        <h1>{title}</h1>
        <h3>User score: {vote_average}</h3>
        <p>{overview}</p>
        <div>
          <h2>Genres:</h2>
          <ul>
            {genres.map(one => (
              <li key={one.id}>{one.name}</li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </InfoWrapper>
  );
};

export default SingleMovie;
