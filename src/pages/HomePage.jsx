import React, { useEffect, useState } from 'react'

import { findTrending } from 'api/getTrending';
import MoviesList from 'components/MoviesList';

const HomePage = () => {
  const [trending, setTrending] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
//  trending for home
  useEffect( () => {
     const fetch = async () => {
       try {
         setIsLoading(true)
         const data = await findTrending();
         setTrending(data.results);
         console.log(data);
         console.log(data.results);
         console.log('finding');
       } catch (error) {
         console.log(error.message);
         console.log('error');
       } finally {
         setIsLoading(false);
         console.log('the end');
       }
    };
  fetch();
    }, []);
    
  return (
    <div>
      {isLoading && 'Loading...'}
      {trending && <MoviesList data={trending} />}
    </div>
  );
}

export default HomePage
