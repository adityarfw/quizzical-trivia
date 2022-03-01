import React from 'react';
import QuizCard from './QuizCard';
import { nanoid } from 'nanoid';

const QuizPage = () => {
  const [quizData, setQuizData] = React.useState([]);
  const [questionCard, setQuestionCard] = React.useState([]);
  React.useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple'
    )
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  const card = {};

  // Get quiz data and map through each quiz element
  // Get correct answer and push to an array
  // Get incorrect answers and push to the same array
  // Shuffle the elements
  // Display the elements below question
  // Clear the temporary options array

  const quizQA = quizData.map((quiz) => (
    <QuizCard
      quiz_question={quiz.question}
      correct_answer={quiz.correct_answer}
      incorrect_answers={quiz.incorrect_answers}
      key={nanoid()}
    />
  ));

  return (
    <div className='quizpage--container'>
      {quizQA}
      <button className='quizpage--button'>Check Answers</button>
    </div>
  );
};

export default QuizPage;
