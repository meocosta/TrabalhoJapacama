import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fotos } from '../principal/arrays.jsx';
import './Home.scss'


function Home() {
    const [totalFotos, settotalFotos] = useState(404);
    const [fotosParaExibir, setFotosParaExibir] = useState([]);
    const [ultimasFotos1, setUltimasFotos1] = useState([]);
    const [ultimasFotos2, setUltimasFotos2] = useState([]);
    const [Booleano, setBooleano] = useState(true);
    const [carroselImg, setCarroselImg] = useState(true);


    //verifica se é um array e armazena 5 primeiros no primeiro e entre 5 e 10 no segundo
    useEffect(() => {
        if (Array.isArray(fotos)) {
            if (fotos.length >= 10) {
                setUltimasFotos1(fotos.slice(-5));
                setUltimasFotos2(fotos.slice(-10, -5));
                setCarroselImg(true);
            } else {
                setUltimasFotos1(fotos);
                setCarroselImg(false);
            }
        }
    }, [fotos]);

    //alterna entre um e outro a cada 5 segundos
    useEffect(() => {
        //se for 10 ou mais ele faz o carrosel
        if (carroselImg) {
            const interval = setInterval(() => {
                settotalFotos(Booleano ? ultimasFotos1.length : ultimasFotos2.length);
                setFotosParaExibir(Booleano ? ultimasFotos1 : ultimasFotos2);
                setBooleano((prev) => !prev);
            }, 5000);
            return () => clearInterval(interval);
        } else { //se não fica estática
            setFotosParaExibir(ultimasFotos1);
            settotalFotos(ultimasFotos1.length)
        }

    }, [Booleano, ultimasFotos1.length, ultimasFotos2.length]);

    
    return (
        <>


            <section id='intro-container'>
                <div id='welcome'><hr></hr><h1>bem vindo!</h1><hr /></div>
                <div id='sala'>
                    <h2>aqui você encontra o trabalho feito pelo 9º ano D</h2>
                </div>
            </section>


            <section id='CarroselImagens-container'>
                <h3>Veja nossas fotos na nossa <Link to='/galeria'>galeria</Link>!</h3>
                <div id='carrosel'>
                    {totalFotos === 404 ? <p>Carregando fotos...</p> :
                        totalFotos === 0 ? <p>Nenhuma foto por enquanto, volte mais tarde!</p> : (
                            fotosParaExibir.map((foto, index) => (
                                <Link to='/galeria' key={index}>
                                    <div className="img">
                                        <img
                                            src={foto.imagem}
                                            alt={`Foto ${index + 1}`} />
                                    </div>
                                </Link>

                            ))
                        )}
                </div>
            </section>

            <section id='creditos-container'>
                <hr />
                <h2>um site criado pelo 2º Informática D</h2>
                <hr />
            </section>

            <section id='Conteudo'>
                <h3>Veja o <Link to='/conteudo'>conteudo</Link> produzidos por eles!</h3>
                <div id='txt'>
                    <p><Link to='/conteudo'>
                        O modelo geocêntrico foi uma das primeiras concepções do universo e sustentava que
                        a Terra era o centro do cosmos, com todos os corpos celestes, como o Sol, a Lua e as estrelas, girando ao
                        seu redor. Esta teoria foi amplamente aceita durante a Antiguidade e a Idade Média, dominando o pensamento
                        científico por mais de mil anos. Este trabalho examina a origem, o desenvolvimento e o impacto histórico do
                        modelo geocêntrico, além de destacar a sua substituição por teorias mais avançadas, como o modelo
                        heliocêntrico...
                    </Link></p>
                </div>
            </section>
        </>
    );
}
export default Home;
