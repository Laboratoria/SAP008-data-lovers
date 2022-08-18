# Data Lovers

Objetivo principal: 

Criar uma página para visualizar um conjunto de dados que se adeque às necessidades do nosso usuário, além da visualização a página deve permitir filtrá-los, ordená-los e fazer algum cálculo agregado, a fim de tirarmos uma mínima ou média das informações mais relevantes para o usuário.

Para isso devemos entender quem é o usuário que busca esse tipo de informação, o que ele precisa saber e ver. (Pesquisar sobre história de usuário)

Dados escolhidos:

* [Studio Ghibli](src/data/ghibli/ghibli.json).
  Lista de animações e personagens do [Studio Ghibli](https://ghiblicollection.com/).
  - [Pesquisa com seguidores de Studio Ghibli](src/data/ghibli/README.pt-BR.md)

## 1. Apresentação

A ideia é de um catálogo dos filmes do Studio Ghibli (como exemplo o site IMDB), o usuário terá a possibilidade de marcar se já viu determinado filme ou mesmo utilizar o site para decidir qual próximo filme gostaria de assistir. Com filtragens como: minutagem (no banco de dados fornecido essa informação não consta, buscaremos entender se é possível inseri-la), filme com mais personagens femininos, filme com um personagem específico, filmes com menos ou mais personagens humanos, nota.

Produto inicial:
- Catálogo completo;
- 2 opções de filtro
- botão para efetivar a filtragem (?)

Ideias produto: 
- top 5 filmes com melhor pontuação; 
- Saber mais sobre os personagens;
- linha do tempo dos filmes;
- comunicação com o usuário (input de nome, cor do olho, cabelo e pele que gera o seu proprio card) - sugestão: avatar que insere as características do input;

Ideias design:
- cabeçalho com imagem de todos os personagens juntos ou montagem dos cartazes;

## 2. Protótipos de baixa fidelidade:

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/baixa%20fidelidade%20mobile.png" width = 100>
<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/baixa%20fidelidade%20desktop.png" width = 150>

## 3. Histórias de Usuário:

Definição de pronto:
- o código está de acordo com o guia e estilos;
- o código está no repositório;
- o código tem e passa os testes necessários;
- o código foi feito, ao menos em parte, em pair programming e/ou feito em code review;
- a história implementada foi testada com, pelo menos 3 usuários, e foram incorporados os melhoramentos necessários identificados nos testes de usabilidade.

### História 1: 
#### Como usuário quero escolher um filme pela duração para que caiba no meu tempo livre atual.

Critérios de aceitação:
- filtro para minutos

Elementos:
- inserir dado no banco (minutos);
- opção de filtro;
- comunicação com os novos dados;
- possibilidade de ordenar o resultado por nota/ano (prioridade baixa);

Definição de pronto()

### História 2: 
##### Como usuário quero ler a sinopse do filme para tomar a decisão de qual assistir.

Critérios de aceitação:
- ao clicar no filme surge um pop-up com os detalhes, incluindo sinopse.

Elementos:
- Comunicação com os novos dados;
- caixa pop up (modal);

Definição de pronto()

### História 3: 
#### Como pessoa usuária gostaria de escolher um filme onde as personagens principais são mulheres e crianças, para discutir gênero com minha filha. (Adulto)

Critérios de aceitação:
- filtro para idade e gênero;
- o usuário consegue selecionar tanto idade quanto gênero nos filtros;
- campo para exibição dos filmes que se encaixam nos filtros;
- ao dar o ok da seleção os filmes que não se encaixam no filtro sairão do catálogo; 

Elementos:
- Barra de rolagem;
- Botão para efetivar a filtragem (?)
- Comunicação com os dados;

Definição de pronto()

## 4. Estrutura dos Dados:

Passo a passo do algoritmo:
- Iterar o objeto para capturar os nome de cada filme (chave title e seu valor) e seu poster (chave poster e seu valor - src da img) correspondente para gerar a miniatura no catálogo geral da página principal.

#### Card Filme:
<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Screen%20Shot%202022-08-18%20at%2009.30.59.png" width = 150>

*Ideia de como criar o cartão:*
- Criar a estrutura do card ampliado em html e estilizar no css;
- Capturar os valor das chaves (ex: description, director, poster, release_date, rt_score) e inserí-los em campos específicos do html (innerHTML);
- realizar uma contagem de elementos do array (ex: people) para gerar a contagem de personagens do filme;
- realizar um count unique dos valores (ex: specie de personagens no array people) para ver quais espécies há naquele filme;

## 5. Protótipos de alta fidelidade:

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Primeira%20vers%C3%A3o.png width = 100>

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Vers%C3%A3o%20final%20-%20historia%201.png width = 100>

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Pagina%20incial%20-%20expandido.png width = 150>

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Filmes%20-%20expandido.png width = 150>

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Modal%20-%20vers%C3%A3o%20final.png width = 150>

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Personagens%20-%20expandido.png width = 150>

<img src="https://github.com/marinamassaneiro/Data-lovers/blob/readme/src/img/Readme/Locais%20e%20Veiculos%20-%20expandido.png width = 150>
