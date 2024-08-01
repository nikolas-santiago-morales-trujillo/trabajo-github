const sumar=function(pnum1,pnum2){
    let num1= pnum1;
    let num2= pnum2;
    let resultado;
    resultado = num1 + num2;
    return resultado;
}

const restar=function(pnum1,pnum2){
    let num1= pnum1;
    let num2= pnum2;
    let resultado;
    resultado = num1 - num2;
    return resultado;
}

const multiplicar=function(pnum1,pnum2){
    let num1= pnum1;
    let num2= pnum2;
    let resultado;
    resultado = num1 * num2;
    return resultado;
}

const dividir=function(pnum1,pnum2){
    let num1= pnum1;
    let num2= pnum2;
    let resultado;
    resultado = num1 / num2;
    return resultado;
}
 const operaciones= function(poperar, pnum1,pnum2){
    let operar= poperar;
    let operacion;

    if(operar=="sumar"){
        operacion= sumar(pnum1,pnum2);
    }
    else if (operar=="restar"){
        operacion= restar(pnum1,pnum2);
    }
    else if (operar=="dividir"){
        operacion= dividir(pnum1,pnum2);
    }
    else if (operar=="multiplicar"){
        operacion= multiplicar(pnum1,pnum2);
    }
    else {
        operacion= "error!!! no notifica operacion";
    }
    return operacion;
 }