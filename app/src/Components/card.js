import React from 'react';

const Card = ({ values }) => {
  return (
    <div className="card">
      <h2>{values.title}</h2>
      <p>{values.description}</p>
      <p>Ratings: {values.ratings}</p>
      <img src={values.url} alt="Image" />
    </div>
  );
};

export default Card;
