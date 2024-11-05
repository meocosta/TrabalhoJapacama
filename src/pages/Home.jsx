import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { arquivos, fotos } from '../principal/arrays.jsx';
import './Home.scss'


function Home() {
    const [totalFotos, settotalFotos] = useState(404);
    const [fotosParaExibir, setFotosParaExibir] = useState([]);
    const [ultimasFotos1, setUltimasFotos1] = useState([]);
    const [ultimasFotos2, setUltimasFotos2] = useState([]);
    const [Booleano, setBooleano] = useState(true);

    const [ultimosArquivos, setUltimosArquivos] = useState([]);
    const [view, setView] = useState([]);
    const [array1, setArray1] = useState([]);
    const [array2, setArray2] = useState([]);
    const [carrosel, setCarrosel] = useState(true);
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


    //código artigos
    useEffect(() => {
        if (arquivos.length >= 10) {
            setUltimosArquivos(arquivos.slice(-10));
        } else {
            setUltimosArquivos(arquivos);
            setCarrosel(false)
        }
    }, [arquivos]);



    useEffect(() => {

        const ChangeArray1 = [];
        const ChangeArray2 = [];
        const ArqSelect = ultimosArquivos;

        for (let count = 1; count <= ArqSelect.length; count++) {
            if (count <= 5) {
                ChangeArray1.push(ArqSelect[ArqSelect.length - count])
            } else if (count <= 10) {
                ChangeArray2.push(ArqSelect[ArqSelect.length - count])
            }
        }

        setArray1(ChangeArray1)
        setArray2(ChangeArray2)
        setView(ChangeArray1);

    }, [ultimosArquivos])


    useEffect(() => {
        if (carrosel) {
            let showArray1 = true;

            const interval = setInterval(() => {
                if (showArray1) {
                    setView(array1);
                } else {
                    setView(array2);
                }
                showArray1 = !showArray1;
            }, 5000);

            return () => clearInterval(interval);
        }

    }, [array1, array2]);



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

            <section id='CarroselArtigos-container'>
                <h3>Veja os <Link to='/conteudo'>artigos</Link> produzidos por eles!</h3>
                <div id='carrosel'>
                    {arquivos.length === 0 ? <p>Nenhum artigo por enquanto, volte mais tarde!</p> : (
                        view.map((arquivo, index) => (
                            <div className='artigoCarrosel' id='example' key={index}>
                                <h3>{arquivo.nome}</h3>
                                <div className='ImgArtigoCarrosel'>
                                    <img src={arquivo.imagem} alt={"foto do " + arquivo.nome}></img>
                                </div>
                                <p>{arquivo.descrição}</p>
                                <Link to={arquivo.href}><button>ler</button></Link>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </>
    );
}
export default Home;