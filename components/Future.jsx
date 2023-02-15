import React, { useState } from 'react';
import css from '../styles/Future.module.css'



function Square({ text }) {
  return (
      <div className={css.square}>
        {text}
      </div>
  );
}

function App() {
  const [squares] = useState([
    { id: 1, text: 'Адаптация для телефона' },
    { id: 2, text: 'Интеграция в другие соц. сети' },
    { id: 3, text: 'Пользовательские настройки' },
  ]);


  return (
    <div className={css.container}>
      {squares.map(square => (
        <Square key={square.id} text={square.text} />
      ))}
    </div>
  );
}

export default App;
