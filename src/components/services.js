import Header from "./header"
import Title from "./title"
import { useEffect, useState } from "react"
import Footer from "./footer"
import style from '../style/services.module.css'

export default function Services() {

    useEffect(() => { document.title = 'Τσακμάκης - Υπηρεσίες'; });
    const [img, setImg] = useState('/img/preview/' + 1 + '.jpg');



    function changeImg(x) {
        setImg('/img/preview/' + x + '.jpg')
    }
    function resetImg(y) {
        setImg('/img/preview/' + y + '.jpg')
    }

    return (
        <div>
            <Header />
            <div className={'container'}>
                <Title title='Υπηρεσιες' />

                <div className={style.container}>
                    <ul>
                        <li onMouseOver={() => changeImg(1)} onMouseLeave={() => resetImg(0)}>ΕΚΤΥΠΩΣΕΙΣ OFFSET</li>
                        <li onMouseOver={() => changeImg(2)} onMouseLeave={() => resetImg(0)}>ΕΠΑΓΓΕΛΜΑΤΙΚΕΣ ΚΑΡΤΕΣ</li>
                        <li onMouseOver={() => changeImg(3)} onMouseLeave={() => resetImg(0)}>ΦΥΛΛΑΔΙΑ</li>
                        <li onMouseOver={() => changeImg(4)} onMouseLeave={() => resetImg(0)}>ΚΑΤΑΛΟΓΟΙ ΕΣΤΙΑΤΟΡΙΩΝ</li>
                        <li onMouseOver={() => changeImg(0)} onMouseLeave={() => resetImg(0)}>ΤΙΜΟΛΟΓΙΑ</li>
                        <li onMouseOver={() => changeImg(0)} onMouseLeave={() => resetImg(0)}>ΑΥΤΟΚΟΛΛΗΤΑ</li>
                        <li onMouseOver={() => changeImg(7)} onMouseLeave={() => resetImg(0)}>ΠΡΟΣΚΛΗΤΗΡΙΑ</li>
                        <li onMouseOver={() => changeImg(8)} onMouseLeave={() => resetImg(0)}>ΦΑΚΕΛΟΙ</li>
                        <li onMouseOver={() => changeImg(9)} onMouseLeave={() => resetImg(0)}>ΑΦΙΣΕΣ</li>

                    </ul>

                    <div className={style.desktopImages}>

                        <img src={img} alt='' />
                    </div>



                </div>

            </div>

            <Footer />
        </div>
    )
}