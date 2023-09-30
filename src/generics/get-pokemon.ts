import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon:(pokemonId:number)=>Promise<Pokemon> = async(pokemonId)=> {
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return resp.data;
}