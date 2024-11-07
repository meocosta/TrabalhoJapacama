// Exemplo de importação: import imagemArtigo1 from '../visual/imagemartigo1exemplo.png';

/*
    Estrutura dos arquivos:
    - imagem: nome da imagem (importar como no exemplo acima)
    - nome: título do artigo
    - descrição: resumo do artigo
    - href: rota para o artigo (deve corresponder ao nome do artigo no App.jsx)
*/
export const arquivos = [

    //registros exemplo somente para demontração

    { imagem: 'https://picsum.photos/200/300?image=10', nome: 'Artigo 1', descrição: 'Descrição do artigo 1', href: '/artigo-1' },
    { imagem: 'https://picsum.photos/200/300?image=20', nome: 'Artigo 2', descrição: 'Descrição do artigo 2', href: '/artigo-2' },
    { imagem: 'https://picsum.photos/200/300?image=30', nome: 'Artigo 3', descrição: 'Descrição do artigo 3', href: '/artigo-3' },
    { imagem: 'https://picsum.photos/200/300?image=40', nome: 'Artigo 4', descrição: 'Descrição do artigo 4', href: '/artigo-4' },
    { imagem: 'https://picsum.photos/200/300?image=50', nome: 'Artigo 5', descrição: 'Descrição do artigo 5', href: '/artigo-5' },
    { imagem: 'https://picsum.photos/200/300?image=60', nome: 'Artigo 6', descrição: 'Descrição do artigo 6', href: '/artigo-6' },
    { imagem: 'https://picsum.photos/200/300?image=70', nome: 'Artigo 7', descrição: 'Descrição do artigo 7', href: '/artigo-7' },
    { imagem: 'https://picsum.photos/200/300?image=80', nome: 'Artigo 8', descrição: 'Descrição do artigo 8', href: '/artigo-8' },
    { imagem: 'https://picsum.photos/200/300?image=90', nome: 'Artigo 9', descrição: 'Descrição do artigo 9', href: '/artigo-9' },
    { imagem: 'https://picsum.photos/200/300?image=100', nome: 'Artigo 10', descrição: 'Descrição do artigo 10', href: '/artigo-10' },
    { imagem: 'https://picsum.photos/200/300?image=110', nome: 'Artigo 11', descrição: 'Descrição do artigo 11', href: '/artigo-11' },
    { imagem: 'https://picsum.photos/200/300?image=120', nome: 'Artigo 12', descrição: 'Descrição do artigo 12', href: '/artigo-12' },
    { imagem: 'https://picsum.photos/200/300?image=130', nome: 'Artigo 13', descrição: 'Descrição do artigo 13', href: '/artigo-13' },
    { imagem: 'https://picsum.photos/200/300?image=140', nome: 'Artigo 14', descrição: 'Descrição do artigo 14', href: '/artigo-14' },
    { imagem: 'https://picsum.photos/200/300?image=40', nome: 'Artigo 15', descrição: 'Descrição do artigo 15', href: '/artigo-15' },
];

/*
    Estrutura das fotos:
    - id: identificação da foto (mantenha a ordem)
    - descricao: descrição da foto
    - imagem: URL da imagem
*/
export const fotos = [

    //registros exemplo somente para demontração

    { id: 0, descricao: "Foto de montanha", imagem: "https://picsum.photos/seed/0/200/300" },
    { id: 1, descricao: "Foto de praia", imagem: "https://picsum.photos/seed/1/200/300" },
    { id: 2, descricao: "Foto de floresta", imagem: "https://picsum.photos/seed/2/200/300" },
    { id: 3, descricao: "Foto de cidade", imagem: "https://picsum.photos/seed/3/200/300" },
    { id: 4, descricao: "Foto de deserto", imagem: "https://picsum.photos/seed/4/200/300" },
    { id: 5, descricao: "Foto de cachoeira", imagem: "https://picsum.photos/seed/5/200/300" },
    { id: 6, descricao: "Foto de rio", imagem: "https://picsum.photos/seed/6/200/300" },
    { id: 7, descricao: "Foto de lago", imagem: "https://picsum.photos/seed/7/200/300" },
    { id: 8, descricao: "Foto de montanha nevada", imagem: "https://picsum.photos/seed/8/200/300" },
    { id: 9, descricao: "Foto de campo", imagem: "https://picsum.photos/seed/9/200/300" },
    { id: 10, descricao: "Foto de céu estrelado", imagem: "https://picsum.photos/seed/10/200/300" },
    { id: 11, descricao: "Foto de pôr do sol", imagem: "https://picsum.photos/seed/11/200/300" },
    { id: 12, descricao: "Foto de floresta tropical", imagem: "https://picsum.photos/seed/12/200/300" },
    { id: 13, descricao: "Foto de paisagem urbana", imagem: "https://picsum.photos/seed/13/200/300" },
    { id: 14, descricao: "Foto de campo florido", imagem: "https://picsum.photos/seed/14/200/300" },
    { id: 15, descricao: "Foto de colinas", imagem: "https://picsum.photos/seed/15/200/300" },
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
