import React, { useState } from 'react';
import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import LoginForm from './LoginForm';
function Header() {
    const [showLoginForm, setShowLoginForm] = useState(false);
  
    function toggleLoginForm() {
      setShowLoginForm(!showLoginForm);
    }
  
    function handleLoginButtonClick() {
      toggleLoginForm();
    }
  
    function handleRegisterButtonClick() {
      console.log('The register button was clicked.');
      // add code to handle the register button press event here
    }
  
    return (
      <div className={css.header}>
        {/* logo side*/}
        <div className={css.logo}>
          <Image src={Logo} alt="" width={50} height={50} />
          <span>Гос заказ</span>
        </div>
  
        {/* menu side */}
        <ul className={css.menu}>
          <li>Интеграция</li>
          <li>Возможности</li>
          <li>Будущие обновления</li>
        </ul>
  
        {/* right side */}
        <div className={css.rightSide}>
          <div className={css.button}>
            <button className={css.register} onClick={handleRegisterButtonClick}>
              Зарегистрироваться
            </button>
            <button className={css.login} onClick={handleLoginButtonClick}>
              Войти
            </button>
            {showLoginForm && <LoginForm toggleLoginForm={toggleLoginForm} />}
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;