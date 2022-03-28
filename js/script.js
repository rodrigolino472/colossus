var hamburguer = document.querySelector(".hamburguer-menu")

hamburguer.addEventListener("click", function(){
  document.querySelector(".nav-menu").classList.toggle("show-menu");
});