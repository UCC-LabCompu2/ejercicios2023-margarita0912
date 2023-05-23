/**
 * convierte unidades entre metros, pulgadas, pies y yardas
 * @method unidades
 * @param {string} id - Id del elemento input del HTML
 * @param (number) valor - contiene el valor del input que ingreso el usuario
 * @return Valor que retorna
 */


ConvertirUninades = (id, valor) => {
    let met, pul, pie, yar;
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
    document.unidades.unid_metro.value = met;
    document.unidades.unid_pulgada.value = pul;
    document.unidades.unid_pie.value = pie;
    document.unidades.unid_yarda.value = yar;
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

let sumar = () => {
    let res, s1, s2;
    s1= Number(document.operacionesMat.sum_num1.value);
    s2=Number(document.operacionesMat.sum_num2.value)
    res= s1 + s2;
    document.operacionesMat.sum_total.value= res;
}