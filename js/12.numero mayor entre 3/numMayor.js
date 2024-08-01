/**
 *area Numero Mayor entre tres
 * autor:JR
 * Fecha: 07 de abril del 2024
 * version:26
 */

 function numMayor(pnum1, pnum2,pnum3){
    let num1=pnum1;
    let num2= pnum2;
    let num3= pnum3;
    if (num1 > num2 && num1 > num3){
         return "el primer numero es mayor ";
    }
    else{
        if (num2 > num1 && num2 > num3){
            return "el segundo numero es mayor";
        }
        else{
    return "el tercer numero es mayor";
    }
    
    }
}

const numMayorExpresion=function(pnum1, pnum2,pnum3){
    let num1=pnum1;
    let num2= pnum2;
    let num3= pnum3;
    if (num1 > num2 && num1 > num3){
         return "el primer numero es mayor ";
    }
    else{
        if (num2 > num1 && num2 > num3){
            return "el segundo numero es mayor";
        }
        else{
    return "el tercer numero es mayor";
    }
    
    }
}