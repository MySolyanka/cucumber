import React, { useState } from 'react';
import css from '../styles/Future.module.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


function Square({ text }) {
  return (
      <div className={css.square}>
        {text}
      </div>
  );
}

function App() {
  const [squares, setSquares] = useState([
    { id: 1, text: 'Адаптация для телефона' },
    { id: 2, text: 'Интеграция в другие соц. сети' },
    { id: 3, text: 'Пользовательские настройки' },
    { id: 4, text: 'Пользовательские настройки' },
  ]);

  function handleLeftArrowClick() {
    const newSquares = [...squares];
    const firstSquare = newSquares.shift();
    newSquares.push(firstSquare);
    setSquares(newSquares);
  }

  function handleRightArrowClick() {
    const newSquares = [...squares];
    const lastSquare = newSquares.pop();
    newSquares.unshift(lastSquare);
    setSquares(newSquares);
  }

  return (
    <div className={css.container}>
      <FaAngleLeft className={css.arrow__left} onClick={handleRightArrowClick} />
      {squares.map(square => (
        <Square key={square.id} text={square.text} />
      ))}
      <FaAngleRight className={css.arrow__right} onClick={handleLeftArrowClick} />
    </div>
  );
}

export default App;
