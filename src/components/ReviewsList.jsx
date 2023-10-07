import React from 'react'

const ReviewsList = ({ reviewsData }) => {
  return (
    <ul>
      {reviewsData.map(({ id, author, content }) => (
        <li key={id}>
          <p>{author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList
