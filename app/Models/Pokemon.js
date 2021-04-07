export default class Pokemon {
    constructor({ name, img, weight, height, id, sprites }) {
        this.id = id
        this.name = name
        this.img = img || sprites.other.dream_world.front_default
        this.weight = weight
        this.height = height
    }

    get Template() {

        return /*html*/`
        <div class="card">
            <img class="card-img-top" src="${this.img}" alt="">
            <div class="card-body">
                <h4 class="card-title">${this.name}</h4>
                <h5 class="card-title">Weight: ${this.weight} | Height: ${this.height}</h5>
               
            </div>
            <div class="d-flex justify-content-end">
            ${this.Button}
        </div>
        </div>

        
        `
    }
    get Button() {
        if (!this.id) {
            return '<button class="btn btn-outline-danger" onclick="app.sandboxController.release()">Release</button>'
        }
        return '<button class="btn btn-outline-info" onclick="app.sandboxController.catch()">Catch</button>'
    }
}

