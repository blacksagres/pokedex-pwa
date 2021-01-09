import type { PokeData } from '../definitions';
import { endpoint } from './poke-config';
import { getCachedObject, setCachedObject } from './poke-cacher';

export const fetchPokemon = ({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<PokeData> => {
  const cachedPokemon = getCachedObject<PokeData>(pokemonName);

  if (cachedPokemon) return Promise.resolve(cachedPokemon);

  return fetch(`${endpoint.url}pokemon/${pokemonName}`)
    .then((result) => result.json())
    .then((jsonResult) => {
      console.log(jsonResult);
      setCachedObject(pokemonName, jsonResult);
      return jsonResult;
    });
};
