import { Link } from "react-router-dom";
import './Header.scss';
import logo from '../visual/logo.svg';
import { useState, useEffect } from "react";

function Header() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {width >  950 ? (
                <header>
                    <Link to='/'>Home</Link>
                    <Link to='/galeria'>Galeria</Link>
                    <img src={logo} alt='Logo' />
                    <Link to='/conteudo'>Conteúdo</Link>
                    <Link to='/envolvidos'>Envolvidos</Link>
                </header>
            ) : (
                <header>
                    <img src={logo} alt='Logo' />
                    <div id="links">
                        <Link to='/'>Home</Link>
                        <Link to='/galeria'>Galeria</Link>
                        <Link to='/conteudo'>Conteúdo</Link>
                        <Link to='/envolvidos'>Envolvidos</Link>
                    </div>
                </header>
            )}
        </>
    );
}

export default Header;
