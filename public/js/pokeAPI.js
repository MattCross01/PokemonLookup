function getPokemon(choose) {
    choose.preventDefault()
    let pokemonLink = $('pokemonLink').val();
    let pokemonId = pokemonLink.split('=')[1];

    fetch("https://pokeapi.co/api/v2/ability/?limil=20&offet=60"+pokemonId, {
        "method": "get",
        
    })
    .then(response => {
        
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
      var button = $(`<a href=${jsonResponse.Search_url}>serch</a>`)
        $("#search").append(button)
      })
      .catch(err => {
        console.error(err);
      });
};
//this is a test