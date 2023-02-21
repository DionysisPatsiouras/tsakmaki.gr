import { Link } from "react-router-dom";
import style from '../style/menu.module.css'

export default function Menu(props) {
    return (
        <div className={style.menu} style={{ 'right': props.right , 'transition': props.speed}}>
            <Link to='/'><li>ΑΡΧΙΚΗ</li></Link>
            <Link to='/about'><li>ΠΟΙΟΙ ΕΙΜΑΣΤΕ</li></Link>
            <Link to='/services'><li>ΥΠΗΡΕΣΙΕΣ</li></Link>
            <Link to='/portfolio'><li>ΔΕΙΓΜΑΤΑ</li></Link>
            <Link to='/contact'><li>ΕΠΙΚΟΙΝΩΝΙΑ</li></Link>
        </div >
    );
}