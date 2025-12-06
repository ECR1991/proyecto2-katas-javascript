/*
Ejercicio 2
Dato el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h2 class="fn-insert-here"></h2>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p class="fn-remove-me">Eliminame!</p>
    <p>No me elimines!</p>
    <div></div>
    <div></div>
    <div class="fn-insert-here"></div>
    <div class="fn-insert-here"></div>
  </body>
</html>
2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
	.fn-insert-here
*/

// 2.1 Div vacío
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2 Div con una p
const divConP = document.createElement("div");
const pDentro = document.createElement("p");
pDentro.textContent = "Parrafo dentro de un div";
divConP.appendChild(pDentro);
document.body.appendChild(divConP);

// 2.3 Div con 6 p usando un bucle
const divCon6P = document.createElement("div");
for (let i = 1; i <= 6; i++) {
  const p = document.createElement("p");
  p.textContent = "Parrafo " + i;
  divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// 2.4 p con texto "Soy dinámico!"
const pDinamico = document.createElement("p");
pDinamico.textContent = "Soy dinámico!";
document.body.appendChild(pDinamico);

// 2.5 Insertar texto en el h2 .fn-insert-here
const h2Insert = document.querySelector("h2.fn-insert-here");
h2Insert.textContent = "Wubba Lubba dub dub";

// 2.6 Crear lista ul > li con el array apps
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ulApps = document.createElement("ul");
for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  li.textContent = apps[i];
  ulApps.appendChild(li);
}
document.body.appendChild(ulApps);

// 2.7 Eliminar todos los nodos con clase .fn-remove-me
const toRemove = document.querySelectorAll(".fn-remove-me");
toRemove.forEach((el) => el.remove());

// 2.8 Insertar p "Voy en medio!" entre los dos primeros div
const allDivs = document.querySelectorAll("div");
const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio!";
allDivs[0].insertAdjacentElement("afterend", pMedio);

// 2.9 Insertar p "Voy dentro!" dentro de todos los div .fn-insert-here
const divsInsertHere = document.querySelectorAll("div.fn-insert-here");
divsInsertHere.forEach((div) => {
  const pInside = document.createElement("p");
  pInside.textContent = "Voy dentro!";
  div.appendChild(pInside);
});

