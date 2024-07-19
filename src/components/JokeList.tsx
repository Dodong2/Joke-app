// 3: Creating the Components
import React from 'react';

interface JokeProps {
  setup: string;
  punchline: string;
}

const Joke: React.FC<JokeProps> = ({ setup, punchline }) => {
  return (
    <div className='joke-container'>
      <div className='setup'>
        <h1>Set-up:</h1>
        <p>{setup}</p>
      </div>
      <div className='punchline'>
        <h1>Punchline:</h1>
        <p>{punchline}</p>
      </div>
    </div>
  );
};

export default Joke;
