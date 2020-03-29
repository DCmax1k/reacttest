import React, { useState } from 'react';
import Title from './Title';

const AreyouBody = () => {
  const [answer, setAnswer] = useState('Answer here!');

  const genAnswer = () => {
    let generated = Math.floor(Math.random() * 10);
    let areYouAnswer = '';
    if (generated === 0) {
      areYouAnswer = 'Ummm YES!';
    } else if (generated === 1) {
      areYouAnswer = 'Yes 100% sure.';
    } else if (generated === 2) {
      areYouAnswer = "I'll say YES";
    } else if (generated === 3) {
      areYouAnswer = 'Yes Yes YES';
    } else if (generated === 4) {
      areYouAnswer = "Seriously! Don't even have to ask, obviousy a YES!";
    } else if (generated === 5) {
      areYouAnswer = 'I guess not...';
    } else if (generated === 6) {
      areYouAnswer = 'Unfortunatly no..';
    } else if (generated === 7) {
      areYouAnswer = 'Luckily no.';
    } else if (generated === 8) {
      areYouAnswer = 'Nope..';
    } else if (generated === 9) {
      areYouAnswer = 'Not really, but maybe a little.';
    }
    setAnswer(areYouAnswer);
  };

  return (
    <div className='areyou-cont'>
      <Title title='Are you?' />
      <div className='button'>
        <button onClick={genAnswer}>Click here to see if you are!</button>
        <h2 className='answer'>{answer}</h2>
      </div>
    </div>
  );
};

export default AreyouBody;
