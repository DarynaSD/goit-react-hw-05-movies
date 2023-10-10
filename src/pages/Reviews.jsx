import { getDetailsById } from 'api/getDetailsById';
import ReviewsList from 'components/ReviewsList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsById(`${movieId}/reviews`);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [movieId]);

  return (
    <div>
      {isLoading && 'Loading...'}

      {reviews &&
        (!reviews.results.length ? (
          'No reviews yet'
        ) : (
          <ReviewsList reviewsData={reviews.results} />
        ))}
    </div>
  );
};

export default Reviews;
