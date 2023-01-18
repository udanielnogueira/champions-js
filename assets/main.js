var imgAshe = '<img class="imgCampeao" src="./assets/ashe.png">';
var imgJinx = '<img class="imgCampeao" src="./assets/jinx.png">';
var imgAhri = '<img class="imgCampeao" src="./assets/ahri.png">';
var imgLux = '<img class="imgCampeao" src="./assets/lux.png">';

function exibirAshe(){
    eFrame = document.getElementById("frame");
    eFrame.innerHTML = imgAshe;
}

function exibirJinx(){
    eFrame = document.getElementById("frame");
    eFrame.innerHTML = imgJinx;
}

function exibirAhri(){
    eFrame = document.getElementById("frame");
    eFrame.innerHTML = imgAhri;
}

function exibirLux(){
    eFrame = document.getElementById("frame");
    eFrame.innerHTML = imgLux;
}

var audio = new Audio('./assets/ui-click.mp3');

function playUIClick(){
    audio.play();
}