import React from 'react'
import { RewItem } from './Parts.styled';

const ReviewsList = ({ reviewsData }) => {
  return (
    <ul>
      {reviewsData.map(({ id, author, content }) => (
        <RewItem key={id}>
          <h3>{author}:</h3>
          <blockquote>"{content}"</blockquote>
        </RewItem>
      ))}
    </ul>
  );
};

export default ReviewsList
