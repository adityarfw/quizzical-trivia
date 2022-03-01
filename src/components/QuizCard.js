import React from 'react';
import { nanoid } from 'nanoid';

const QuizCard = () => {
  const [quizData, setQuizData] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple'
    )
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  const handleClick = (event) => {};

  // JSON data provides correct answer in arr[0]
  // Shuffling options
  const shuffleAnswers = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  let optionsArray = [];

  // Get quiz data and map through each quiz element
  // Get correct answer and push to an array
  // Get incorrect answers and push to the same array
  // Shuffle the elements
  // Display the elements below question
  // Clear the temporary options array
  const quizQA = quizData.map(
    (quiz) => (
      (optionsArray.length = 0),
      optionsArray.push(quiz.correct_answer),
      quiz.incorrect_answers.map((incAns) => optionsArray.push(incAns)),
      (
        <div>
          <h4 className='quizcard--question'>{quiz.question}</h4>
          <div className='answer--container'>
            {shuffleAnswers(optionsArray).map((ans) => (
              <button onClick={handleClick} className='answer--option'>
                {ans}
              </button>
            ))}
          </div>
          <hr className='quiz--card--break' />
        </div>
      )
    )
  );

  return <div className='container--quizcard'>{quizQA}</div>;
};

export default QuizCard;
