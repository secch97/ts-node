define(["require", "exports", "./decorators/pokemon"], function (require, exports, pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const charmander = new pokemon_1.Pokemon("Chamander");
    //(Pokemon.prototype as any).customName = "Pikachu";
    charmander.savePokemonToDB(-2);
    charmander.savePokemonToDB(2);
    charmander.publicApi = "saul";
    console.log(charmander);
});
