import React from 'react';

const Paragraph = props => {
  return (
    <div className='paragraph'>
      {props.message} <strong>{props.bold}</strong>
    </div>
  );
};

export default Paragraph;
