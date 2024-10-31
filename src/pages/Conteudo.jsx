import { Link } from "react-router-dom";
import { arquivos as conteudos } from "../principal/arrays";
import { useState } from "react";
import './Conteudo.scss'


function Conteudo() {

    //useState para pesquisa
    const [conteudoPesquisado, setConteudoPesquisado] = useState('');

    //filtro da pesquisa
    const filtroPesquisa = conteudos.filter((filtro) => filtro.nome.toLowerCase().includes(conteudoPesquisado.toLowerCase()));

    return (
        <>
            <section id="txt_conteúdo">
                <h1>Conteúdo</h1>
                <hr></hr>
                <p>Veja as pesquisas produzidas por eles!</p>
            </section>

            <section id="conteúdo">
                <div id="pesquisa_container">
                    <input
                        type='text'
                        placeholder='Pesquisar...'
                        id='pesquisa_conteúdo'
                        value={conteudoPesquisado}
                        onChange={(e) => setConteudoPesquisado(e.target.value)}
                    />
                </div>
                <div id="conteudo_container">
                    {
                        filtroPesquisa.length > 0 ? (

                            filtroPesquisa.map((item, index) => (
                                <div className='item_conteúdo' key={index}>
                                    <h3>{item.nome}</h3>
                                    <div className='item_conteúdo_imagem'>
                                        <img src={item.imagem} />
                                    </div>
                                    <p>{item.descrição}</p>
                                    <Link to={item.href}><button>veja!</button></Link>
                                </div>
                            ))

                        ) : (
                            <p id='erro-dev'>Nenhum resultado encontrado</p>
                        )
                    }
                </div>
            </section>
        </>
    );
}
export default Conteudo;