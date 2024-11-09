// Exemplo de importação: import imagemArtigo1 from '../visual/imagemartigo1exemplo.png';
import imagem1 from '../visual/img1.jpg';
import imagem2 from '../visual/img2.jpg';
import imagem3 from '../visual/img3.jpg';
import imagem4 from '../visual/img4.jpg';
import imagem5 from '../visual/img5.jpg';
import imagem6 from '../visual/img6.jpg';
import imagem7 from '../visual/img7.jpg';
import imagem8 from '../visual/img8.jpg';
import imagem9 from '../visual/img9.jpg';
import imagem10 from '../visual/img10.jpg';
import imagem11 from '../visual/img11.jpg';
import imagem12 from '../visual/img12.jpg';
import imagem13 from '../visual/img13.jpg';



/*
    Estrutura das fotos:
    - id: identificação da foto (mantenha a ordem)
    - descricao: descrição da foto
    - imagem: URL da imagem
*/
export const fotos = [
    {id:0, descrição:"fotos do evento", imagem:imagem1},
    {id:1, descrição:"fotos do evento", imagem:imagem2},
    {id:2, descrição:"fotos do evento", imagem:imagem3},
    {id:3, descrição:"fotos do evento", imagem:imagem4},
    {id:4, descrição:"fotos do evento", imagem:imagem5},
    {id:5, descrição:"fotos do evento", imagem:imagem6},
    {id:6, descrição:"fotos do evento", imagem:imagem7},
    {id:7, descrição:"fotos do evento", imagem:imagem8},
    {id:8, descrição:"fotos do evento", imagem:imagem9},
    {id:9, descrição:"fotos do evento", imagem:imagem10},
    {id:10, descrição:"fotos do evento", imagem:imagem11},
    {id:11, descrição:"fotos do evento", imagem:imagem12},
    {id:12, descrição:"fotos do evento", imagem:imagem13}
];



/*
    Estrutura dos grupos:
    Cada objeto na lista "conteudo" deve conter:
    - nome: nome da pessoa
    - número: identificação da pessoa (número único)
    - cargo: cargo da pessoa (use 'representante' ou 'integrante')
    - grupo: nome do grupo (necessário apenas para representantes)
*/


export const conteudo = [
    { nome: 'Rodrigo Dias', número: 30, cargo: 'representante', grupo:'conteúdo' },
    { nome: 'Bruna Lopes', número: 2, cargo: 'integrante' },
    { nome: 'Murilo', número: 23, cargo: 'integrante' },
    { nome: 'Fernando Monaco', número: 7, cargo: 'integrante' },
    { nome: 'Gustavo Santana', número: 11, cargo: 'integrante' },
    { nome: 'Raphael', número: 29, cargo: 'integrante' },
    { nome: 'Miguel de Jesus', número: 21, cargo: 'integrante' },
    { nome: 'Rodrigo Dias', número: 30, cargo: 'integrante' },
    { nome: 'Gustavo Curis', número: 10, cargo: 'integrante' },
    { nome: 'Luan', número: 15, cargo: 'integrante' },
    { nome: 'Isabelly Emiliano', número: 12, cargo: 'integrante' },
    { nome: 'Fernando Marques', número: 6, cargo: 'integrante' },
    { nome: 'Julio Rebollo', número: 14, cargo: 'integrante'},
];



/*
    Estrutura da apresentação:
    Cada objeto na lista "apresentação" deve conter:
    - nome: nome da pessoa
    - número: identificação da pessoa (número único)
    - cargo: cargo da pessoa (apenas 'integrante' para esta lista)
*/


export const apresentação = [
    { nome: 'Enzo Magrini', número: 5, cargo: 'integrante' },
    { nome: 'Julio Rebollo', número: 14, cargo: 'representante', grupo: "geral" },
    { nome: 'Isabelly Emiliano', número: 12, cargo: 'integrante' },
    { nome: 'Guilherme Caiado', número: 9, cargo: 'integrante' },
];



/*
    Estrutura do design:
    Cada objeto na lista "desing" deve conter:
    - nome: nome da pessoa
    - número: identificação da pessoa (número único)
    - cargo: cargo da pessoa (use 'representante' ou 'integrante')
    - grupo: nome do grupo (necessário apenas para representantes)
*/


export const design = [
    { nome: 'Ryan', número: 32, cargo: 'representante', grupo: "design" },
    { nome: 'Bruno Teixeira', número: 3, cargo: 'representante', grupo:"design" },
    { nome: 'Maria Clara', número: 17, cargo: 'integrante' },
    { nome: 'Vitória', número: 33, cargo: 'integrante' },
    { nome: 'Rodrigo', número: 31, cargo: 'integrante' },
    { nome: 'Pedro', número: 36, cargo: 'integrante' },
    { nome: 'Pedro Camargo', número: 26, cargo: 'integrante' },
    { nome: 'Nickolas', número: 24, cargo: 'integrante' },
    { nome: 'João Vitor Chaves', número: 34, cargo: 'integrante' },
    { nome: 'Pietro', número: 28, cargo: 'integrante' },
    { nome: 'Julio Rebollo', número: 14, cargo: 'representante', grupo:'geral' },
];



/*
    Estrutura do site:
    Cada objeto na lista "site" deve conter:
    - nome: nome da pessoa
    - número: identificação da pessoa (número único)
    - cargo: cargo da pessoa (use 'representante' ou 'integrante')
    - grupo: nome do grupo (necessário apenas para representantes)
*/


export const site = [
    { nome: 'Maria Elisa', número: 18, cargo: 'representante', grupo: "site (react)" },
    { nome: 'Brian Rudy', número: 1, cargo: 'representante', grupo: "site (deploy)" },
    { nome: 'Geovanna', número: 8, cargo: 'integrante' },
    { nome: 'Júlio Rebollo', número: 14, cargo: 'integrante' },
    { nome: 'Pedro Henrique Lima', número: 28, cargo: 'integrante' },
    { nome: 'João Vitor Mechi', número: 13, cargo: 'integrante' },
    { nome: 'Mariana Yuki', número: 19, cargo: 'integrante' },
    { nome: 'Miguel Pires', número: 22, cargo: 'integrante' }
];
