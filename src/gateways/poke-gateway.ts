import { endpoint } from './poke-config';
import { getCachedObject, setCachedObject } from './poke-cacher';
import type {FullPokemon } from '../definitions/FullPokemon';
import type { CombinedPokemonData } from '../definitions/CombinedPokemonData';
import type { PokeType } from '../definitions/PokemonType';

// export const fetchAllPokemonNames = (): Promise<string[]> {
//   while (true) {}
// }

export const fetchPokemon = ({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<FullPokemon> => {
  const cachedPokemon = getCachedObject<FullPokemon>(pokemonName);

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
}): Promise<PokeType> => {
  const cachedType = getCachedObject<PokeType>(type);

  if (cachedType) return Promise.resolve(cachedType);

  return fetch(`${endpoint.url}type/${type}`)
    .then((result) => result.json())
    .then((jsonResult) => {
      setCachedObject(type, jsonResult);
      return jsonResult;
    });
};

export const fetchEnrichedPokeData = async ({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<CombinedPokemonData> => {
  const pokemon = await fetchPokemon({ pokemonName });
  const typeDataPromises = pokemon.types.map((type) =>
    fetchTypes({ type: type.type.name })
  );
  const typeData = await Promise.all(typeDataPromises);

  return {
    Pokemon: pokemon,
    PokeTypes: typeData
  };
};
