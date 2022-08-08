
import data from "./data/rickandmorty/rickandmorty.js";
// import data from './data/rickandmorty/rickandmorty.js';

const pesquisar = document.getElementById("pesquisar");
pesquisar.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(data);
});

window.addEventListener("load", function (e) {
  data.results.map((a) => {
    const para = document.createElement("button");
    para.innerText = a.id + " temporada";
    document.body.appendChild(para);
    para.className = "accordion";

    const para1 = document.createElement("div");
    document.body.appendChild(para1);
    para1.className = "panel";

    const para2 = document.createElement("ul");
    a.episode.map((b) => {
      const para3 = document.createElement("li");
      para3.innerText = b;
      para2.appendChild(para3);
    });
    para1.appendChild(para2);

  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
