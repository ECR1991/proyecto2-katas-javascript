/*
Ejercicio 1
Dado el siguiente HTML:

<!DOCTYPE html>
<html lang="en">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="showme">Pillame!</button>
	<h1 id="pillado">Aqui estoy 8)</h1>
	<p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
	<h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
	<span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
</body>
</html>
1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con
	la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
data-function="testMe".
*/

// 1.1 Botón con la clase .showme
const buttonShowme = document.querySelector(".showme");
console.log(buttonShowme);

// 1.2 h1 con id #pillado
const h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

// 1.3 Todos los párrafos <p>
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

// 1.4 Todos los elementos con la clase .pokemon
const allPokemon = document.querySelectorAll(".pokemon");
console.log(allPokemon);

// 1.5 Todos los elementos con data-function="testMe"
const testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

// 1.6 El tercer personaje con data-function="testMe"
const thirdTestMe = testMeElements[2];
console.log(thirdTestMe);
