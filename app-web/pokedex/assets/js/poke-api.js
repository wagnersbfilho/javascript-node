const pokeApi = {};

/** Encapsualmento de execução e retorno de resulta da API como uma lista */
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        //.then((pokemonList) => pokemonList.map(pokeApi.getPokemonDetail))
        .then((pokemonList) => pokemonList.map(pokeApi.getPokemonDetailModel))
        .then((detailRequest) => Promise.all(detailRequest))
        .then((pokemonDetails) => pokemonDetails)
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída!'));
}

/** Executa chanada REST pelo atributo url, que obtem
 * os detalhes de cada pokemon, e retorna em formato json */
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json());
}

/** Retorna conversão em objeto Model Pokemon */
pokeApi.getPokemonDetailModel = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToModel);
}

function convertPokeApiDetailToModel (pokemonDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokemonDetail.name;
    pokemon.order = pokemonDetail.order;

    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [mainType] = types;

    pokemon.types = types;
    pokemon.mainType = mainType;

    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

/** Exemplo: Manipula multiplas requisições em paralero*/
Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results) => {
    //console.log(results);
})