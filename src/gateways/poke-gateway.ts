import { PokeData } from "../definitions";
import { endpoint } from "./poke-config";

export const fetchPokemon = ({ pokemonName }): Promise<PokeData> => {
  return fetch(`${endpoint.url}pokemon/${pokemonName}`).then((result) =>
    result.json()
  );
};
