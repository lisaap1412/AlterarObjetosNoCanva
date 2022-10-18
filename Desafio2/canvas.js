var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var x = 50;
var y = 100;

/*-----------------------------------------------------VARIAVEL---QUADRADO-----------------------------------------*/
var quadradoA = canvas.getContext('2d');
var quadradoB = canvas.getContext('2d');
var quadradoC = canvas.getContext('2d');
var quadradoD = canvas.getContext('2d');
var quadradoE = canvas.getContext('2d');

/*-----------------------------------------------------VARIAVEL---LINHA-----------------------------------------*/
var linhaA = canvas.getContext('2d');
var linhaB = canvas.getContext('2d');
var linhaC = canvas.getContext('2d');
var linhaD = canvas.getContext('2d');
var linhaE = canvas.getContext('2d');

/*-----------------------------------------------------VARIAVEL---CIRCULO-----------------------------------------*/
var circuloA = canvas.getContext('2d');
var circuloB = canvas.getContext('2d');
var circuloC = canvas.getContext('2d');
var circuloD = canvas.getContext('2d');
var circuloE = canvas.getContext('2d');


/*---------------------------------------------------PROGRAMAÇÃO---QUADRADO-----------------------------------------*/
for (var i = 0; i < 50; i++) {
    contadorX = Math.random() * 500 + Math.random() * 50;
    contadorY = Math.random() * 150 + Math.random() * 300;

    quadradoA.fillStyle = 'rgba( 128,0,0, 5)'; //  Vermelho bonito
    quadradoA.fillRect(contadorX, contadorY, 50, 50); // largura, altura, lados

    contadorX = Math.random() * 500 + Math.random() * 50;
    contadorY = Math.random() * 150 + Math.random() * 300;

    quadradoB.fillStyle = 'rgba( 72,61,139, 5)'; // Roxo
    quadradoB.fillRect(contadorX, contadorY, 50, 50); // largura, altura, lados


}

/*-----------------------------------------------------PROGRAMAÇÃO---LINHA-----------------------------------------*/
for (var i = 0; i < 50; i++) {
    contadorX = Math.random() * 50 + Math.random() * 50;
    contadorY = Math.random() * 50 + Math.random() * 30;

    linhaA.beginPath();
    linhaA.moveTo(contadorX + Math.random() * 400, contadorY - Math.random() * 100);
    linhaA.lineTo(contadorX - Math.random() * 50, contadorY + Math.random() *600);
    linhaA.strokeStyle = 'rgba( 124,252,0, 5)'; // OTO verdinho
    linhaA.stroke();

    contadorX = Math.random() * 50 + Math.random() * 50;
    contadorY = Math.random() * 50 + Math.random() * 30;

    linhaB.beginPath();
    linhaB.moveTo(contadorX + Math.random() * 400, contadorY - Math.random() * 115);
    linhaB.lineTo(contadorX - Math.random() * 50, contadorY + Math.random() * 700);
    linhaB.strokeStyle = 'rgba(218,165,32, 5)'; //  Amarelo ovo claro
    linhaB.stroke();

}


/*---------------------------------------------------PROGRAMAÇÃO---CIRCULO-----------------------------------------*/

for (var i = 0; i < 50; i++) {

    contadorX = Math.random() * 500 + Math.random() * 50;
    contadorY = Math.random() * 150 + Math.random() * 300;

    circuloA.beginPath();
    circuloA.arc(contadorX, contadorY, 60, 0, Math.PI * 2, false);
    circuloA.strokeStyle = 'rgba( 0,128,0, 5)'; // Verdinho
    circuloA.stroke();

    circuloB.beginPath();
    circuloB.arc(contadorX, contadorY, 70, 0, Math.PI * 2, false);
    circuloB.strokeStyle = 'rgba( 0,191,255, 5)'; // Azul marinho
    circuloB.stroke();


}