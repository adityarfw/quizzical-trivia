import React from 'react';

const QuizCard = (props) => {
  const { quiz_question, correct_answer, incorrect_answers } = props;

  const handleClick = (event) => {};

  let optionsArray = [];

  const addOptions = (option) => {
    optionsArray.push(option);
  };

  const shuffleAnswers = (arr) => {
    return arr.sort(() => Math.random() - 0.25);
  };

  return (
    <div className='container--quizcard'>
      <h4 className='quizcard--question'>{quiz_question}</h4>
      <div className='answer--container'>
        {addOptions(correct_answer)}
        {incorrect_answers.map((incAns) => addOptions(incAns))}
        {shuffleAnswers(optionsArray).map((options) => (
          <button className='answer--option'>{options}</button>
        ))}
      </div>
      <hr className='quiz--card--break' />
    </div>
  );
};

export default QuizCard;
