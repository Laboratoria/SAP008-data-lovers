# Data Lovers ✨

* [1. Apresentação](#1-apresentação)
* [2. Idealização do projeto](#2-idealização-do-projeto)
* [3. Projeto Inicial](#3-projeto-inicial)
* [4. Protótipo de Baixa Fidelidade](#4-protótipo-de-baixa-fidelidade)
* [5. Protótipo de Alta Fidelidade](#5-protótipo-de-alta-fidelidade)
* [6. Projeto Final: ampliação da proposta inicial](#6-projeto-final-pós-ampliação-da-proposta-inicial)
* [7. Resultado Final](#7-resultado-final)
***

**Objetivo principal:** 

Criar uma página para visualizar um conjunto de dados que se adeque às necessidades do nosso usuário, além da visualização a página deve permitir filtrá-los, ordená-los e fazer algum cálculo agregado, a fim de tirarmos uma mínima ou média das informações mais relevantes para o usuário.

Para isso devemos entender quem é o usuário que busca esse tipo de informação, o que ele precisa saber e ver. (Pesquisar sobre história de usuário)

Dados escolhidos:

* [Studio Ghibli](src/data/ghibli/ghibli.json).
  Lista de animações e personagens do [Studio Ghibli](https://ghiblicollection.com/).
  - [Pesquisa com seguidores de Studio Ghibli](src/data/ghibli/README.pt-BR.md)

## 1. **Apresentação**

O projeto apresenta o universo dos Studio Ghibli a partir de 20 longas, suas sinopses, informação de personagens, locais e veículos únicos. Na página é possível filtrar os filmes por minutagem, onde será possível escolher um filme que caiba no seu tempo disponível. Ordená-los por nota e visualizar os filmes que possuem uma maior aceitação pelo público. Assim, é possível visualizar quais filmes você já assistiu ou mesmo decidir qual próximo filme gostaria de assistir.

## 2. **Idealização do Projeto**

O primeiro passo foi entender como os nossos dados estavam estruturados, neste caso um array de objetos, nos quais alguns valores também eram compostos de array de outros objetos. Ou seja, para alcançar algumas informações precisaríamos entender como realizar iterações em arrays de objetos, e em alguns casos, realizar iterações dentro de iterações para acessar dados em array alocados em valores de objetos. 

- Object Studio Ghibli:
  - Films => cada *film* um objeto que entre suas propriedades possui:
    - People => cada *people* um objeto
    - Location => cada *location* um objeto
    - Vehicles => cada *vehicle* um objeto

### 2.1 Ideia inicial para o card de cada filme:

![card do filme](https://raw.githubusercontent.com/marinamassaneiro/Data-lovers/main/CardFilme.png)

Ideia de como criar o cartão:
- Criar a estrutura do card ampliado em html e estilizar no css;
- Capturar os valores das chaves (ex: description, director, release_date, rt_score) e inserí-los em campos específicos do html (**Template String**);
- realizar uma contagem de elementos do array (ex: people) para gerar a contagem de personagens do filme (Pesquisar sobre como realizar contagem de elementos em array);
- realizar um contagem dos valores (ex: specie de personagens no array people) para ver quais espécies há naquele filme (Como realizar contagem de objetos dentro de array);


## 3. **Projeto Inicial**

Como ideia inicial focamos na construção de uma página única com a função de exibir os pôsteres dos filmes e informações detalhadas de cada um deles. Proposta suficiente para atender as necessidades das nossas *História de Usuário 1 e 2*. Desta ideia surgiu nosso protótipo inicial de baixa e alta fidelidade. O **principal desafio** desta etapa foi entender como manipular objetos e printar suas informações em tags específicas.

Produto inicial:
- Catálogo completo;
- 1 opção de filtro.

### 3.1 **História de Usuário 1**
> Como pessoa usuária gostaria de conhecer as produções do Stúdio Ghibli para ver quais e quantos filmes ainda não vi.

Critérios de aceitação:
- apresentar todos os filmes;
- dispor os pôsteres dos filmes na tela principal, com nome e ano de produção;

Definição de pronto:
- o código está de acordo com o guia e estilos;
- o código está no repositório;
- o código tem e passa nos testes necessários;
- o código foi feito, ao menos em parte, em pair programming e/ou feito em code review;
- a história implementada foi testada com, pelo menos 3 usuários, e foram incorporados os melhoramentos necessários identificados nos testes de usabilidade.

🛑 **Desafio**: entender como *automatizar* a inserção desses dados no html e não criar cartão por cartão manualmente, copiando os dados do objeto.

✅ **Resolução**: desafio superado após entendermos como manusear *template strings*.

### 3.2 **História de Usuário 2**

> Como pessoa usuária gostaria de escolher um filme onde as personagens principais são do gênero feminino (os dados de idade não possuem padrão e apresentam números e faixa etária misturados), para discutir gênero com minha filha.

**Critérios de aceitação:**
- Filtro para gênero;
- Usuário consegue filtrar filmes que possuem mais personagens de um gênero específico;
- Catálogo de filmes;
- Ocultar filmes que não se encaixam na característica escolhida;

**Definição de pronto:**
- botão de filtragem funcionando;
- filtragem devolvendo apenas os filmes que se encaixem na escolha do usuário;
- o código tem e passa nos testes necessários;
- o código foi feito, ao menos em parte, em pair programming e/ou feito em code review;

🛑 **Desafio**: realizar uma contagem de personagens por gênero e por filme, depois calcular se há mais personagens de gênero feminino ou masculino em cada filme e em seguida construir um filtro que alcance essa informação.

✅ **Resolução**: desafio superado após estudarmos sobre *filter*. Assim, escrevemos uma fnção que extrai dos dados de cada filme um array de personagens. Em seguida, filtra apenas personagens de gênero feminino. Depois compara o tamanho do array filtrado com o array original e caso o array filtrado seja maior que 50% do array original afirmamos que há mais personagens de gênero feminino no filme em questão.

❗**OBS 1**: Apenas 2 de 171 personagens possuíam gênero indefinido.

❗**OBS 2:** Ao final esse filtro foi removido pois ele não agregou o valor que esperávamos. Os filmes tendem a ter uma representatividade equilibrada de gêneros. Deste modo, optamos por manter apenas o filtro de minutagem e a função de ordenar os dados, sobretudo por avaliação elaborados nas histórias de usuário posteriores.

## 4. **Protótipo de Baixa Fidelidade**

![protótipo de baixa fidelidade](https://raw.githubusercontent.com/marinamassaneiro/Data-lovers/main/prototipo_baixa_fidelidade.png)

## 5. **Protótipo de Alta Fidelidade**

![protótipo de alta fidelidade](https://raw.githubusercontent.com/marinamassaneiro/Data-lovers/main/versoes_prototipo_alta_fidelidade.png)

## 6. **Projeto Final Pós Ampliação da Proposta Inicial**

De modo a atender *histórias de usuários* mais detalhadas, assim como tornar a navegabilidade mais fluída optamos por dividir as informações (filmes, personagens e veículos/locais) em páginas específicas e alcançamos a seguinte estrutura:

- 🏠 **Home** com uma breve introdução do projeto e uma apresentação de dados numérico sobre os dados apresentados, tais como a quantidade de filmes, personagens, veículos e locais apresentados nas páginas seguintes.

- 🎬 **Filmes:** apresenta os 20 longas presentes na base de dados e ao clicar em cada um dos banners é possível adquirir informações como sinopse do filme, direção, tempo de duração, nota e quantidade de personagens envolvidos na história. Nessa página é possível ordernar os filmes por nota de avaliação de forma decrescente e filtra-los por tempo de duração.

- 🦸🏾‍♀️ **Personagens:** apresenta informações sobre personagens do filme escolhidos, tais como: foto, nome, gênero, idade e raça.

- 🛩️🏞️ **Veículos e Locais:** apresenta os locais descritos onde os filmes estão ambientados e os veículos particulares adotados em alguns desses filmes com foto, nome do filme e nome do local/veículo. Nessa página é possível filtrar a visualização apenas por veículos ou por locais.

### 6.1 **Protótipos de Alta Fidelidade (Versão Final)**

![protótipo de alta fidelidade](https://raw.githubusercontent.com/marinamassaneiro/Data-lovers/main/versoes_prototipo_alta_fidelidade_final.png)

### 6.1 **História de Usuário 3**
> Como usuário quero escolher um filme pela duração para que caiba no meu tempo livre atual.

Critérios de aceitação:
- filtro para minutos

Definição de pronto:
- botão de filtragem funcionando;
- filtragem devolvendo apenas os filmes que se encaixam na escolha do usuário;
- o código tem e passa nos testes necessários;
- o código foi feito, ao menos em parte, em pair programming e/ou feito em code review;

🛑 **Desafio:** inserir minutagem na base de dados (duração);

✅ **Resolução**: o site do Studio Ghibli possui as informações de minutagem, como nossos dados possuíam apenas 20 filmes optamos por inserir essa informação em nossa base.

### 6.2 **História de Usuário 4**
> Como pessoa usuária quero ler a sinopse do filme para tomar a decisão de qual assistir.

Critérios de aceitação:
- ao clicar no pôster do filme escolhido surge um pop-up com suas informações, incluindo sinopse.

Definição de pronto:
- caixa pop up (modal);
- Informações específicas para cada um dos filmes do catálogo;

🛑 **Desafio:** uma modal única para cada filme;

✅ **Resolução**: superamos esse desafio ao associar a template string do modal com a template string original que insere os pôsteres dos filmes na tela. O pôster do filme tornou-se o botão que daria acesso às informações adicionais. Ao final entendemos que o modal seria um só, porém teria informações que seriam substituídas de acordo com o filme clicado. 

### 6.3 **História de Usuário 5**
> Como pessoa usuária gostaria de visualizar informações de personagens do filme que assisti para aprender o nome de todos.

Critérios de aceitação:
- conseguir visualizar todos os personagens de um filme específico;
- visualizar informações de foto, nome, idade, gênero e espécie para cada personagem.

Definição de pronto:
- Cards de personagens;
- Informações textuais relacionadas ao card de cada personagem;

🛑 **Desafio:** muitas imagens de personagens estavam com o link quebrado.

✅ **Resolução**: concordamos que a imagem de personagens por filme incluiria bastante valor ao projeto, então decidimos substituir os links quebrados buscando no mesmo site da base de dados ou no site oficial do Studio Ghibli.

# 7. Resultado Final

O resultado final do projeto pode ser visitado [aqui](https://marinamassaneiro.github.io/Data-lovers/index.html).
