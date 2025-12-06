/* ============================
   EJERCICIO 4 – ARRAYS
============================ */

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

/*
1. Mostrar "Tendo"
*/
console.log(aldeanos[3]);

/*
2. Colocar "Cervasio" al final
*/
aldeanos.push("Cervasio");

/*
3. Cambiar el primer elemento por "Bambina"
*/
aldeanos[0] = "Bambina";

/*
4. Dar la vuelta al array
*/
aldeanos.reverse();

/*
5. Cambiar "Narciso" por "Canela"
*/
const indexNarciso = aldeanos.indexOf("Narciso");
if (indexNarciso !== -1) aldeanos.splice(indexNarciso, 1, "Canela");

/*
6. Imprimir el último elemento sin posición directa
*/
console.log(aldeanos[aldeanos.length - 1]);

console.log(aldeanos);
