import { Link } from "react-router-dom"
import style from '../style/title.module.css'

export default function Title(props) {
    return (
        <div className={style.container}>
            <h2>{props.title}</h2>
            <h6><Link to='/'><span style={{ 'fontSize': '38px' }}>&larr;</span>ΠΙΣΩ ΣΤΟ ΜΕΝΟΥ</Link></h6>
        </div>
    );
}