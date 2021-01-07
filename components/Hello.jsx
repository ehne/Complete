import React from 'react';

const Hello = ({ name }) => {
  const sentence = `Hello ${name}!`;
  return (
    <div>
      {sentence}
    </div>
  );
};

export default Hello;
