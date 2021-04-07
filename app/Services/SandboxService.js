import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandBoxApi } from "./AxiosService.js";

class SandboxService {
    async release() {
        await sandBoxApi.delete(ProxyState.activePokemon.id)
        ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id !== ProxyState.activePokemon.id)
        ProxyState.activePokemon = null
    }
    setActive(id) {
        let pokemon = ProxyState.myPokemon.find(p => p.id === id)
        ProxyState.activePokemon = pokemon
    }

    async getMyPokemon() {
        let res = await sandBoxApi.get('')
        ProxyState.myPokemon = res.data.map(p => new Pokemon(p))
    }
    async catch() {
        let res = await sandBoxApi.post('', ProxyState.activePokemon)
        ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data)]
    }
}

export const sandboxService = new SandboxService();
