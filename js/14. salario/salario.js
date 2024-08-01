
/**
 *Salario
 * autor:JR
 * Fecha: 07 de abril del 2024
 * version:30
 */

const salario=function(pvaDias,pnDias){
    let vaDias=pvaDias;
    let nDias=pnDias;
    let resultado;
    resultado=vaDias*nDias;
    return resultado;
}

const salud=function(pvaDias,pnDias){
    let saludPersona;
    let salarioPersona= salario(pvaDias,pnDias);
    saludPersona=salarioPersona*0.12;
    return saludPersona;
}
 
const pension=function(pvaDias,pnDias){
    let pensionPersona;
    let salarioPersona= salario(pvaDias,pnDias);
    pensionPersona=salarioPersona*0.16;
    return pensionPersona;
}
const arl=function(pvaDias,pnDias){
    let arlPersona;
    let salarioPersona= salario(pvaDias,pnDias);
    arlPersona=salarioPersona*0.052;
    return arlPersona;
}

const subTrans=function(pvaDias,pnDias){
    let salarioPersona= salario(pvaDias,pnDias);
    let salarioMinimo= 1300000;
    let subsidioT;
    
    if(salarioPersona<=2*salarioMinimo){
        subsidioT=114000;
    }
    else{
        subsidioT=0;
    }
    return subsidioT;

}
const retencion=function(pvaDias,pnDias){
    let salarioPersona= salario(pvaDias,pnDias);
    let salarioMinimo= 1300000;
    let retencionPersona;
    
    if(salarioPersona>=4*salarioMinimo){
        retencionPersona=salarioMinimo*0.04;
    }
    else{
        retencionPersona=0;
    }
    return retencionPersona;

}

const deducibles=function(pvaDias,pnDias){
    let descuento;
    let dsalud= salud(pvaDias,pnDias);
    let dpension=pension(pvaDias,pnDias);
    let darl= arl(pvaDias,pnDias);
    let dretencion= retencion(pvaDias,pnDias);
    descuento= dsalud+dpension+darl+dretencion;
    return descuento;

}

const pagoTotal= function(pvaDias,pnDias){
    let salarioPersona=salario(pvaDias,pnDias);
    let deducible=deducibles(pvaDias,pnDias);
    let subsidioTr= subTrans(pvaDias,pnDias);
    let pago;
    pago= (salarioPersona+subsidioTr)-deducible;
    return pago;

}