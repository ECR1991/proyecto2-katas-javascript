/*
Ejercicio 5
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Crear un título
const title = document.createElement("h1");
title.textContent = "Lista de albums";
document.body.appendChild(title);

// Crear un contenedor principal
const main = document.createElement("main");
document.body.appendChild(main);

// Crear la lista ul
const ul = document.createElement("ul");

for (let i = 0; i < albums.length; i++) {
  const li = document.createElement("li");
  li.textContent = albums[i];
  ul.appendChild(li);
}

main.appendChild(ul);
