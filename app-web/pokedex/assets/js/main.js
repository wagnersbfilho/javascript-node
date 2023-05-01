const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// retorna lista de tipos
function convertPokemonTypesLi (pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

// retorna lista de tipos usando model
function convertPokemonTypesModelLi (pokemonTypes, mainType) {
    return pokemonTypes.map((type) => `<li class="type ${mainType}-light">${type}</li>`);
}

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon ${pokemon.mainType}">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${convertPokemonTypesModelLi(pokemon.types, pokemon.mainType).join('')}
                        <!-- 
                        <p>{convertPokemonTypesLi(pokemon.types).join('')}</p>
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                        -->
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    <!-- 
                    <img src="{pokemon.sprites.other.dream_world.front_default}" alt="{pokemon.name}">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                        alt="${pokemon.name}">
                    -->
                </div>
            </li>
    `;
}

/** Utilizando MAP - diminuir verbosidade
 * */
const pokemonListOl = document.getElementById("id-pokemon-list");
pokeApi.getPokemons().then((pokemonList = []) => {

    /* ou:
    const listaMapa = pokemonList.map((pokemon) => convertPokemonToLi(pokemon));
    pokemonListOl.innerHTML += listaMapa.join('');
    */

    /* ou:
    const listaMapa1 = pokemonList.map(convertPokemonToLi);
    pokemonListOl.innerHTML += listaMapa1.join('');
    */

    /* ou: */
    pokemonListOl.innerHTML += pokemonList.map(convertPokemonToLi).join('');

})

/** Lógica com FOR (substituida pelo MAP acima)*/
pokeApi.getPokemons().then((pokemonList = []) => {
    //debugger;
    const listItems = [];
    for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        listItems.push(convertPokemonToLi(pokemon));
    }
//    pokemonListOl.innerHTML += listItems;
})


