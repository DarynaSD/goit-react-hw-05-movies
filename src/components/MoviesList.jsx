import React from 'react'

import { Link } from 'react-router-dom';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MoviesList = ({data}) => {
  return (
    <div>
      <div>Movie List</div>
      <ul>
        {data.map(({title, id, poster_path}) => (
          <li key={id}>
            <Link to={`movies/${id}`}>
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList

