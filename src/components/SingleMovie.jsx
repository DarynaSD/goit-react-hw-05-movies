import React from 'react'
//import { Link } from 'react-router-dom';

const SingleMovie = ({ data }) => {
    //console.log({ data })
    const defaultImg =
        'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    const { poster_path, title, vote_average, overview, genres } = data;
    return (
      <section>
        
        <h1>{title}</h1>
        <p>User score: {vote_average}</p>
        <p>{overview}</p>
            <div>
                <p>Genres:</p>
                <ul>
                    {genres.map(one => (<li key={one.id}>{ one.name}</li>))}
                </ul>
                </div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          alt={title}
        />
      </section>
    );
}

export default SingleMovie
