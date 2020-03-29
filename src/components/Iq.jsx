import React, { Component } from 'react';
import Title from './Title';

class IqBody extends Component {
  state = {
    answer: 'Answer here!'
  };

  render() {
    const genAnswer = () => {
      let generated = Math.floor(Math.random() * 201);
      this.setState({
        answer: generated
      });
      if (generated === 200) {
        setTimeout(() => {
          alert('SO lucky you just got 200!');
        }, 1);
      }
    };

    return (
      <div>
        <Title title='What is your IQ?' />
        <div className='button'>
          <button onClick={genAnswer}>Click here to see your IQ!</button>
          <h2 className='answer'>{this.state.answer}</h2>
        </div>
      </div>
    );
  }
}

export default IqBody;
