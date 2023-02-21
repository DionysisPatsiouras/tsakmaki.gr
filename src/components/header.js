
import { React, useState, useEffect } from 'react'
import style from '../style/header.module.css'
import Menu from './menu';
export default function Header() {


    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 769)
                setStatus(false)
        })
    }, [])

    const [status, setStatus] = useState(false)


    return (
        <header className={style.header}>

            {status ? <Menu right='0px' speed='0.7s' /> : <Menu right='100vw' speed='0.5s' />}
            <img className={style.toggle} src={!status ? '/img/icons/burger.svg' : '/img/icons/close.svg' } alt='menu' onClick={() => setStatus(!status)} />
            <img className={style.logo} src='/img/logo.jpeg' alt='logo' />

            <ul className={style.media}>
                <a href="https://www.facebook.com/TsakmakisPrint"><img src='/img/icons/fb.svg' alt='Facebook' /></a>
                <a href="mailto:info@tsakmaki.gr"><img src='/img/icons/mail.svg' alt='Email' /></a>
                <a href="tel:+30 2410613758"><img src='/img/icons/phone.svg' alt='Phone Number' /></a>

            </ul>
        </header>
    );


}