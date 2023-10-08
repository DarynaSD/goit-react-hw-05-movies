import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ItemText, ItemTextWrap } from './Parts.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesListItem = ({ title, id, poster_path }) => {
    
    const location = useLocation();
    
  return (
    <Link to={`/movies/${id}`} state={location}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        alt={title}
      />
      <ItemTextWrap>
        <ItemText>{title}</ItemText>
      </ItemTextWrap>
    </Link>
  );
};

export default MoviesListItem
