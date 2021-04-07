import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";


//Private
function _draw() {

    let template = ''
    ProxyState.allPokemon.forEach(p => {
        template += `<li class="action hover-action" onclick="app.pokemonController.getPokemon('${p.name}')">${p.name}</li>`
    })
    document.getElementById('allPokemon').innerHTML = template

}

function _drawActive() {
    document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon ? ProxyState.activePokemon.Template : ""
}

//Public
export default class PokemonController {
    constructor() {
        ProxyState.on("allPokemon", _draw);
        ProxyState.on("activePokemon", _drawActive)
        this.getAllPokemon()
    }

    async getAllPokemon() {
        try {
            await pokemonService.getAllPokemon()
        } catch (error) {
            console.log(error)
        }
    }

    async getPokemon(name) {
        try {
            await pokemonService.getPokemon(name)
        } catch (error) {
            console.log(error)
        }
    }

}
