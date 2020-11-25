import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-dark-violet dib br3 pa3 ma2 grow shadow-5 tc bw2">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    </div>
  );
};

export default Card;
