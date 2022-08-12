# #02 Projeto Laboratória - Data Lovers

## Prefácio
* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Definição do produto](#2-definição-do-produto)
* [3. Aplicação](#3-aplicação)
* [4. Repositório](#4-repositório)
* [5. Deploy](#5-deploy)

## 1. Resumo do projeto
Segundo a
[Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read), 90% dos dados que existem hoje foram gerados durante os últimos dois anos. A cada dia geramos 2.5 milhões de terabytes de dados, uma cifra sem precedentes. Apesar disso, os dados por si só são de pouca utilidade. Para que sejam convertidos em **informação** compreensível para os usuários, é preciso entender e processar esses dados. Uma forma simples de fazer isso é criando _interfaces_ e _visualizações_.

Neste projeto, foi criada a segunda aplicação web do bootcamp Laboratória, de interface amigável e compreensível. Nela, o usuário 

### Rick and Morty
Rick and Morty

## 2. Definição do produto
* Quem são os usuários principais do produto?
* Quais são os objetivos dos usuários com relação ao produto?
* Quais são os dados mais relevantes que querem ver na interface e por quê?
* Quando utilizam ou utilizariam o produto?

### História do usuário
Foram definidas 02 histórias de usuário para este projeto:
  01. "A fim de não receber spoilers, como um novo espectador da série, quero poder pesquisar somente sobre os personagens que estão vivos na trama."
  02. "Como uma estudante de sociologia, eu posso filtrar os episódios por em quais aparecem mulheres, a fim de desenvolver uma pesquisa sobre representação de personagens femininas em animações adultas."

### Definição de pronto
A fim de definir a aplicação, a partir das histórias de usuário, obtem-se a definição de pronto referente a cada uma delas
  01. Para que esta história seja atendida, é necessário:
  - Um campo de pesquisa com palavra-chave;
  - Uma seção de filtragem com opção de selecionar o filtro de “status” (vivo/morto) que deseja aplicar, por intermédio de radio button;
  - Botão “OK” ou “Pesquisar” para disparar a função de filtragem;
  - Exibição de CARDS contendo as informações principais (nome, imagem e local de origem) dos personagens que atendem à filtragem.
  - Ao clicar no CARD, ele expande e exibe informações complementares sobre o personagem selecionado.

02. Para que esta história seja atendida, é necessário:
  - Um campo de pesquisa com palavra-chave;
  - Uma seção de filtragem com opção de selecionar o filtro de “gênero” (feminino/masculino) que deseja aplicar, por intermédio de radio button;
  - Botão “OK” ou “Pesquisar” para disparar a função de filtragem;
  - Exibição de CARDS contendo as informações principais (nome, imagem e local de origem) dos personagens que atendem à filtragem;
  - Ao clicar no CARD, ele expande e exibe outras informações, inclusive a listagem dos episódios em que aquele personagem, em particular, aparece.
  
## 3. Aplicação 
### Prototipagem
O layout conta o `<h1>` "Rick and Morty" como título, uma `textarea` de valor "Palavras-chave", um `input` de valor "Filtros" que abre uma seção com `radio buttons` com as seleções Status (vivo/morto), Gênero (feminino/masculino) e Espécie (humano/não humano). O resultado segue abaixo:
  - Baixa fidelidade
  
  ![baixa_fidelidade_web](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/low_web.gif) 
  
  ![baixa_fidelidade_mobile](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/low_mobile.gif)
  
  - Alta fidelidade
  
  ![alta_fidelidade_web](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/high_web.gif)
  
  ![alta_fidelidade_mobile](https://github.com/blericalopes/SAP008-data-lovers/blob/main/src_data_lovers/prototype/high_mobile.gif)
### Paleta de cores e imagens externas

## 4. Repositório
O repositório é o espaço digital que armazena um código e as versões que podem advir dele. Neste caso, o repositório está hospedado no GitHub, onde é possível criar um perfil - um espaço próprio do usuário para guardar códigos. O ideal é ter um repositório por projeto. Para tanto, é possível criar um repositório e nomeá-lo ou forkar um repositório já existente (de outro perfil) para fazer as próprias mudanças sem alterar o arquivo original. No caso de um novo repositório criado, é importante acessar a pasta do computador onde o repositório está por meio do terminal e usar o comando `git init` (no caso de GitBash, terminal do Linux, terminal do Ubuntu). Para este repositório cujo README vos fala, isso não é necessário.

### Fork
`Fork` é a ação de bifurcar um repositório, ou seja, é como se o repositório original fosse um bonde com passageiros dentro (códigos) que trilha um caminho que, em dado momento, é bifurcado (fork) e agora segue dois caminhos distintos, porém com um passado em comum. Da mesma forma, o repositório disponibilizado por um Usuário A possui arquivos e códigos que, quando "forkados" por outro Usuário B, seguem o caminho que o Usuário B determinar sem afetar o repositório original, disponibilizado pelo Usuário A. Para acessar este repositório, cujo README vos fala, é preciso forká-lo. Para isso, basta clicar em `Fork`, no canto direito superior da página deste repositório no GitHub.

### Fork and Knife

### Clone
`Clone` é a ação de clonar o repositório forkado para a máquina na qual o(s) código(s) é(são) alterado(s). Clonar o repositório forkado permite que o computador acesse todos os arquivos dentro do repositório clonado. Para clonar o repositório forkado, que, agora, pertence ao usuário que forkou, basta:
- Clicar no botão `Code` **na página do repositório do usuário que forkou**;
- Copiar a url-do-repositório ali disponibilizado; 
- Abrir o Terminal;
- Acessar a pasta para onde deseja clonar o repositório;
- Rodar o comando `git clone <url-do-repositório>`.

## 5. Deploy
`Deploy` é a ação de colocar o código no ar. Quando um código/aplicação é "deployado", significa que ele já está disponível para ser acessado como qualquer outro site, por intermédio da URL colocada na barra de endereço do navegador. Para "deployar", basta:
- Acessar a pasta com os arquivos a serem adicionados no Terminal;
- Rodar o comando `npm run deploy` no Terminal.

## Checklist

* [ ] Usar VanillaJS.
* [ ] Passa pelo linter (`npm run pretest`)
* [ ] Passa pelos testes (`npm test`)
* [ ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
* [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui histórias de usuário no `README.md`.
* [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
* [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
* [ ] UI: Mostra lista/tabela/etc com dados e/ou indicadores.
* [ ] UI: Permite ordenar dados por um ou mais campos (asc e desc).
* [ ] UI: Permite filtrar dados com base em uma condição.
* [ ] UI: É _responsivo_.