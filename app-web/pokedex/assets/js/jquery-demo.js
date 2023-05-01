const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

/** EXEMPLO: processamento REST com JQuery
 * */
$(document).ready(function() {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    }).then(function(data) {
      console.log(data);
    });
});

