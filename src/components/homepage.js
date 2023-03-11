import Header from "./header"
import Footer from "./footer"
import style from '../style/homepage.module.css'
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Homepage() {

    useEffect(() => { document.title = 'Τσακμάκης - Παντός Τύπου Εκτυπώσεις'; });
    return (
        <div>
            <Header />
            <div className={style.container}>


                <nav className={style.menu}>
                    <ul>
                        <Link to='/about'><li>ΠΟΙΟΙ ΕΙΜΑΣΤΕ</li></Link>
                        <Link to='/services'><li>ΥΠΗΡΕΣΙΕΣ</li></Link>
                        <Link to='/portfolio'><li>ΔΕΙΓΜΑΤΑ</li></Link>
                        <Link to='/contact'><li>ΕΠΙΚΟΙΝΩΝΙΑ</li></Link>
                    </ul>
                </nav>
                <div className={style.video} style={{backgroundImage : "url('/img/preview/0.jpg')"}}>
                    {/* <img src='/img/preview/0.jpg' alt='video' /> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}