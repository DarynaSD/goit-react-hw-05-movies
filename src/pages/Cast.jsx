import { getDetailsById } from 'api/getDetailsById';
import CastList from 'components/CastList';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsById(`${movieId}/credits`);
        setCast(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [movieId]);

 // console.log(cast);

  return (
    <div>
      {isLoading && 'Loading...'}
      {cast && <CastList castData={ cast.cast} />}
    </div>
  );
};

export default Cast
