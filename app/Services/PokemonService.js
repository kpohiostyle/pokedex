import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js";

class PokemonService {
    async getAllPokemon() {
        let res = await pokemonApi.get("?limit=100")
        ProxyState.allPokemon = res.data.results
    }

    async getPokemon(name) {
        let res = await pokemonApi.get(name)
        ProxyState.activePokemon = new Pokemon(res.data)
    }
}

export const pokemonService = new PokemonService();

