/**
 * Autor: Camilo Andres Motta Ramirez
 * fecha: 10/052024
 * ficha:2901817
 * xxx
 */
// declaración de variables
let nomina = [];
let persona;
let iteracion;
let salario;
let subtrans;
let salud;
let pension;
let arl;
let extra;
let retencion1;
let retencion2;
let descuento;
let pagoTotal;
let totalPago=[]

// Matriz base
nomina = [
    { id: 1, numeroDocumento: 1077224527, nombres: 'Juan', apellidos: 'Serrato', edad: 19, valorDia: 45000, diasTrabajados: 30 },
    { id: 2, numeroDocumento: 1077225819, nombres: 'Camilo', apellidos: 'Motta', edad: 18, valorDia: 300000, diasTrabajados: 30 },
    { id: 3, numeroDocumento: 1075672656, nombres: 'Carlos', apellidos: 'Mendoza', edad: 22, valorDia: 60000, diasTrabajados: 25 },
    { id: 4, numeroDocumento: 28456816, nombres: 'Julian', apellidos: 'Gonzales', edad: 47, valorDia: 65000, diasTrabajados: 24 },
    { id: 5, numeroDocumento: 1077225638, nombres: 'Maria', apellidos: 'Parra', edad: 22, valorDia: 100000, diasTrabajados: 28 },
    { id: 6, numeroDocumento: 1077647392, nombres: 'Jose', apellidos: 'Linares', edad: 20, valorDia: 70000, diasTrabajados: 25 },
    { id: 7, numeroDocumento: 26562845, nombres: 'Jorge', apellidos: 'Rodriguez', edad: 62, valorDia: 64000, diasTrabajados: 30 }
]
// imprime el array 
console.table(nomina);


// donde se hace todo el procedimiento invocando funciones
for (iteracion = 0; iteracion < nomina.length; iteracion++) {

    let valorDia=nomina[iteracion].valorDia;
    let diasTrabajados=nomina[iteracion].diasTrabajados;

    salario = fsalario(valorDia,diasTrabajados);
    subtrans = fsubtrans(valorDia,diasTrabajados);
    salud = fsalud(valorDia,diasTrabajados);
    pension = fpension(valorDia,diasTrabajados);
    arl = farl(valorDia,diasTrabajados);
    extra = fextra(valorDia,diasTrabajados);
    retencion1 = fretencion1(valorDia,diasTrabajados);
    descuento = fdeducible(valorDia,diasTrabajados);
    pagoTotal = fpagoTotal(valorDia,diasTrabajados);

       // se le agrega más datos a la matriz utilizando push y otra array 
       totalPago.push({nombres: nomina[iteracion].nombres,apellidos: nomina[iteracion].apellidos, id: nomina[iteracion].id, numeroDocumento: nomina[iteracion].numeroDocumento ,salario,subtrans,salud,pension,arl,retencion1,descuento,extra,pagoTotal});
}
// imprime la matriz
console.table(totalPago)

