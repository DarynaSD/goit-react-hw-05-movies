import React, { useEffect, useState } from 'react'

import { findTrending } from 'api/getTrending';
import MoviesList from 'components/MoviesList';

const HomePage = () => {
    const [trending, setTrending] = useState(null)
//  trending for home
  useEffect( () => {
     const fetch = async () => {
       try {
         const data = await findTrending();
         setTrending(data);
         console.log(data);
         console.log(data.results);
       } catch (error) {
         console.log(error.message);
       } finally {
         console.log('the end');
       }
    };
  fetch();
    }, []);
    
  return <MoviesList data={trending}/>;
}

export default HomePage
