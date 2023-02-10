import React, { useState } from 'react';
import css from '../styles/Future.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



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
      <ArrowBackIosIcon className={css.arrow__left} onClick={handleRightArrowClick} />
      {squares.map(square => (
        <Square key={square.id} text={square.text} />
      ))}
      <ArrowForwardIosIcon className={css.arrow__right} onClick={handleLeftArrowClick} />
    </div>
  );
}

export default App;
