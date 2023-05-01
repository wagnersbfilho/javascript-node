const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

/** processamento assincrono REST com Fetch API
 * Arrow Functions: diminuir comlexidade e verbosidade
 * Quuando tem apenas uma linha, pode retirar o corpo da função {}
 * */
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
        console.log(jsonBody);
        return jsonBody.results;
    })
    .then((pokemonList) => console.log(pokemonList))
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição concluída!'));

/** processamento assincrono REST com Fetch API
 * Forma declarativa convencional*/
fetch(url).then(function (response) {
    //console.log(response);
    // converter stream para json
    return response.json();

}).then(function (jsonBody) { // recebe o retorno da função imediatamente acima
    console.log(jsonBody);

}).catch(function (error) {
    console.log(error);

}).finally(function () {
    console.log('Requisição concluída!')
});