import {characters} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


const infos = data;

document.getElementById('box-container').innerHTML = infos;

console.log(infos)

//criar método pra acessar o results dentro do data, chamar ele e printar na tela









//quando alguém clicar na opção 'vivo' aparecer os personagens que estão vivos



/*let teste3 = document.querySelector('#vivoBtn')

teste3.addEventListener('click', function(e){
    e.preventDefault()
    return alert('vivo')
})  */

/*1. pegar os dados;
2. printar todos os dados na tela ; 
3. se vc quiser pegar os dados so de especie: precisa filtrar e printar na tela;
4. só que esse filtro do 3, vc usa o filter, geralmente vc trabalha dps do 1.
entao
.começa a ver o metodo de filter
*/



