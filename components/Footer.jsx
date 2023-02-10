import {UilTelegram, UilGithub} from "@iconscout/react-unicons"
import Image from "next/image"
import Logo from '../assets/Logo.png'
import css from '../styles/Footer.module.css'

export default function Footer () {
    return (
        <div className={css.container}>
            <span>Все права защищены</span>
            <div className={css.social}>
                <UilTelegram size={45}/>
                <UilGithub size={45}/>
            </div>

            <div className={css.logo}>
                <Image src ={Logo} alt = "" width={50} height={50}/>
                <span>Гос-заказ</span>
            </div>
        </div>
    )

};