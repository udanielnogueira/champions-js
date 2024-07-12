var imgAshe = '<img class="imgCampeao" src="./assets/img/ashe.png">';
var imgJinx = '<img class="imgCampeao" src="./assets/img/jinx.png">';
var imgAhri = '<img class="imgCampeao" src="./assets/img/ahri.png">';
var imgLux = '<img class="imgCampeao" src="./assets/img/lux.png">';
var imgZed = '<img class="imgCampeaoLargo" src="./assets/img/zed.png">';

function exibir(imagem) {
    eFrame = document.getElementById("frame");
    
    if (imagem == 1)
    {
        eFrame.innerHTML = imgAshe;
    }
    else if (imagem == 2)
    {
        eFrame.innerHTML = imgJinx;
    }
    else if (imagem == 3)
    {
        eFrame.innerHTML = imgAhri;
    }
    else if (imagem == 4)
    {
        eFrame.innerHTML = imgLux;
    }
    else if (imagem == 5)
    {
        eFrame.innerHTML = imgZed;
    }
}

var audio = new Audio('./assets/ui-click.mp3');

function playUIClick() {
    audio.play();
}
