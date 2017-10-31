// variables para llegar a el canvas
var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var imageObj = new Image();
imageObj.src = "img/formulaTri.png";
function colorfondo() {
    //Lo vuelve a crear el fondo gris
    ctx.fillStyle = "#3A3A3A";
    // crea el fondo del tamaño ancho y alto del canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

colorfondo();

function limpiar() {
    // limpia los campos de texto
    document.f1.reset();
    colorfondo();
}

function dibujar() {
    colorfondo();
    // variable para ancho del triangulo
    var n1 = document.f1.txtn1.value;
    var v1 = parseInt(25) + parseInt(n1)*10;
    // variable para alto del triangulo
    var n2 = document.f1.txtn2.value;
    var v2 = parseInt(25) + parseInt(n2)*10;

    if(isNaN(n1)|| isNaN(n2) || n1 > 45 || n2 > 40 || n1 < 0 || n2 < 0){
        alert("Ingrese valores válidos");
        return;
    }

    ctx.beginPath();
    // margen de 25
    ctx.moveTo(v1, 25);
    ctx.lineTo(25, v2);
    ctx.lineTo(25, 25);
    // dibujo y pinto el triangulo
    ctx.fillStyle ="#11B547";
    ctx.fill();
    // separacion
    ctx.moveTo(500,0);
    ctx.lineTo(500,450);
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

    // explicacion
    ctx.font = "15px Arial";
    ctx.fillText(n1, n1*5+20, 20);
    ctx.fillText(n2, 5, n2*5+20);
    ctx.fillText("Calculo de la Hipotenusa:",530,30);
    ctx.fillText("a: cateto1",575,60);
    ctx.fillText("b: cateto2",575,75);
    ctx.fillText("a",600,95);
    ctx.fillText("b",560,135);
    ctx.fillText("c",610,145);
    ctx.moveTo(575,100);
    ctx.lineTo(575,175);
    ctx.lineTo(640,100);
    ctx.lineTo(575,100);
    ctx.drawImage(imageObj,530,210);
    ctx.fillText("Solve:",540,280);
    ctx.fillText("C = " + Math.sqrt(n1**2+n2**2),540,295);
    ctx.stroke();
}