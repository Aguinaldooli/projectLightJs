const pressOn = document.getElementById("pressOn");
const pressOff = document.getElementById("pressOff");
const lamp = document.getElementById("lamp");

//fazer a troca da lâmpada
function lampOn(){
    if ( !lampBlock ()){
    lamp.src = "./img/ligada.jpg"    
    }  
}
function lampOff(){
    if ( !lampBlock ()){
    lamp.src = "./img/desligada.jpg"    
    } 
}
function lampBroken(){
    lamp.src = "./img/quebrada.jpg"
}

//Função para vereficar se a lâmpada não está quebrada

function lampBlock (){
    return lamp.src.indexOf ("quebrada") > -1
}

// ficar obeservando quando existir o click, portanto ativar a lâmpada
pressOn.addEventListener("click", lampOn);
pressOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampBroken);