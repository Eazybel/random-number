const btn = document.getElementById("btn");
const display = document.getElementById("display");

btn.onclick = function(){
display.textContent = Math.floor(Math.random()*100)+20;
}