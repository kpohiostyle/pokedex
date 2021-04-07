export const sandBoxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/kevin/pokemon',
    timeout: 5000

})

export const pokemonApi = axios.create({
    baseURL: ' https://pokeapi.co/api/v2/pokemon',
    timeout: 5000
})