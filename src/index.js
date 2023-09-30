define(["require", "exports", "./generics/get-pokemon"], function (require, exports, get_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, get_pokemon_1.getPokemon)(4)
        .then((response) => console.log(response));
});
