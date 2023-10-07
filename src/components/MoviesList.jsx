import React from 'react'


import MoviesListItem from './MoviesListItem';



const MoviesList = ({ data }) => {
  // const [searchParams] = useSearchParams();
  // const query = searchParams.get('serach');
  // console.log('query :>>', query)

  return (
    <ul>
      {data.map(({ title, id, poster_path }) => (
        <li key={id}>
          <MoviesListItem title={title} id={id} poster_path={poster_path} />
        </li>
      ))}
    </ul>
  );
    }

export default MoviesList

