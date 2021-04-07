import { ProxyState } from "../AppState.js";
import { sandboxService } from "../Services/SandboxService.js";


//Private
function _draw() {

    let template = ''
    ProxyState.myPokemon.forEach(p => {
        template += `<li class="action hover-action" onclick="app.sandboxController.setActive('${p.id}')">${p.name}</li>`
    })
    document.getElementById('myPokemon').innerHTML = template

}

//Public
export default class SandboxController {
    constructor() {
        ProxyState.on("myPokemon", _draw);
        this.getMyPokemon()
    }

    async getMyPokemon() {
        try {
            await sandboxService.getMyPokemon()
        } catch (error) {
            console.log(error)
        }
    }

    async catch() {
        try {
            await sandboxService.catch()
        } catch (error) {
            console.log(error)
        }
    }

    async release() {
        try {
            await sandboxService.release()
        } catch (error) {
            console.log(error)
        }
    }
    setActive(id) {
        sandboxService.setActive(id)
    }

}
