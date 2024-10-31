import { useEffect, useState } from "react";
import { SlActionUndo, SlActionRedo, SlClose } from "react-icons/sl";
import {fotos} from "../principal/arrays";
import './Galeria.scss'

function Galeria() {
    
    const [openImage, setOpenImage] = useState(false);
    const [show, setShow] = useState(null);

    const abrirImagem = (item) => {
        setShow(fotos[item.id]);
        setOpenImage(true);
    };

    const imagemAnterior = () => {
        if (show && show.id > 0) {
            setShow(fotos[show.id - 1]);
        }
    };

    const imagemPosterior = () => {
        if (show && show.id < fotos.length - 1) {
            setShow(fotos[show.id + 1]);
        }
    };

    useEffect(() => {
        if (openImage) {
            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolla para o topo suavemente
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openImage]);



    return (
        <>
            <section id="txt-galeria">
                <h1>Galeria</h1>
                <p>Veja as fotos e fique por dentro do que está acontecendo nesse trabalho!</p>
            </section>
            <section id="galeria">
                {fotos.length === 0 ? <p>Nenhuma foto por enquanto, volte mais tarde!</p> : (
                    fotos.map((item) => (
                        <div className="item-galeria" key={item.id}>
                            <img src={item.imagem} alt={item.descrição} onClick={() => abrirImagem(item)} />
                        </div>
                    ))
                )}
            </section>

            {openImage && (
                <section id="imagem_aberta">
                    <div id="fechar_galeria">
                        <button onClick={() => setOpenImage(false)}><SlClose /></button>
                    </div>
                    <div id="center_galeria">
                        {show.id === 0 ? <button style={{ color: "black" }}><SlActionUndo /></button> : <button onClick={imagemAnterior}><SlActionUndo /></button>}
                        <div id="img">
                            <img src={show.imagem} alt={show.descrição} />
                        </div>
                        {show.id === fotos.length - 1 ? <button style={{ color: "black" }}><SlActionRedo /></button> : <button onClick={imagemPosterior}><SlActionRedo /></button>}
                    </div>
                    <div id="descricao_galeria">
                        <p>{show.descrição}</p>
                    </div>
                </section>
            )}
        </>
    );
}

export default Galeria;