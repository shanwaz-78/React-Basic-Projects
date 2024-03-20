import React, { useState } from 'react';
import questionsData from './data';
import './Quiz.css';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(questionsData[index]);
  const [isNext, setNext] = useState(false);

  const checkAns = (element, selectedOption) => {
    if (selectedOption === questions.ans) {
      element.target.classList.add('correct')
      setNext(true)
    } else {
      element.target.classList.add('in-correct')
    }
    setTimeout(() => {
      element.target.classList.remove('in-correct')
    }, 1000);
  };

  const handleNextQuestion = () => {
    if (!isNext) {
      alert(`Please select your answer`);
      return;
    } else if (index + 1 < questionsData.length) {
      setIndex(index + 1);
      setQuestions(questionsData[index + 1]);
      setNext(false)
      document.querySelectorAll('li').forEach(li => li.classList.remove('correct'))
    } else {
      console.log("Quiz completed!");
    }
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {questions.question}</h2>
      <ul>
        <li onClick={(e) => checkAns(e, 1)}>{questions.option1}</li>
        <li onClick={(e) => checkAns(e, 2)}>{questions.option2}</li>
        <li onClick={(e) => checkAns(e, 3)}>{questions.option3}</li>
        <li onClick={(e) => checkAns(e, 4)}>{questions.option4}</li>
      </ul>
      <button onClick={handleNextQuestion}>Next</button>
      <p className='index'>{index + 1} of {questionsData.length} questions</p>
    </div>
  );
};

export default Quiz;

