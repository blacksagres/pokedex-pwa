import { endpoint } from "./poke-config";

export const fetchPokemon = ({ pokemonName }) => {
  return fetch(`${endpoint.url}pokemon/${pokemonName}`).then((result) =>
    result.json()
  );
};
