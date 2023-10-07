import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesListItem = ({ title, id, poster_path }) => {
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get('search');
    //     console.log('query :>>', query)
    
    const location = useLocation();
    //console.log('loc :>>', location);
    
  return (
    <Link to={`/movies/${id}`} state={location}>
      <p>{title}</p>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        alt={title}
        width={250}
      />
    </Link>
  );
};

export default MoviesListItem
