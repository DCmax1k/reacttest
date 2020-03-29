import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';

const BodyCont = () => {
  return (
    <div>
      <Title title='Welcome to DCmax1k' />
      <div className='paragraphs'>
        <Paragraph message='One of the features of this website is to see if you are.. It used to be the only thing the website was for, but now it has grown, and the answer is now randomly generated, rather than certain answers for people. You no longer have to enter information such as your first name and last name to get an answer!' />
        <Paragraph
          message="The second most recent addition to this marvelous website is to see a randomly generated number to represent your IQ in a fun way. Knowing your randomly generated IQ over your real IQ could be a lot more fun, and intresting to see what you get. Real IQ's usually stay the same, and are boring."
          bold='Have Fun!'
        />
      </div>
    </div>
  );
};

export default BodyCont;
