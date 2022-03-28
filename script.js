var hamburguer = document.querySelector(".hamburguer-menu")

hamburguer.addEventListener("click", ()=>{
  document.querySelector(".nav-menu").classList.toggle("show-menu");
});