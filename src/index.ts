import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon("Chamander");
//(Pokemon.prototype as any).customName = "Pikachu";
charmander.savePokemonToDB(-2);
charmander.savePokemonToDB(2);
charmander.publicApi="saul"
console.log(charmander);


