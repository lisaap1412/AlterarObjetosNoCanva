
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; //largura
canvas.height = window.innerHeight; //comprimento

/*-----------------------------------------------------VARIAVEL---QUADRADO-----------------------------------------*/
var quadradoA =  canvas.getContext('2d');
var quadradoB =  canvas.getContext('2d');
var quadradoC =  canvas.getContext('2d');
var quadradoD =  canvas.getContext('2d');
var quadradoE =  canvas.getContext('2d');
var quadradoF =  canvas.getContext('2d');
var quadradoG =  canvas.getContext('2d');
var quadradoH =  canvas.getContext('2d');
var quadradoI =  canvas.getContext('2d');
var quadradoJ =  canvas.getContext('2d');

/*-----------------------------------------------------VARIAVEL---LINHA-----------------------------------------*/
var linhaA =  canvas.getContext('2d');
var linhaB =  canvas.getContext('2d');
var linhaC =  canvas.getContext('2d');
var linhaD =  canvas.getContext('2d');
var linhaE =  canvas.getContext('2d');
var linhaF =  canvas.getContext('2d');
var linhaG =  canvas.getContext('2d');
var linhaH =  canvas.getContext('2d');
var linhaI =  canvas.getContext('2d');
var linhaJ =  canvas.getContext('2d');
/*-----------------------------------------------------VARIAVEL---CIRCULO-----------------------------------------*/
var circuloA =  canvas.getContext('2d');
var circuloB =  canvas.getContext('2d');
var circuloC =  canvas.getContext('2d');
var circuloD =  canvas.getContext('2d');
var circuloE =  canvas.getContext('2d');
var circuloF =  canvas.getContext('2d');
var circuloG =  canvas.getContext('2d');
var circuloH =  canvas.getContext('2d');
var circuloI =  canvas.getContext('2d');
var circuloJ =  canvas.getContext('2d');

var circuloA1 =  canvas.getContext('2d');
var circuloB1 =  canvas.getContext('2d');
var circuloC1 =  canvas.getContext('2d');
var circuloD1 =  canvas.getContext('2d');
var circuloE1 =  canvas.getContext('2d');
var circuloF1 =  canvas.getContext('2d');
var circuloG1 =  canvas.getContext('2d');
var circuloH1 =  canvas.getContext('2d');
var circuloI1 =  canvas.getContext('2d');
var circuloJ1 =  canvas.getContext('2d');

var circuloA2 =  canvas.getContext('2d');
var circuloB2 =  canvas.getContext('2d');
var circuloC2 =  canvas.getContext('2d');
var circuloD2 =  canvas.getContext('2d');
var circuloE2 =  canvas.getContext('2d');
var circuloF2 =  canvas.getContext('2d');
var circuloG2 =  canvas.getContext('2d');
var circuloH2 =  canvas.getContext('2d');
var circuloI2 =  canvas.getContext('2d');
var circuloJ2 =  canvas.getContext('2d');
/*---------------------------------------------------PROGRAMAÇÃO---QUADRADO-----------------------------------------*/
quadradoA.fillStyle = 'rgba( 0,255,0,0,5)'; // Cor Preto
quadradoA.fillRect(10,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoB.fillStyle = 'rgba( 72,61,139, 5)'; // Cor Roxo
quadradoB.fillRect(115,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoC.fillStyle = 'rgba( 0,0,205, 5)'; // Cor Azul
quadradoC.fillRect(230,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoD.fillStyle = 'rgba( 0,191,255, 5)'; // Cor Azul Marinho
quadradoD.fillRect(350,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoE.fillStyle = 'rgba( 0,128,0, 5)'; // Cor verde claro
quadradoE.fillRect(500,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoF.fillStyle = 'rgba( 124,252,0, 5)'; // Cor outro verde
quadradoF.fillRect(650,100,50,50); //lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoG.fillStyle = 'rgba(218,165,32, 5)'; // Cor Amarelo ovo claro
quadradoG.fillRect(800,100,50,50); //lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoH.fillStyle = 'rgba( 210,105,30, 5)'; // Cor Laranja
quadradoH.fillRect(950,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoI.fillStyle = 'rgba( 128,0,0, 5)'; // Cor Vermelho 
quadradoI.fillRect(1100,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

quadradoJ.fillStyle = 'rgba(199,21,133, 5)'; // Cor Rosa Y2K
quadradoJ.fillRect(1250,100,50,50); // lugar em x; lugar em y; tamanho em x; tamanho em y.

/*-----------------------------------------------------PROGRAMAÇÃO---LINHA-----------------------------------------*/
linhaA.beginPath();
linhaA.moveTo(10,100); // eixo x começo ; eixo y começo.
linhaA.lineTo(200,400); // eixo x final ; eixo y final.
linhaA.strokeStyle = "black"; // cor Preto
linhaA.stroke();

linhaB.beginPath();
linhaB.moveTo(115,100);// eixo x começo ; eixo y começo.
linhaB.lineTo(300,400);// eixo x final ; eixo y final.
linhaB.strokeStyle = 'rgba( 72,61,139, 5)'; // Roxo
linhaB.stroke();

linhaC.beginPath();
linhaC.moveTo(230,100);// eixo x começo ; eixo y começo.
linhaC.lineTo(400,400);// eixo x final ; eixo y final.
linhaC.strokeStyle = 'rgba( 0,0,205, 5)'; // Azul
linhaC.stroke();

linhaD.beginPath();
linhaD.moveTo(350,100);// eixo x começo ; eixo y começo.
linhaD.lineTo(500,400);// eixo x final ; eixo y final.
linhaD.strokeStyle = 'rgba( 0,191,255, 5)'; // Azul marinho
linhaD.stroke();

linhaE.beginPath();
linhaE.moveTo(500,100);// eixo x começo ; eixo y começo.
linhaE.lineTo(600,400);// eixo x final ; eixo y final.
linhaE.strokeStyle = 'rgba( 0,128,0, 5)'; // Verdinho
linhaE.stroke();

linhaF.beginPath();
linhaF.moveTo(650,100);// eixo x começo ; eixo y começo.
linhaF.lineTo(700,400);// eixo x final ; eixo y final.
linhaF.strokeStyle = 'rgba( 124,252,0, 5)'; // OTO Verdinho
linhaF.stroke();

linhaG.beginPath();
linhaG.moveTo(800,100);// eixo x começo ; eixo y começo.
linhaG.lineTo(800,400);// eixo x final ; eixo y final.
linhaG.strokeStyle = 'rgba(218,165,32, 5)'; // Amarelo ovo claro
linhaG.stroke();

linhaH.beginPath();
linhaH.moveTo(980,100);// eixo x começo ; eixo y começo.
linhaH.lineTo(900,400);// eixo x final ; eixo y final.
linhaH.strokeStyle = 'rgba( 210,105,30, 5)'; // Laranja
linhaH.stroke();

linhaI.beginPath();
linhaI.moveTo(1150,100);// eixo x começo ; eixo y começo.
linhaI.lineTo(1000,400);// eixo x final ; eixo y final.
linhaI.strokeStyle = 'rgba( 128,0,0, 5)'; //  Vermelho bonito
linhaI.stroke();

linhaJ.beginPath();
linhaJ.moveTo(1300,100);// eixo x começo ; eixo y começo.
linhaJ.lineTo(1100,400);// eixo x final ; eixo y final.
linhaJ.strokeStyle = 'rgba( 199,21,133, 5)'; //  Rosa Y2K
linhaJ.stroke();

/*---------------------------------------------------PROGRAMAÇÃO---CIRCULO-----------------------------------------*/
circuloA.beginPath();
circuloA.arc(200,400,60,0, Math.PI*2, false);
circuloA.strokeStyle = "black";//Preto
circuloA.stroke();

circuloB.beginPath();
circuloB.arc(300,400,60,0, Math.PI*2, false);
circuloB.strokeStyle = 'rgba( 72,61,139, 5)'; // Roxo
circuloB.stroke();

circuloC.beginPath();
circuloC.arc(400,400,60,0, Math.PI*2, false);
circuloC.strokeStyle = 'rgba( 0,0,205, 5)'; // Azul
circuloC.stroke();

circuloD.beginPath();
circuloD.arc(500,400,60,0, Math.PI*2, false);
circuloD.strokeStyle = 'rgba( 0,191,255, 5)'; // Azul marinho
circuloD.stroke();

circuloE.beginPath();
circuloE.arc(600,400,60,0, Math.PI*2, false);
circuloE.strokeStyle = 'rgba( 0,128,0, 5)'; // Verdinho
circuloE.stroke();

circuloF.beginPath();
circuloF.arc(700,400,60,0, Math.PI*2, false);
circuloF.strokeStyle = 'rgba( 124,252,0, 5)'; // OTO Verdinho
circuloF.stroke();

circuloG.beginPath();
circuloG.arc(800,400,60,0, Math.PI*2, false);
circuloG.strokeStyle = 'rgba(218,165,32, 5)'; //  Amarelo ovo claro
circuloG.stroke();

circuloH.beginPath();
circuloH.arc(900,400,60,0, Math.PI*2, false);
circuloH.strokeStyle = 'rgba( 210,105,30, 5)'; //  Laranja
circuloH.stroke();

circuloI.beginPath();
circuloI.arc(1000,400,60,0, Math.PI*2, false);
circuloI.strokeStyle = 'rgba( 128,0,0, 5)'; //  Vermelho bonito
circuloI.stroke();

circuloJ.beginPath();
circuloJ.arc(1100,400,60,0, Math.PI*2, false);
circuloJ.strokeStyle = 'rgba( 199,21,133, 5)'; // RosaY2K
circuloJ.stroke();

/*************/
circuloA1.beginPath();
circuloA1.arc(100,500,60,0, Math.PI*2, false);
circuloA1.strokeStyle = "black";//Preto
circuloA1.stroke();

circuloB1.beginPath();
circuloB1.arc(200,500,60,0, Math.PI*2, false);
circuloB1.strokeStyle = 'rgba( 72,61,139, 5)'; // Roxo
circuloB1.stroke();

circuloC1.beginPath();
circuloC1.arc(300,500,60,0, Math.PI*2, false);
circuloC1.strokeStyle = 'rgba( 0,0,205, 5)'; // Azul
circuloC1.stroke();

circuloD1.beginPath();
circuloD1.arc(400,500,60,0, Math.PI*2, false);
circuloD1.strokeStyle = 'rgba( 0,191,255, 5)'; // Azul marinho
circuloD1.stroke();

circuloE1.beginPath();
circuloE1.arc(500,500,60,0, Math.PI*2, false);
circuloE1.strokeStyle = 'rgba( 0,128,0, 5)'; // Verdinho
circuloE1.stroke();

circuloF1.beginPath();
circuloF1.arc(600,500,60,0, Math.PI*2, false);
circuloF1.strokeStyle = 'rgba( 124,252,0, 5)'; // OTO Verdinho
circuloF1.stroke();

circuloG1.beginPath();
circuloG1.arc(700,500,60,0, Math.PI*2, false);
circuloG1.strokeStyle = 'rgba(218,165,32, 5)'; //  Amarelo ovo claro
circuloG1.stroke();

circuloH1.beginPath();
circuloH1.arc(800,500,60,0, Math.PI*2, false);
circuloH1.strokeStyle = 'rgba( 210,105,30, 5)'; //  Laranja
circuloH1.stroke();

circuloI1.beginPath();
circuloI1.arc(900,500,60,0, Math.PI*2, false);
circuloI1.strokeStyle = 'rgba( 128,0,0, 5)'; //  Vermelho bonito
circuloI.stroke();

circuloJ1.beginPath();
circuloJ1.arc(1000,500,60,0, Math.PI*2, false);
circuloJ1.strokeStyle = 'rgba( 199,21,133, 5)'; // RosaY2K
circuloJ1.stroke();

/******* */

circuloA.beginPath();
circuloA.arc(200,600,60,0, Math.PI*2, false);
circuloA.strokeStyle = "black";//Preto
circuloA.stroke();

circuloB.beginPath();
circuloB.arc(300,600,60,0, Math.PI*2, false);
circuloB.strokeStyle = 'rgba( 72,61,139, 5)'; // Roxo
circuloB.stroke();

circuloC.beginPath();
circuloC.arc(400,600,60,0, Math.PI*2, false);
circuloC.strokeStyle = 'rgba( 0,0,205, 5)'; // Azul
circuloC.stroke();

circuloD.beginPath();
circuloD.arc(500,600,60,0, Math.PI*2, false);
circuloD.strokeStyle = 'rgba( 0,191,255, 5)'; // Azul marinho
circuloD.stroke();

circuloE.beginPath();
circuloE.arc(600,600,60,0, Math.PI*2, false);
circuloE.strokeStyle = 'rgba( 0,128,0, 5)'; // Verdinho
circuloE.stroke();

circuloF.beginPath();
circuloF.arc(700,600,60,0, Math.PI*2, false);
circuloF.strokeStyle = 'rgba( 124,252,0, 5)'; // OTO Verdinho
circuloF.stroke();

circuloG.beginPath();
circuloG.arc(800,600,60,0, Math.PI*2, false);
circuloG.strokeStyle = 'rgba(218,165,32, 5)'; //  Amarelo ovo claro
circuloG.stroke();

circuloH.beginPath();
circuloH.arc(900,600,60,0, Math.PI*2, false);
circuloH.strokeStyle = 'rgba( 210,105,30, 5)'; //  Laranja
circuloH.stroke();

circuloI.beginPath();
circuloI.arc(1000,600,60,0, Math.PI*2, false);
circuloI.strokeStyle = 'rgba( 128,0,0, 5)'; //  Vermelho bonito
circuloI.stroke();

circuloJ.beginPath();
circuloJ.arc(1100,600,60,0, Math.PI*2, false);
circuloJ.strokeStyle = 'rgba( 199,21,133, 5)'; // RosaY2K
circuloJ.stroke();