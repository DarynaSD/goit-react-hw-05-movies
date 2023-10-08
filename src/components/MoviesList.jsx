import React from 'react'


import MoviesListItem from './MoviesListItem';
import { Item, List } from './Parts.styled';



const MoviesList = ({ data }) => {
  // const [searchParams] = useSearchParams();
  // const query = searchParams.get('serach');
  // console.log('query :>>', query)

  return (
    <List>
      {data.map(({ title, id, poster_path }) => (
        <Item key={id}>
          <MoviesListItem title={title} id={id} poster_path={poster_path} />
        </Item>
      ))}
    </List>
  );
    }

export default MoviesList

