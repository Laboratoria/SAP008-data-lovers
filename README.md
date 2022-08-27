# Projeto Data Lovers - PokeLovers

Este projeto foi desenvolvido durante o curso da Laborátoria, pelas alunas: Ellen Cavalcante e Vanessa Bueck.

Pokémon GO é um game grátis de realidade aumentada para Android e iPhone (iOS), que permite ao jogador viver uma aventura real, usando o mapa do mundo onde vivemos, para caçar e capturar Pokémon ao longo do caminho.

Com o objetivo de inteirar os usuários do jogo e amantes do desenho, desenvolvemos o PokéLovers.
O site possui informações sobre as novidades do Pokémon GO, playlist dos filmes, e principal, na home contém uma pokedex, onde os usuários do jogo podem visualizar os principais Pokémons da região Kanto e Johto, fazer filtro por nome, por tipo, por raridade, por ordem alfabética de AaZ e ZaA, além disso, o filtro por tipo permite que o usuário obtenha informações sobre a % de Pokémons deste determinado gênero.
E para proporcionar ainda mais conhecimento ao user, ele pode obter mais informações sobre o pokémon clicando no card do pokémon escolhido.

Os dados disponibilizado na home (Pokedex), auxiliará o usuário do jogo a conhecer quais Pokémons mais raros, por exemplo, para que assim ele possa montar um planejamento para a busca do mesmo.
E filtro tipo, ajudará na escolha do Pokémon mais adequado para o combate.

Para o desenvolvimento do projeto, realizamos pesquisas com os usuários do jogo, coletando as principais necessidades de dados para auxiliar em um maior desempenho pelas buscas e escolhas dos Pokémons para as batalhas.

Para acessar o site, clique em um dos links abaixo:
Github Vanessa Bueck
Github Ellen Cavalcante

E para melhorar a navegação no readme, abaixo segue o menu das sessões a seguir:

## Ferramentas utilizadas

## História dos usuários

## Protótipos

## Testes de usabilidade

# Ferramentas utilizadas

Inicialmente fizemos uma reunião de brainstorm, para que pudéssemos entender quais as ideias que tínhamos e quais seriam viáveis seguir, com o filtro de todas ideias e quando identificamos que seguiríamos com um site com dados d Pokémon, iniciamos as demais atividades por meio das ferramentas abaixo:

- Notion: Usamos o Notion para incluir todas as atividades/ações que tínhamos que realizar e assim separar melhor qual fluxo de trabalho.
- Figma: Fizemos no Figma o protótipo de baixa fidelidade, onde pensamos na ideia inicial do nosso site, mas depois de realizar pesquisas com os usuários o protótipo inicial passou por várias mudanças para atender melhor o perfil dos users.
- MetroRetro: Utilizamos esta ferramenta para fazer toda retrospectiva dos passos alcançados na idealização do projeto e também os pontos de melhorias, tanto da aplicação, quanto do trabalho em dupla.
- Visual Studio Code: Usamos este aplicativo para conseguir implementar a aplicação, usamos o HTML, CSS, JavaScript.

# História dos usuários

## Definição do produto

Após uma pesquisa com os usuários do jogo Pokémon GO, vimos ser necessário a criação de um site onde os usuários do jogo possam obter informações para auxiliar eles nos desempenhos das batalhas.

Sendo assim, desenvolvemos o PokéLovers, nele o usuário ao acessar estará na home inicial (Pokedex), onde encontrará todos os Pokémons da Região Kanto e poderá filtrar por nome, tipo e raridade.

No site também tem um menu a direita, onde o usuário poderá saber as novidades sobre o Pokémon GO, filmes para conhecer melhor a história dos personagens e assim além do usuário obter informações de auxílio na batalha, também obterá informações para conhecer melhor sobre a história do Pokémon.

- Quem são os usuários? São os usuários do jogo Pokémon GO
- O que os usuários precisam? De uma aplicação que não seja necessário login, assim tendo fácil acesso aos dados, e também onde os usuários possam fazer filtragens por tipo (ex: ice,normal,steel...); raridade (ex: normal, legendário...) e por nome.
- Por quê? Para que os usuários possam ganhar suas batalhas no jogo.

# Protótipos

## PROTÓTIPO BAIXA FIDELIDADE:

Inicialmente o primeiro desenho da aplicação foi pensado com um campo de pesquisa, onde o usuário poderia buscar os pokémns por nome, um filtro por tipo e o botão pesquisar, então todo tipo de pesquisa ou filtragem era necessário o ususário apertar o botão "Buscar Pokemons" para obter o resultado.

Além disso, possuia botões na tela inicial, com link de informações, novidades, etc...

<img src="https://github.com/vanessabuecker/SAP008-data-lovers/blob/main/src/img/PrototipoWEB_baixa.jpg">

Mas, conforme a pesquisa com os usuários, entendemos que os mesmos buscavam por uma aplicação de fácil interação e resultado, onde além de não ter necessidade de fazer login, as filtragens ou buscas tivessem uma resposta melhor, desta forma, entendemos a necessidade de mudar a busca pelo evento "change" e "key press", assim quando o user alterasse as informações nos filtros a resposta seria automática na tela. Com isso, obtivemos a versão final do protótipo.

## PROTÓTIPO ALTA FIDELIDADE - web

<img src="https://github.com/vanessabuecker/SAP008-data-lovers/blob/main/src/img/prototiposWeb.jpg">

## PROTÓTIPO ALTA FIDELIDADE - mobile

<img src="https://github.com/vanessabuecker/SAP008-data-lovers/blob/main/src/img/prototiposMobile.jpg">

# Testes de usabilidade

- Foi retirado o botão buscar Pokémons, pois estava sem usabilidade após colocarmos a mudança dos eventos como "change" ou "keypress".

- Linguagens diferentes no site foram identificadas pelos usuários, então atualizamos para que contenha apenas uma linguagem.

- Atualizamos as Cards para que quando o usuário passe com o mouse em cima de um card, ele fique com a cor "amarela", assim facilitando a visualiação do card selecionado.
