import React from 'react';
import QuizCard from './QuizCard';

const QuizPage = () => {
  return (
    <div className='quizpage--container'>
      <QuizCard />
      <button className='quizpage--button'>Check Answers</button>
    </div>
  );
};

export default QuizPage;
