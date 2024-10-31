import { Link } from "react-router-dom";
import './Footer.scss';

function Footer(){
    return(
        <>
            <footer>
                <p>feito pelo 2ºD, veja os <Link to="/envolvidos">envolvidos</Link></p>
                <p>ExpoFito 2024</p>
            </footer>
        </>
    );
}

export default Footer;