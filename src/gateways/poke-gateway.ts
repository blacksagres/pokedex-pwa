import type { PokeData } from '../definitions';
import { endpoint } from './poke-config';
import { getCachedObject, setCachedObject } from './poke-cacher';
import type { PokeDataType } from '../definitions/PokeDataType';

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
      setCachedObject(pokemonName, jsonResult);
      return jsonResult;
    });
};

export const fetchTypes = ({
  type,
}: {
  type: string;
}): Promise<PokeDataType> => {
  const cachedType = getCachedObject<PokeDataType>(type);

  if (cachedType) return Promise.resolve(cachedType);

  return fetch(`${endpoint.url}type/${type}`)
    .then((result) => result.json())
    .then((jsonResult) => {
      setCachedObject(type, jsonResult);
      return jsonResult;
    });
};
