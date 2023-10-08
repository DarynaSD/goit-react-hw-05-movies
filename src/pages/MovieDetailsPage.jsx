import React, { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { getDetailsById } from 'api/getDetailsById';
import SingleMovie from 'components/SingleMovie';
import { Det } from 'components/Parts.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log('detailesPage', movieId);

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  //console.log('loc detailed :>>', location);

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(location.state);
    //console.log('locState :>>', location.state);
  };

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
    <Det>
      <button type="button" onClick={handleBackClick}>
        Go back
      </button>
      <div>
        {isLoading && 'Loading...'}
        {movie && <SingleMovie data={movie} />}
      </div>
      <Link to="cast" state={location.state} >
        Cast
      </Link>
      <Link to="reviews" state={location.state}>
        Reviews
      </Link>
      <Outlet />
    </Det>
  );
};

export default MovieDetailsPage;
