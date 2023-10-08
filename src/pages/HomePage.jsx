import React, { useEffect, useState } from 'react'

import { findTrending } from 'api/getTrending';
import MoviesList from 'components/MoviesList';
import { Home } from 'components/Parts.styled';

const HomePage = () => {
  const [trending, setTrending] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
//  trending for home
  useEffect( () => {
     const fetch = async () => {
       try {
         setIsLoading(true)
         const data = await findTrending();
         setTrending(data.results);
       } catch (error) {
         setError(error.message);
       } finally {
         setIsLoading(false);
         //console.log('the end');
       }
    };
  fetch();
    }, []);
    
  return (
    <Home>
      {isLoading && 'Loading...'}
      {error && <p>{ error}</p>}
      {trending && <MoviesList data={trending} />}
    </Home>
  );
}

export default HomePage
