
const botao = document.querySelector(".btn-plataforma");


const elementoPlataformas = document.querySelector(".btn-plataforma .Plataformas");

botao.addEventListener("click", () => {
   elementoPlataformas.classList.toggle("ativo");
   console.log();
});