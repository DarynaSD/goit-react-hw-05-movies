import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getDetailsById } from 'api/getDetailsById';
import SingleMovie from 'components/SingleMovie';

const MovieDetailsPage = () => {
    const { movieId } = useParams()
    console.log(movieId);

    const [movie, setMovie] = useState(null);
      const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetch = async () => {
        try {
          setIsLoading(true);
          const data = await getDetailsById(`${movieId}`);
          setMovie(data);
          console.log(data);
        } catch (error) {
          console.log(error.message);
        } finally {
          setIsLoading(false);
          console.log('the end');
        }
      };
      fetch();
    }, [movieId]);
    
    return (
      <div>
        <p>MovieDetailsPage</p>
        <div>
          {isLoading && 'Loading...'}
          {movie && <SingleMovie data={movie} />}
        </div>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
        <Outlet />
      </div>
    );
}

export default MovieDetailsPage


