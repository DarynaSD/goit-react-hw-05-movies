import { getDetailsById } from 'api/getDetailsById';
import CastList from 'components/CastList';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  console.log('cast', movieId);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsById(`${movieId}/credits`);
        setCast(data);
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

 // console.log(cast);

  return (
    <div>
      {isLoading && 'Loading...'}
      <div>cast</div>
      {cast && <CastList castData={ cast.cast} />}
    </div>
  );
};

export default Cast
