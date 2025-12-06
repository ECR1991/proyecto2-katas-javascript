/*
Ejercicio 3
Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="exercise-3.js" defer></script>
    <title>Document</title>
</head>
<body>
    <p class="fn-remove-me">Bye bye</p>
		<div data-function="printHere"></div>
</body>
</html>
1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.
*/

// 1.1 Lista ul > li con países
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ulCountries = document.createElement("ul");
for (let i = 0; i < countries.length; i++) {
  const li = document.createElement("li");
  li.textContent = countries[i];
  ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

// 1.2 Eliminar elemento con clase .fn-remove-me
const removeElement = document.querySelector(".fn-remove-me");
if (removeElement) {
  removeElement.remove();
}

// 1.3 Lista ul > li dentro del div data-function="printHere"
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
  const li = document.createElement("li");
  li.textContent = cars[i];
  ulCars.appendChild(li);
}

printHereDiv.appendChild(ulCars);

// 1.4 Serie de divs con h4 + img
const countriesCards = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const cardsContainer = document.createElement("div");
cardsContainer.id = "cards-container";
document.body.appendChild(cardsContainer);

for (let i = 0; i < countriesCards.length; i++) {
  const card = document.createElement("div");
  card.className = "country-card";

  const h4 = document.createElement("h4");
  h4.textContent = countriesCards[i].title;

  const img = document.createElement("img");
  img.src = countriesCards[i].imgUrl;
  img.alt = countriesCards[i].title;

  card.appendChild(h4);
  card.appendChild(img);
  cardsContainer.appendChild(card);
}

// 1.5 Botón que elimina el último div de la serie
const deleteLastButton = document.createElement("button");
deleteLastButton.textContent = "Eliminar último";
deleteLastButton.addEventListener("click", function () {
  const cards = document.querySelectorAll(".country-card");
  if (cards.length > 0) {
    const lastCard = cards[cards.length - 1];
    lastCard.remove();
  }
});
document.body.appendChild(deleteLastButton);

// 1.6 Botón en cada div que elimine ese mismo elemento
const allCards = document.querySelectorAll(".country-card");

allCards.forEach((card) => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar esta tarjeta";
  deleteButton.addEventListener("click", function () {
    card.remove();
  });
  card.appendChild(deleteButton);
});
