/*
Ejercicio 2
2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
*/

// 2.1 Copia de array con spread
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log(pointsListCopy);

// 2.2 Copia de objeto con spread
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };

console.log(toyCopy);

// 2.3 Juntar dos arrays con spread
const pointsLis2 = [54, 87, 99, 65, 32];
const allPoints = [...pointsList, ...pointsLis2];

console.log(allPoints);

// 2.4 Fusionar dos objetos con spread
const toyUpdate = {
  lights: "rgb",
  power: ["Volar like a dragon", "MoonWalk"],
};

const toyFusion = { ...toy, ...toyUpdate };

console.log(toyFusion);

// 2.5 Copia de colors eliminando la posición 2
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

// Posición 2 es "amarillo"
const colorsWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colors);
console.log(colorsWithoutIndex2);
