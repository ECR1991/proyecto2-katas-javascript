/*
Ejercicio 11
Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  // Completar
}
*/

function averageWord(list) {
  let total = 0;

  for (let i = 0; i < list.length; i++) {
    const elemento = list[i];

    if (typeof elemento === "number") {
      total = total + elemento;
    } else if (typeof elemento === "string") {
      total = total + elemento.length;
    }
  }

  // promedio mezclado: suma total dividido entre nº de elementos
  const promedio = total / list.length;
  return promedio;
}
