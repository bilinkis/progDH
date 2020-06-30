var currentData;
var div = document.querySelector("#number");
var buttonSumar = document.querySelector("#sumar");
var buttonRestar = document.querySelector("#restar");
buttonSumar.onclick = sumar;
buttonRestar.onclick = restar;
function load(){
  if(!localStorage.getItem('currentData')){
    localStorage.setItem('currentData',0);
    currentData = 0;
} else{
  if (currentData == null || currentData == 0){
    div.innerHTML = 0;
    currentData = 0;


  } else{
    currentData = parseInt(localStorage.getItem('currentData'));
    div.innerHTML = currentData;
    console.log(currentData);
  }
}
}
function sumar(){
  currentData += 1;
  div.innerHTML = currentData;
  localStorage.setItem('currentData', currentData);
  alert('voy a sumar una unidad');
}
function restar(){
  currentData -= 1;
  div.innerHTML = currentData;
  localStorage.setItem('currentData', currentData);
  alert('voy a restar una unidad');
}
