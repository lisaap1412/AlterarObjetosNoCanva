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

/*-----------------------------------------------------VARIAVEL---QUADRADO-----------------------------------------*/
var quadradoA = canvas.getContext('2d');

/*-----------------------------------------------------VARIAVEL---LINHA-----------------------------------------*/
var linhaA = canvas.getContext('2d');

/*-----------------------------------------------------VARIAVEL---CIRCULO-----------------------------------------*/
var circuloA = canvas.getContext('2d');

/*---------------------------------------------------PROGRAMAÇÃO---QUADRADO-----------------------------------------*/
for (var i = 0; i < 50; i++) {
    contadorX = Math.random() * 500 + Math.random() * 50;
    contadorY = Math.random() * 150 + Math.random() * 300;
    cor = Math.floor(Math.random()*16777215).toString(16); 

    quadradoA.fillStyle = "#" +  cor ;
    quadradoA.fillRect(contadorX, contadorY, 50, 50); // largura, altura, lados
}

/*-----------------------------------------------------PROGRAMAÇÃO---LINHA-----------------------------------------*/
for (var i = 0; i < 50; i++) {

    contadorX = Math.random() * 50 + Math.random() * 50;
    contadorY = Math.random() * 50 + Math.random() * 30;

    linhaA.beginPath(); 
    linhaA.moveTo(contadorX + Math.random() * 50, x + contadorX); 
    linhaA.lineTo(contadorX - Math.random() * 50, y + contadorY); 
    linhaA.strokeStyle = gerar_cor_hexadecimal(); 
    linhaA.stroke();

}
/*---------------------------------------------------PROGRAMAÇÃO---CIRCULO-----------------------------------------*/

for (var i = 0; i < 50; i++) {

    contadorX = Math.random() * 500 + Math.random() * 50;
    contadorY = Math.random() * 150 + Math.random() * 300;


    circuloA.beginPath();
    circuloA.arc(contadorX, contadorY * Math.random() * 5, 20, 0, Math.PI * 2, false);
    circuloA.strokeStyle = gerar_cor_hexadecimal();
    circuloA.stroke();


}