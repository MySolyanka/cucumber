import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'


export default function Header () {
    return (
        <div className={css.header}>
            {/* logo side*/}
            <div className={css.logo}>
                <Image src ={Logo} alt = "" width={50} height={50}/>
                <span>Гос заказ</span>
            </div>

            {/* menu side */ }
            <ul className={css.menu}>
                <li>Интеграция</li>
                <li>Возможности</li>
                <li>Будущие обновления</li>
            </ul>



            { /*right side*/ }
            <div className={css.rightSide}>
                <div className={css.button}>
                    <button className={css.register}>Зарегистрироваться</button>
                    <button className={css.login}>Войти</button>
                </div>
            </div>
        </div>
    )

};