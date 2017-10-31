// variables para llenar a el canvas
var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");

function colorfondo() {
    //Lo vuelve a crear el fondo gris
    ctx.fillStyle = "#3A3A3A";
    // crea el fondo del tamaño ancho y alto del canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
colorfondo();

function probarDibujar(){
    colorfondo();
    var a = document.f1.a.value;
    var b = document.f1.b.value;
    var c = document.f1.c.value;
    var eq = a+"*x^2+"+b+"*x+"+c;
    var D = b**2-4*a*c;

    if(D<0){
        alert("soluciones imaginarias")
    }
    else{
        ctx.fillStyle ="#11B547";
        ctx.font = "15px Arial";
        if (D == 0){
            var s = -b/(2*a);
            ctx.fillText("Existe una sola solucion y es: " + s, 100, 30);
            ctx.fillText("Ver el grafico a continuacion...", 80, 80);
        }else{
            var s1 = (-b + Math.sqrt(D))/(2*a);
            var s2 = (-b - Math.sqrt(D))/(2*a);
            ctx.fillText("Las soluciones son: "+ s1 +" y " + s2, 100, 30);
            ctx.fillText("Ver el grafico a continuacion...", 80, 80);
        }
        ctx.strokeStyle = "#FFFFFF";
        ctx.stroke();
        dibujar(eq);
    };
}

function dibujar(eq) {
    try {
        functionPlot({
            target: '#plot',
            data: [{
                fn: eq,
                sampler: 'builtIn',
                graphType: 'polyline'
            }]
        });
    }
    catch (err) {
        console.log(err);
        alert(err);
    }
}

function limpiar(){
    alert("hola");
}