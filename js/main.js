var bar = document.querySelector(".bar");
var navBar = document.querySelector(".nav-bar");
bar.onclick = function () {
  navBar.classList.toggle("active");
};
function changeIcon(x){
  x.classList.toggle("fa-xmark")

}
