import React, { useState, useEffect } from 'react';
import { conteudo, apresentação, desing, site } from '../principal/arrays';
import './Envolvidos.scss';

function Envolvidos() {

    const [content, setContent] = useState(conteudo);

    const Change = (content) => {
        setContent(content);
    }


    return (
        <section id='envolvetudo'>
            <h1 id='txt_envolvidos'>Envolvidos</h1>
            <div id='menuEnvolvidos'>
                <h2 style={content === conteudo ? { color: '#233115', textDecoration: 'underline' } : { color: '#697644' }} onClick={content === conteudo ? null : () => Change(conteudo)}>Conteúdo</h2>
                <h2 style={content === desing ? { color: '#233115', textDecoration: 'underline' } : { color: '#697644' }} onClick={content === desing ? null : () => Change(desing)}>Desing</h2>
                <h2 style={content === site ? { color: '#233115', textDecoration: 'underline' } : { color: '#697644' }} onClick={content === site ? null : () => Change(site)} >Site</h2>
                <h2 style={content === apresentação ? { color: '#233115', textDecoration: 'underline' } : { color: '#697644' }} onClick={content === apresentação ? null : () => Change(apresentação)} >Apresentação</h2>
            </div>
            <div id='envolvidos'>
                {content.map((content, index) => (
                    content.cargo == "representante" ?
                        <div>
                            <h4 key={index} id='representante'>{content.número}° - {content.nome}</h4>
                            <p id='pequeno'>representante do grupo {content.grupo}</p>
                        </div>

                        :

                        <p key={index} className='integrante'>{content.número}° - {content.nome}</p>
                ))}
            </div>
        </section>
    );
}
export default Envolvidos;