import React from 'react';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';

const App = () => {
  const [quizState, setQuizState] = React.useState(false);

  const startQuiz = () => {
    setQuizState(true);
  };

  console.log(quizState);

  return (
    <main>
      {!quizState ? <StartPage startQuiz={startQuiz} /> : <QuizPage />}
    </main>
  );
};

export default App;
