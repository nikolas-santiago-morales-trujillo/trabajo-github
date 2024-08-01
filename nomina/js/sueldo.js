// nos dice eel salario sin sus descuentos
function fsalario(pvdias, pndias) {
    let vdias = pvdias;
    let ndias = pndias;
    let resultado = vdias * ndias;
    return resultado;
}

// descuento en salud 
function fsalud(pvdias, pndias) {
    let saludPer;
    let salarioPer = fsalario(pvdias, pndias);
    saludPer = salarioPer * 0.12;
    return saludPer;
}

// descuento en arl
function farl(pvdias, pndias) {
    let arlPer;0
    let salarioPer = fsalario(pvdias, pndias);
    arlPer = salarioPer * 0.052;
    return arlPer;
}

// dencuento en pension 
function fpension(pvdias, pndias) {
    let pensionPer;
    let salarioPer = fsalario(pvdias, pndias);
    pensionPer = salarioPer * 0.16;
    return pensionPer;
}
// resta todos los descuentos del salario
const fretencion1 = function(pvdias, pndias){
    let salarioPer = fsalario(pvdias, pndias);
    let salarioMinimo = 1300000;
    let reten;
    if (salarioPer >= 6 * salarioMinimo){
        reten = salarioPer*0.04;
    }
    else if (salarioPer >= 4 * salarioMinimo){
        reten = salarioPer*0.02;
    }
    else{
        reten=0;
    }
    return reten
}

function fsubtrans(pvdias, pndias) {
    let salarioPer = fsalario(pvdias, pndias);
    let subsidioT;
    let salarioMinimo = 1300000;
    if (salarioPer <= 2 * salarioMinimo) {
        subsidioT = 114000;
    }
    else {
        subsidioT = 0;
    }
    return subsidioT;
}


function fdeducible(pvdias, pndias) {
    let descuento;
    let dsalud = fsalud(pvdias, pndias);
    let dpension = fpension(pvdias, pndias);
    let darl = farl(pvdias, pndias);
    let dretencion1 = fretencion1(pvdias, pndias);
    descuento = parseInt(dsalud) + parseInt(dpension) + parseInt(darl) + parseInt(dretencion1);
    return descuento;
}


function fpagoTotal(pvdias, pndias) {
    let salarioPer = fsalario(pvdias, pndias);
    let subsidioT = fsubtrans(pvdias, pndias);
    let descuento = fdeducible(pvdias, pndias);
    let extra = fextra(pvdias, pndias);
    let pago;
    pago = (salarioPer + subsidioT + extra) - descuento;
    return pago;
}


const fextra = function(pvdias, pndias){
    let salarioPer = fsalario(pvdias, pndias);
    let edad = nomina[iteracion].edad;
    let extra;
    if (edad >= 40){
        extra = salarioPer*0.06;
    }
    else if (edad >= 60){
        extra = salarioPer*0.08;
    }
    else{
        extra=0;
    }
    return extra
}