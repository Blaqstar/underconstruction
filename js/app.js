var icons = document.querySelectorAll('a');
var x = window.matchMedia("(max-width: 560px)")

console.log(icons);

function mediaChangeIcon() {
  if(x.matches) {
    icons
  } 
}