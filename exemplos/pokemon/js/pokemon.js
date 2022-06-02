document.addEventListener("DOMContentLoaded", function(event) {
    let pokemon = Math.floor(Math.random() * 151);
    const url = "https://pokeapi.co/api/v2/pokemon/"+pokemon;
    fetch(url)
    .then(response => response.json())
    .then(personagem => {
        document.querySelector(".nome").innerHTML  = personagem.name;
        document.querySelector('img').src= personagem.sprites['front_default'];
    });
    
});