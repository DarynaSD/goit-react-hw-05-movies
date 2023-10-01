import React from 'react';
//import { useEffect, useState } from 'react';

// import MoviesList from 'components/MoviesList';
// import { serchMoviesByQuery } from 'api/serchMoviesByQuery';

const MoviesPage = () => {
    // const [findedMovies, setFindedMovies] = useState(null);
    // const [searchQuery, setSearchQuery] = useState('comedy');

    //   useEffect(() => {
    //     const fetchByQuery = async () => {
    //       try {
    //         const data = await serchMoviesByQuery(searchQuery);
    //         //setTrending(data);
    //         console.log(data);
    //           console.log(searchQuery);
    //           setFindedMovies(data)
    //       } catch (error) {
    //         console.log(error.message);
    //       } finally {
    //         console.log('the end');
    //       }
    //     };
    //     fetchByQuery();
    //   }, [searchQuery]);

  return (
    <div>
      {/* serchForm */}
          {/* <MoviesList data={findedMovies}></MoviesList> */}
          MOvies Page
    </div>
  );
}

export default MoviesPage
