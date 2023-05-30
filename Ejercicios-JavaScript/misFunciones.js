/**
 * convierte unidades entre metros, pulgadas, pies y yardas
 * @method unidades
 * @param {string} id - Id del elemento input del HTML
 * @param (number) valor - contiene el valor del input que ingreso el usuario
 * @return Valor que retorna
 */


ConvertirUninades = (id, valor) => {
    let met, pul, pie, yar;
    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }
    if (isNaN(valor)) {
        alert("el valor ingresado es incorrecto")
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        pul = valor;
        met = valor * 0.0254;
        pie = valor * 0.08333;
        yar = valor * 0.027778;
    } else if (id === "pie") {
        pie = valor;
        met = valor * 0.3048;
        pul = valor * 12;
        yar = valor * 0.333333;
    } else if (id === "yarda") {
        yar = valor;
        met = valor * 0.9144;
        pul = valor * 36;
        pie = valor * 3;
    }
    document.unidades.unid_metro.value = Math.round(met*100)/100;
    document.unidades.unid_pulgada.value = Math.round(pul*100)/100;
    document.unidades.unid_pie.value = Number(pie).toFixed(2);
    document.unidades.unid_yarda.value = Number(yar).toFixed(2);
}

/**
 * convierte unidades entre grados y radianes
 * @method convertirGR
 * @param {string} id - Id del elemento input del HTML
 */

// MEJORAR


convertirGR = (id) => {
    let gr, rad;
    if (id === "grados") {
        gr = document.getElementById("grados").value;
        if (isNaN(gr)) {
            alert("el valor ingresado es incorrecto");
            gr = "";
        }
        document.getElementById("radianes").value = (gr * Math.PI) / 180;
    } else if (id === "radianes") {
        rad = document.getElementById("radianes").value;
        if (isNaN(rad)) {
            alert("el valor ingresado es incorrecto");
            rad = "";
        }
        document.getElementById("grados").value = (rad * 180) / Math.PI;
    }
}

/**
 * muestra u oculta un div
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input radio en HTML
 */

let mostrar_ocultar = (id)=>{
    if (id==="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display= 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display= 'none';
    }
}

/**
 * suma dos inputs introducidos por el usuario
 * @method sumar
 */
let sumar = () => {
    let re, s1, s2;
    s1= Number(document.operacionesMat.sum_num1.value);
    s2=Number(document.operacionesMat.sum_num2.value);
    re= s1 + s2;
    document.getElementById("totalS").innerHTML;
    document.operacionesMat.sum_total.value= re;
}

let restar = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.res_num1.value);
    s2 = Number(document.operacionesMat.res_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 - s2;
    document.getElementById("totalR").innerHTML;
    document.operacionesMat.res_total.value = re;
}

let multiplicar = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.mul_num1.value);
    s2 = Number(document.operacionesMat.mul_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 * s2;
    document.getElementById("totalM").innerHTML;
    document.operacionesMat.mul_total.value = re;
}

let dividir = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.div_num1.value);
    s2 = Number(document.operacionesMat.div_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 / s2;
    document.getElementById("totalD").innerHTML;
    document.operacionesMat.div_total.value = re;
}

let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value= `${distancia} ${unidad}`;
}

let guardarLs = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
    window.open("web2.html");
}

let cargarLs = () => {
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    console.log(distancia);
    console.log(unidad);
    document.getElementById("dist").value= `${distancia} ${unidad}`;
}

let dibujarcirculocuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas. getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    ctx.fillStyle= "#333";

    //dibujar rectangulo
    let margen = 5;
    ctx.fillRect(margen, yMax-120-margen, 130, 120);

    //dibujar circulo
    ctx.arc(xMax/2, yMax/2, 100, 0, 2*Math.PI);
    ctx.stroke(); //dibujo bordes
    ctx.fill(); //relleno
}

let limpiarCanvas = () => {
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}
var bandera;
let dibujar = () => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posx = event.clientX
    let posy = event.clientY
    console.log(posx, posy);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if (bandera) {
        ctx.fillRect(posx, posy, 5, 5);
        ctx.fill;
    }
}

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchomax = canvas.width;
    const alturamax = canvas.height;
    const paso = 20;
    let ejex = -24;
    let ejey = 14;

    //lineas verticales
    for( let i=paso; i<anchomax; i+=paso ) {
        ctx.beginPath();
        ctx.moveTo(i, 0); //dibuja linea desde
        ctx.lineTo(i, alturamax); //dibuja linea hasta
        ctx.strokeStyle = "#000000"; //pone color
        ctx.stroke(); //dibuja
        ctx.font= "10px Arial";
        ctx.fillStyle = "#00000";
        ctx.fillText(ejex, i, alturamax/2 );
        ctx.closePath();
        ejex++;
    }

    //lineas horizontales
    for( let i=paso; i<anchomax; i+=paso ) {
        ctx.beginPath();
        ctx.moveTo(0, i); //dibuja linea desde
        ctx.lineTo(anchomax, i); //dibuja linea hasta
        ctx.strokeStyle = "#000000"; //pone color
        ctx.stroke(); //dibuja
        ctx.font= "10px Arial";
        ctx.fillStyle = "#00000";
        ctx.fillText(ejey, anchomax/2, i );
        ctx.closePath();
        ejey--;
    }

    //eje x
    ctx.beginPath();
    ctx.moveTo(0, alturamax/2); //dibuja linea desde
    ctx.lineTo(anchomax, alturamax/2); //dibuja linea hasta
    ctx.strokeStyle = "#ff0000"; //pone color
    ctx.stroke(); //dibuja
    ctx.closePath();

    //eje x
    ctx.beginPath();
    ctx.moveTo(anchomax/2, 0); //linea desde
    ctx.lineTo(anchomax/2, alturamax); //linea hasta
    ctx.strokeStyle = "#ff0000"; //pone color
    ctx.stroke(); //dibuja
    ctx.closePath();
}

let dibujarimagen = (posx,posy) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const anchomax = canvas.width;
    const alturamax = canvas.height;

    canvas.width = canvas.width; //borra el auto ya dibujado

    console.log(posx, posy);
    let img = new Image();
    img.src = "images/auto.png";

    if (posx < 0 || posy < 0 || posx>=anchomax || posy>=alturamax) {
        opendialog();
    } else {
        img.onload = function () {
            ctx.drawImage(img, posx, posy);
        }
    }
}

let cerrardialog = () => {
    const dialog = document.getElementById("mydialog");
    dialog.close();
}

let opendialog = () => {
    const dialog = document.getElementById("mydialog");
    dialog.showModal();
}

var x = 0;
var dx = 2;
let animarauto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        canvas.width=canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x = x+dx;
    console.log("la coordenada x es: "+ x);

    if (x>canvas.width){
        x=0;
    }
}