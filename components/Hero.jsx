import css from '../styles/Hero.module.css'
import Image from 'next/image'
import HeroImage from '../assets/HeroImage.png'

export default function Hero () {
    return(
    <div className={css.container}>
            {/* left side */}
        <div className={css.left}>

            <div className={css.heroText}>
                <span>Соберите всю <span style={{color:"var(--themeRed"}}>информацию</span></span>
                <span>В одном месте</span>
                <span>
                    Управлейте <span style={{color:"var(--themeRed"}}>информацией</span> в 1 клик
                </span>
            </div>
          
            <span className={css.miniText}>
            Наша миссия - упростить Вашу жизнь.
            </span>

            <button className={`btn ${css.btn}`}>
                Присоедениться
            </button>

        </div>
        

            {/* right side */}

        <div className={css.right}>
            <div className={css.imageContainer}>
                <Image src={HeroImage} alt="" layout="intrinsic"/>
            </div>
        </div>
    </div>
    )
}