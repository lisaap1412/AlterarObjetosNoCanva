var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = 50;
var y = 100;
var cor;

function gerar_cor_hexadecimal() {
    return '#' + parseInt((Math.random() * 0xFFF))
        .toString(16)
        .padStart(3, '0');
}

/*-----------------------------------------------------VARIAVEL---CIRCULO-----------------------------------------*/
var circuloA = canvas.getContext('2d');

/*---------------------------------------------------PROGRAMAÇÃO---CIRCULO-----------------------------------------*/

for (var i = 0; i < 50; i++) {

    contadorX = Math.random() * 500 + Math.random() * 50;
    contadorY = Math.random() * 150 + Math.random() * 300;


    circuloA.beginPath();
    circuloA.arc(contadorX, contadorY, Math.random()*20, 0, Math.PI * 2, false);
    circuloA.strokeStyle = gerar_cor_hexadecimal();
    circuloA.stroke();


}
//c.arc(x, y, Math.random()*20, 0, Math.PI * 2, false);
