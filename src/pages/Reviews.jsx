import { getDetailsById } from 'api/getDetailsById';
import ReviewsList from 'components/ReviewsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();
  console.log('cast', movieId);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsById(`${movieId}/reviews`);
        setReviews(data);
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
      {reviews ? <ReviewsList reviewsData={reviews.results}/> : 'No reviews yet'}
    </div>
  );
};

export default Reviews;
