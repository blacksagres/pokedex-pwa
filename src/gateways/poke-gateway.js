import { endpoint } from "./poke-config";

export const fetchPokemon = ({ pokemonName }) => {
  return fetch(`${endpoint.url}pokemon/ditto`).then((result) => result.json());
};
