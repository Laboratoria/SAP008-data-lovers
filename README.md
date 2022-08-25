# Dashboard Rick and Morty - Projeto Data Lovers

## Índice


***

## 1. Resumo do projeto

Segundo a [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read)
90% dos dados que existem hoje foram gerados durante os últimos dois anos. A
cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem precedentes.

Apesar disso, os dados por si só são de pouca utilidade. Para que essas grandes
quantidades de dados se convertam em **informação** compreensível para os
usuários, precisamos entender e processar estes dados. Uma forma simples de
fazer isso é criando _interfaces_ e _visualizações_.

Dado contexto, desenvolvemos uma aplicação web que interaja com os usuários, desde os leigos, até os fãs da renomada série animada Rick and Morty, utilizando referências aplicadas ao design de interação. A ideia foi construir uma página web inspirada num modelo de dashboard, ou seja, um painel personalizado para visualização de informações avindas de dados existentes. Através de uma interface lúdica e autodidata, nossos usuários conseguem navegar pelos cards da página e ao passar a seta por cima de algum, por meio de um efeito page flip, terá acesso à informações do respectivo personagem como: nome, status, espécie, gênero e localização. Além disso, nosso usuário tem a possibilidade de utilizar filtros para uma melhor seleção das informações que deseja acessar, inerente à ordem alfabética dos dados, de acordo com sua escolha, ou até mesmo para uma busca mais assertiva, utilizar o campo de busca.
### Rick and Morty

Rick & Morty é uma série animada de comédia que mostra as aventuras interdimensionais de Rick, a mente mais brilhante da galáxia, e seu neto Morty. Com sua arma capaz de criar portais para viajar no tempo-espaço, Rick leva Morty para explorar todos as absurdas formas de vida que o universo é capaz de sustentar. 

## 2. Definição de produto

Pensando na legião de fãs da série, mas também naqueles que apesar de ainda leigos, são atravessados pela repercussão da série, as informações trazidas atuam como uma dashboard, a fim de contemplar as diversas faces de nossos potenciais usuários. São essas:

  • imagem associada ao personagem em questão
  • nome do personagem
  • status de vida
  • gênero
  • espécie
  • localização
  • número de personagens total e em cada filtro selecionado
  • campo de busca para pesquisas objetivas

  Esses dados são impressos ao usuário logo de inicio na página inicial, por meio do efeito page flip em cada um dos cards, de modo que o usuário possa utilizar os filtros no menu acima para navegar pelas informações desejadas de maneira mais assertiva.

  ### História de usuário

  Foram definadas duas histórias de usuário pensando no uso da dashboard para fins de pesquisa.

  1. "Sou um usuário que está no ensino médio e precisa pesquisar quais espécies da série existem para um trabalho escolar e quantos personagens existem de cada espécie."
    Cenário: Dado que estou na página inicial, vou selecionar o filtro de "espécies" para ter acesso às mesmas.
  2. "Sou um usuário que deseja saber quantos e quais personagens estão vivos."
    Cenário: Dado que estou na página inicial, vou selecionar o filtro "status", logo a opção "vivo" e então terei acesso às informações que desejo.

  ### Definição de resultado

  À utilizar às histórias de usuário como parâmetro para desenvolver o projeto, foi necessário obter para definição de resultado, escopo inerente a cada uma das histórias.
   1. Para que esta seja atendida, foi necessário:
      • imprimir a exibição dos cards na tela trazendo as informações associadas aos personagens
      • um filtro capaz de filtrar as "espécies" já trazendo a informação dos tipos de espécies existentes
      • um cálculo que traga a informação de quantidade de personagens existentes naquela categoria

   2. Para que esta seja atendida, foi necessário:
      • imprimir a exibição dos cards na tela trazendo as informações associadas aos personagens
      • um filtro capaz de filtrar o "status" entre "vivo" e "morto" dos personagens
      • um retorno na tela ao clicar em "vivo" trazendo os personagens vivos da série
      • um cálculo dentro desse filtro que traga a quantidade de personagens vivos nessa tela

### 3. Web Aplicação

Ao pensar em interface aplicativa para este projeto, foi definido cores e tipografias que dialogassem com o tema, pensando em levar conforto e boa impressão aos nossos usuários, sem trabalhar com demasiado colorismo e trazendo tipografias universais para que nossos usuários, em diferentes máquinas e locais, tivessem uma experiência semelhante. Para isso, utilizamos uma fonte universal da Google Fonts [Patua One](https://fonts.googleapis.com/css2?family=Patua+One&display=swap) em todo o design. 

O layout conta com a [logo](/titulose.png) de Rick and Morty no `<header>`, acompanhado de um menu ao qual "C-137" faz referência a "Home", já que na série C-137 é a terra na dimensão conhecida pelos humanos, portanto, este botão leva a página inicial da web. Em sequência, temos o botão "More" qu trás informações sobre a dashboard de Rick and Morty e como utilizá-la, por fim, temos o botão "Multiverso" direcionando para uma página de HTML contendo informações sobre as desenvolvedoras do projeto, uma associação por "transportar" para outro HTML. Abaixo da header, nosso `<body>` traz os botões <select> que dão origem aos nossos filtros Status (vivo/morto/indefinido), Gênero (feminino/masculino/indefinido), Espécie (humano/humanóide/alien/animal) e Ordenar (A-Z/Z-A).  Os cards utilizam o [background-image](espacowe%20copy.jpg) e os demais botões utilizam as cores `#3b065c` e `#000000`, por fim, a cor das fontes foi definida em `#FFF`.

### Protótipos

A prototipagem do projeto foi definida em duas etapas: 
#### Baixa fidelidade
Feito à mão, utilizado como ponto de partida para elaborar grosseiramente a ideia.

#### Alta fidelidade

O passo seguinte é desenhar sua Interface de Usuário (UI - _User Interface_).
Para isso você deverá aprender a usar alguma ferramenta de _visual design_. Nós
recomendamos [Figma](https://www.figma.com/) que é uma ferramenta que funciona
no navegador e no qual é possível criar uma conta gratuita. Mas você é livre
para usar outros editores gráficos como Illustrator, Photoshop, PowerPoint,
Keynote, etc. Lembre-se de usar a identidade gráfica correspondente ao arquivo
de dados que escolher.

O protótipo deve apresentar o que seria _ideal_ em sua solução. Digamos que é o
que desejaria implementar se tivesse tempo ilimitado para hackear. Não se
esqueça de incluir em seu protótipo os fundamentos de _visual design_.

#### Testes de usabilidade

Durante o desafio você deverá fazer testes de usabilidade com usuários
diferentes, e com base nos resultados desses testes, iterar seus desenhos de
interface. Conte-nos quais problemas de usabilidade você detectou através dos
testes e como os resolveu na proposta final.

### Implementação da interface de usuário (HTML/CSS/JS)

Após desenhar sua interface de usuário, deverá trabalhar na sua implementação.
**Não** é necessário que construa a interface exatamente da mesma forma que
desenhou. Terá um tempo limitado para trabalhar no projeto, então você deve
priorizar as tarefas.

No mínimo, sua implementação deverá:

1. Mostrar os dados em uma interface: pode ser em cards, tabelas, listas, etc.
2. Permitir ao usuário interagir com a interface para obter as informações que
   necessita;
3. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets, notebooks, etc.
4. Que a interface siga os fundamentos de _visual design_.

### Testes unitários

O _boilerplate_ do projeto não inclui testes unitários. Assim, você terá que
escrever seus próprios testes para as funções encarregadas de _processar_,
_filtrar_ e _ordenar_ os dados, assim como _calcular_ estatísticas.

Seus testes unitários devem ter cobertura mínima de 70% de _statements_
(_sentenças_), _functions_ (_funções_), _lines_ (_linhas_), e _branches_
(_ramos_) do arquivo `src/data.js`, que irá conter suas funções e que está
detalhado na seção de [Considerações técnicas](#srcdatajs).

## 6. Hacker edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se já tiver terminado
todos os requisitos anteriores e tiver tempo, pode tentar completá-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem
deste projeto.

Features/características extra sugeridas:

* Ao invés de consumir dados estáticos do repositório, pode fazer isso de forma
  dinâmica, carregando um arquivo JSON com `fetch`. A pasta `src/data` contém
  uma versão `.js` e uma `.json` de cada conjunto de dados.
* Adicione à sua interface visualização de dados em forma de gráficos. Para
  isso, recomendamos explorar bibliotecas de gráficos como
  [Chart.js](https://www.chartjs.org/) ou [Google
  Charts](https://developers.google.com/chart/).
* 100% de cobertura nos testes.
