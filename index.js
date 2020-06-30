var currentData=localStorage.getItem('currentData');
var div = document.querySelector("#number");
var buttonSumar = document.querySelector("#sumar");
var buttonRestar = document.querySelector("#restar");
buttonSumar.onclick = sumar;
buttonRestar.onclick = restar;
function load(){
  if (currentData == null || currentData == 0){
    console.log(currentData)
    div.innerHTML = 0;
    currentData = 0;


  } else{
    currentData = parseInt(localStorage.getItem('currentData'));
    div.innerHTML = currentData.toString();
    console.log(currentData);
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
