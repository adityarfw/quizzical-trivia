import React from 'react';

const StartPage = ({ startQuiz }) => {
  return (
    <div className='container--startpage'>
      <h2>Quizzical</h2>
      <p>Challenge yourself with these Trivia questions</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default StartPage;
