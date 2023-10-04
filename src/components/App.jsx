import React from 'react';
//import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// import { serchMoviesByQuery } from 'api/serchMoviesByQuery';
import Layout from 'layuot/Layout';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage'
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

const App = () => {
  //const [trending, setTrending] = useState(null);
  // const [searchQuery, setSearchQuery] = useState('comedy');

  //trending for home
  // useEffect( () => {
  //    const fetch = async () => {
  //      try {
  //        const data = await findTrending();
  //        setTrending(data);
  //        console.log(data);
  //        console.log(data.results);
  //      } catch (error) {
  //        console.log(error.message);
  //      } finally {
  //        console.log('the end');
  //      }
  //   };
  // fetch();
  // }, []);

  //movie by query
  // useEffect(() => {
  //   const fetchByQuery = async () => {
  //     try {
  //       const data = await serchMoviesByQuery(searchQuery);
  //       //setTrending(data);
  //       console.log(data);
  //       console.log(searchQuery);
  //     } catch (error) {
  //       console.log(error.message);
  //     } finally {
  //       console.log('the end');
  //     }
  //   };
  //   fetchByQuery();
  // }, [searchQuery]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="movies" element={<MoviesPage />} />

        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
    // <div>
    //     <div trending={trending}>{trending}</div>;
    //     <div query={searchQuery}>{searchQuery}</div>;
    // </div>
  );
};

export default App;
