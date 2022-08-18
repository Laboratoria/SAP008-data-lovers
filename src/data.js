const inputSearch = document.querySelector ("#search")
const navMenu = document.querySelector ("[data-type='nav-menu']")

inputSearch.addEventListener("input", function(){
  const str = this.value;
  if(str){
    filterData(str)
  }
  else {
    showAllItens()
  }
})