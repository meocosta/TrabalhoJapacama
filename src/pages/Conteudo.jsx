import { Link } from "react-router-dom";
import { arquivos as conteudos } from "../principal/arrays";
import { useState } from "react";
import './Conteudo.scss'


function Conteudo() {

    return (
        <>
            <section id="txt_conteúdo">
                <h1>Conteúdo</h1>
                <hr></hr>
                <p>Veja a pesquisa produzidas por eles!</p>
            </section>

            <div className="separação"></div>

            <section id="conteúdo">
                <div id="paragrafo-principal">
                    <h1 className="titulos">O Modelo Geocêntrico</h1>
                    <hr />
                    <p className="paragrafo">
                        O modelo geocêntrico foi uma das primeiras concepções do universo e sustentava que
                        a Terra era o centro do cosmos, com todos os corpos celestes, como o Sol, a Lua e as estrelas, girando ao
                        seu redor. Esta teoria foi amplamente aceita durante a Antiguidade e a Idade Média, dominando o pensamento
                        científico por mais de mil anos. Este trabalho examina a origem, o desenvolvimento e o impacto histórico do
                        modelo geocêntrico, além de destacar a sua substituição por teorias mais avançadas, como o modelo
                        heliocêntrico.
                    </p>
                    <p className="paragrafo">
                        O modelo geocêntrico tem suas origens nas civilizações antigas, especialmente na Grécia. Platão foi um dos
                        primeiros a sugerir que a Terra estava no centro do universo, mas foi Aristóteles, por volta de 350 a.C.,
                        que consolidou essa ideia de maneira mais sistemática. Aristóteles acreditava que a Terra era o ponto de
                        equilíbrio do cosmos e que todos os outros corpos celestes giravam ao seu redor. Segundo ele, a Terra era
                        imóvel e ocupava o centro do universo, cercada por esferas concêntricas que continham os astros. Para
                        Aristóteles, a Terra era a parte mais inferior do universo, em contraste com as esferas superiores que eram
                        perfeitas e imutáveis.
                    </p>
                    <p className="paragrafo">
                        O modelo geocêntrico foi detalhadamente desenvolvido por Claudius Ptolemeu, um astrônomo grego do século II.
                        Em sua obra 'Almagesto', Ptolemeu introduziu um sistema ainda mais complexo, com esferas e epiciclos, que
                        explicavam os movimentos retrógrados dos planetas. De acordo com o sistema ptolomaico, os planetas e o Sol
                        se moviam em círculos sobrepostos, conhecidos como epiciclos, o que permitia que os planetas parecessem se
                        mover para trás em relação às estrelas fixas. Este modelo foi amplamente aceito na astronomia medieval e se
                        manteve a norma até o Renascimento.
                    </p>
                    <p className="paragrafo">
                        Durante a Idade Média, o modelo geocêntrico se integrou à visão religiosa predominante, particularmente ao
                        cristianismo. A Igreja Católica, que tinha grande influência sobre o pensamento europeu, abraçou essa visão
                        do universo, pois ela colocava a Terra no centro da criação divina. Como resultado, o modelo geocêntrico foi
                        considerado não apenas um entendimento científico, mas também uma verdade religiosa. Isso fez com que a
                        Igreja resistisse a novas teorias que contestam esse modelo.
                        Contudo, com o avanço das observações astronômicas e as novas descobertas, surgiram questionamentos sobre a
                        validade do modelo geocêntrico. No século XVI, Nicolau Copérnico, astrônomo polonês, propôs o modelo
                        heliocêntrico, onde o Sol ocupava o centro do universo, e os planetas, incluindo a Terra, giravam ao seu
                        redor. Embora a teoria copernicana não tenha sido imediatamente aceita, ela abriu caminho para uma nova
                        compreensão do cosmos.
                    </p>
                    <p className="paragrafo">
                        A aceitação do modelo heliocêntrico ganhou força no século XVII, quando cientistas como Johannes Kepler e
                        Galileu Galilei confirmaram e ampliaram as ideias de Copérnico. Kepler formulou as três leis do movimento
                        planetário, que explicavam os movimentos elípticos dos planetas ao redor do Sol, contrariando a ideia de
                        órbitas circulares perfeitas do modelo geocêntrico. Galileu, com o uso do telescópio, observou as luas de
                        Júpiter e as fases de Vênus, evidências claras de que os corpos celestes não se moviam em torno da Terra.
                        Esses avanços marcaram o fim do modelo geocêntrico e o início de uma nova era na astronomia.
                    </p>
                    <p className="paragrafo">
                        Embora o modelo geocêntrico tenha sido superado, ele desempenhou um papel crucial no desenvolvimento do
                        pensamento científico. Ao longo dos séculos, foi a principal base para o estudo da astronomia, e seu
                        declínio foi um dos marcos mais importantes na história da ciência. A transição do modelo geocêntrico para o
                        heliocêntrico é considerada uma das grandes revoluções científicas, pois alterou não apenas a nossa
                        compreensão do universo, mas também a nossa visão do lugar da Terra no cosmos.
                    </p>
                </div>
                <div id="parte1">
                    <h2 className="subtitulos">Raízes Filosóficas e Culturais do Modelo Geocêntrico</h2>
                    <hr />
                    <p className="paragrafo">
                        O modelo geocêntrico não se sustentava apenas em observações empíricas, mas também em uma base filosófica e
                        cultural enraizada em civilizações antigas, especialmente na Grécia. Filósofos como Platão e Aristóteles
                        influenciaram fortemente essa visão. Platão, por exemplo, via o cosmos como uma estrutura ordenada e
                        imutável, onde a Terra ocupava uma posição central. Aristóteles expandiu essa ideia, postulando que todos os
                        corpos celestes giravam em torno da Terra em esferas concêntricas. Essa visão estava alinhada com a busca
                        filosófica por harmonia e perfeição no universo, onde a Terra representava o ponto de equilíbrio do cosmos.
                    </p>
                </div>
                <div id="parte2">
                    <h2 className="subtitulos">Avanços e Limitações do Modelo Ptolemaico</h2>
                    <hr />
                    <p className="paragrafo">
                        Claudius Ptolemeu, um astrônomo grego do século II, desenvolveu um modelo geocêntrico mais detalhado em sua
                        obra ‘Almagesto’. Ele introduziu o conceito de epiciclos e deferentes para explicar os movimentos
                        retrógrados dos planetas, uma tentativa de manter a precisão nas previsões astronômicas. No entanto, o
                        modelo ptolomaico, apesar de inovador para a época, tinha limitações significativas. Por exemplo, ele
                        falhava em explicar plenamente as variações de brilho e as fases de Vênus, que apenas mais tarde seriam
                        esclarecidas pelo modelo heliocêntrico.
                    </p>
                </div>
                <div id="parte3">
                    <h2 className="subtitulos">Transição para o Modelo Heliocêntrico e os Conflitos com a Igreja</h2>
                    <hr />
                    <p className="paragrafo">
                        A aceitação do modelo heliocêntrico proposto por Nicolau Copérnico no século XVI marcou um ponto de ruptura
                        significativo com a tradição geocêntrica. A nova teoria desafiava não apenas o entendimento científico, mas
                        também a doutrina religiosa. A Igreja Católica resistiu a essa nova visão, pois ela desafiava a ideia de que
                        a Terra, como centro da criação divina, era o ponto focal do universo. Cientistas como Galileu Galilei
                        enfrentaram forte oposição e até julgamento por defenderem a visão heliocêntrica, indicando a intensidade do
                        conflito entre ciência e religião.
                    </p>
                </div>

                <div id="parte4">
                    <h2 className="subtitulos">Revolução Científica e Impacto no Pensamento Moderno</h2>
                    <hr />
                    <p className="paragrafo">
                        A mudança do modelo geocêntrico para o heliocêntrico representa um dos marcos mais importantes da Revolução
                        Científica. Ao adotar o heliocentrismo, os cientistas passaram a ver o universo como um sistema de leis
                        naturais que poderiam ser investigadas e compreendidas racionalmente. Este evento também influenciou a
                        filosofia moderna, especialmente em figuras como René Descartes, que buscavam entender o cosmos e a
                        existência humana através de princípios lógicos e matemáticos.
                    </p>
                </div>

                <div id="parte5">
                    <h2 className="subtitulos">Legado e Reavaliação do Modelo Geocêntrico</h2>
                    <hr />
                    <p className="paragrafo">
                        Apesar de superado, o modelo geocêntrico foi um passo crucial no desenvolvimento da ciência. Ele forneceu
                        uma estrutura inicial para o estudo dos astros e ajudou a construir um método científico mais rigoroso. A
                        comparação entre o modelo geocêntrico, o heliocêntrico, e as modernas teorias cosmológicas demonstra a
                        progressão e o aprofundamento da busca humana pelo entendimento do universo. Essa evolução reflete a
                        contínua adaptação do conhecimento científico às novas descobertas e tecnologias.
                    </p>
                </div>

                <div id="conclusao">
                    <h2 className="subtitulos">Conclusão</h2>
                    <hr />
                    <p className="paragrafo">
                        O modelo geocêntrico foi uma teoria central na história da ciência, fundamentada em observações empíricas e
                        conceitos filosóficos de sua época. Apesar de ter sido substituído pelo modelo heliocêntrico, ele abriu o
                        caminho para novas descobertas e para o desenvolvimento de um pensamento mais rigoroso na ciência. A
                        transição para uma visão heliocêntrica do universo foi um processo gradual, que envolveu séculos de pesquisa
                        e observação, e continua a ser um marco fundamental da história da astronomia.
                    </p>
                </div>
            </section >


            <div id="linhadofotter"></div>


            <section id="bibliografia">
                <h2 className="titulo-bibliografia">Bibliografia</h2>
                <p>
                    SOUZA, Luiz. História da Astronomia: do modelo geocêntrico ao heliocêntrico.
                    <a href="https://www.historiadaastronomia.com.br" className="cliqueaqui"> clique aqui</a>
                </p> 
                <p>
                    FERREIRA, Mariana. A teoria geocêntrica: conceitos e implicações. 
                    <a href="https://www.cientistasbrasileiros.com.br" className="cliqueaqui"> clique aqui</a>
                </p>
                <p>
                    OLIVEIRA, Carlos. O modelo ptolomaico e as suas implicações históricas. 
                    <a href="https://www.historiacientifica.com" className="cliqueaqui"> clique aqui</a>
                </p>
                <p>
                    LIMA, Ricardo. A transição do modelo geocêntrico para o heliocêntrico: uma revolução científica. 
                    <a href="https://www.revistascientifica.com.br" className="cliqueaqui"> clique aqui</a>
                </p>
            </section >
        </>
    );
}
export default Conteudo;