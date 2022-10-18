var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var quadrado1 = canvas.getContext('2d');
var quadrado2 = canvas.getContext('2d');

var x=200;
var y=200;
var dx=4;
var eixoX = 10;
var eixoY = 10;
var achar1;
var achar2;
/*------------------------------------------------------PROGRAMAÇÃO----EIXO_X-------------------------------------------*/
function Parar () {
    requestAnimationFrame(Parar);
    quadrado1.clearRect(0,0,innerWidth, innerHeight);
    quadrado2.clearRect(0,0,innerWidth, innerHeight);

}

BotaoX () // retorno da função

function BotaoX (){
    requestAnimationFrame(BotaoX);

    quadrado1.clearRect(0,0,innerWidth,innerHeight); //limpar toda a tela

    quadrado1.fillStyle = "#00BFFF" ;
    quadrado1.fillRect(x,250,200,200); // eixo x; eixo y; altura. largura

    if((x+200)>innerWidth){
        eixoX=-eixoX

    }
    else if (x<0) eixoX =-eixoX;
    x=x+eixoX;

}

BotaoY () // retorno da função 

function BotaoY (){
    requestAnimationFrame(BotaoY);

    quadrado2.clearRect(0,0,innerWidth,innerHeight); //limpar toda a tela
    quadrado2.fillStyle = "#FF4500" ;
    quadrado2.fillRect(250,y,200,200); // eixo x; eixo y; altura. largura

    if((y+200)>innerHeight){
        eixoY=-eixoY

    }
    else if (y<0) eixoY =-eixoY;
    y=y+eixoY;

}
