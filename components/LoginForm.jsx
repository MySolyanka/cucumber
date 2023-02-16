import { useState } from 'react';
import css from '../styles/Login.module.css';
import CloseIcon from '@mui/icons-material/Close';

function LoginForm({toggleLoginForm}) {

  return (
    <div className={css.formWrapper}>
      <div className={css.form}>
        <div className={css.formHeader}>
          <h2>Авторизация</h2>
          <button onClick={toggleLoginForm}><CloseIcon/></button>
        </div>
        <div className={css.formBody}>
          <form>
          <label>
            Имя:
            <input type="text" name="name" />
          </label>
          <label>
            Пароль:
            <input type="password" name="password" />
          </label>
        </form>
        </div>
        <div className={css.formFooter}>
        
          <button type="submit"className={css.submitButton}>Войти</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;