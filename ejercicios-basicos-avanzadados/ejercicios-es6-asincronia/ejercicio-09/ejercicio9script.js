/*
Ejercicio 9
Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

Documentación: https://pokeapi.co/

URL: https://pokeapi.co/api/v2/pokemon/1

Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js" defer></script>
</head>
<body>
    <img class="random-image">
</body>
</html>
*/

// 1. Seleccionamos la imagen
const img = document.querySelector(".random-image");

// 2. Generamos un número aleatorio entre 1 y 151
function getRandomPokemonId() {
  const min = 1;
  const max = 151;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomId = getRandomPokemonId();

// 3. Construimos la URL con ese id
const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

// 4. Pedimos los datos del pokemon
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Usamos una de las imágenes de sprites
    const imageUrl = data.sprites.front_default;

    img.src = imageUrl;
    img.alt = data.name;
  })
  .catch((error) => {
    console.error("Error al cargar el pokemon:", error);
  });
