import React from 'react';

const QuizCard = () => {
  const [quizData, setQuizData] = React.useState([]);
  console.log(quizData);
  React.useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple'
    )
      .then((res) => res.json())
      .then((data) => setQuizData(data.results));
  }, []);

  // JSON data provides correct answer in arr[0]
  // Shuffling options
  const shuffleAnswers = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  let optionsArray = [];

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
              <button className='answer--option'>{ans}</button>
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
