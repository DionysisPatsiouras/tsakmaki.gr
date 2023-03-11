import Header from "./header"
import Title from "./title"
import { useEffect } from "react"
import Footer from "./footer"
import style from '../style/contact.module.css'

export default function Contact() {

    useEffect(() => { document.title = 'Τσακμάκης - Επικοινωνία'; });

    return (
        <div>
            <Header />
            <div className={'container'}>
                <Title title='Επικοινωνια' />
            </div>

            <div className={style.wrapper}>
                <div className={style.bottomLine}>
                    <div className={style.phone}>
                        <img src='/img/icons/mail.svg' alt='Email' />
                        <h2><a href="mailto:info@tsakmaki.gr"> info@tsakmaki.gr</a></h2>
                    </div>
                    <div className={style.mail}>
                        <img src='/img/icons/phone-white.svg' style={{'fill' : 'red'}} alt='Phone Number' />
                        <h2><a href='tel:+30 2410613758'>2410 613758 </a> • <a href='tel:+30 6932022321'>693 202 2321</a></h2>
                    </div>
                </div>

                <div className={style.container2}>
                    <h3 className={style.location}>ΤΟ ΚΑΤΑΣΤΗΜΑ</h3>
                    <iframe className={style.map} title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.079054717148!2d22.39430771576301!3d39.625423811305474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135888cef66bfd7d%3A0x8ce121426b180b80!2zzpbOrs-BzrEgMSwgzpvOrM-BzrnPg86xIDQxMyAzNA!5e0!3m2!1sel!2sgr!4v1674589098367!5m2!1sel!2sgr" width="600" height="450" style={{ "border": "0" }} allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}