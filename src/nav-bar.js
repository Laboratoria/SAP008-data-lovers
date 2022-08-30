function clickMenu(){
    if(paginas.style.display == 'block'){
       paginas.style.display = 'none'
    } else {
       paginas.style.display = 'block'
    }
  }
  
  function responsivo() {
    if(window.innerWidth >= 768) {
      paginas.style.display = 'block'
    } else {
      paginas.style.display = 'none'
    }
  }
  
