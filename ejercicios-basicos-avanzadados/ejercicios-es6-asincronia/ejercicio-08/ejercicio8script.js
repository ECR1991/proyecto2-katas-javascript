/*
Ejercicio 8
Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:

Os aportamos el HTML sobre el que haremos el ejercicio:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js" defer></script>
</head>
<body>
    <select id="character-list"></select>
    <div>
        <img class="character-image">
    </div>
</body>
</html>
Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters
*/

// 1. Seleccionamos elementos del DOM
const select = document.getElementById("character-list");
const image = document.querySelector(".character-image");

// 2. Variable para guardar los personajes
let characters = [];

// 3. Petición a la API de Game of Thrones
fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((data) => {
    characters = data;
    fillSelect(characters);
  })
  .catch((error) => {
    console.error("Error al cargar los personajes:", error);
  });

// 4. Rellenar el select con los personajes
function fillSelect(charactersList) {
  // Opción inicial
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Selecciona un personaje";
  select.appendChild(defaultOption);

  // Opciones para cada personaje
  charactersList.forEach((character) => {
    const option = document.createElement("option");
    option.value = character.id;
    option.textContent = character.fullName;
    select.appendChild(option);
  });
}

// 5. Cambiar la imagen cuando el usuario selecciona un personaje
select.addEventListener("change", function () {
  const selectedId = Number(select.value);

  const selectedCharacter = characters.find(
    (character) => character.id === selectedId
  );

  if (selectedCharacter) {
    image.src = selectedCharacter.imageUrl;
    image.alt = selectedCharacter.fullName;
  } else {
    image.src = "";
    image.alt = "";
  }
});
