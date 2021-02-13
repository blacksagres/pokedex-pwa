import { endpoint } from './poke-config';
import { getCachedObject, setCachedObject } from './poke-cacher';
import type { FullPokemon } from '../definitions/FullPokemon';
import type { CombinedPokemonData } from '../definitions/CombinedPokemonData';
import type { PokeType } from '../definitions/PokemonType';
import type { PokemonSpecies } from '@definitions/PokemonSpecies';
import type { PokemonEvolutionChain } from '@definitions/PokemonEvolutionChain';

export type TrimmedPokemonData = Pick<
  FullPokemon,
  'name' | 'types' | 'id' | 'sprites'
>;

const cachedFetchApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const pokeCache = await caches.open('poke-cache');

    const cachedResult = await pokeCache.match(endpoint);

    if (cachedResult) {
      const jsonCachedResult = (await cachedResult.json()) as T;
      return jsonCachedResult;
    }

    const apiResponse = await fetch(endpoint);
    // https://stackoverflow.com/q/45618984
    // TL;DR - A request is a stream and can only be consumed once.
    // Since we are consuming this once by cache and once by the browser for fetch,
    // we need to clone the response.
    pokeCache.put(endpoint, apiResponse.clone());

    const jsonResult: T = await apiResponse.json();

    return jsonResult;
  } catch (error) {
    console.error({ endpoint, error });
    return {} as T;
  }
};

export const fetchAllPokemonNames = async (): Promise<string[]> => {
  // return Promise.resolve(['lickitung']);
  const requestUrl = `${endpoint.url}pokemon/?limit=450`;
  const jsonResult = await cachedFetchApi<any>(requestUrl);
  return jsonResult.results
    .map((pkmn: any) => pkmn.name)
    .filter((name: string) => name !== 'lickitung');
};

export const fetchPokemon = async ({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<FullPokemon> => {
  const requestUrl = `${endpoint.url}pokemon/${pokemonName}`;
  const jsonResult = await cachedFetchApi<FullPokemon>(requestUrl);
  return jsonResult;
};

export const fetchTypes = async ({
  type,
}: {
  type: string;
}): Promise<PokeType> => {
  const requestUrl = `${endpoint.url}type/${type}`;
  const jsonResult = await cachedFetchApi<PokeType>(requestUrl);
  return jsonResult;
};

export const fetchEvolutionData = async ({
  speciesUrl,
}: {
  speciesUrl: string;
}) => {
  const speciesData = await cachedFetchApi<PokemonSpecies>(speciesUrl);
  const evolution = await cachedFetchApi<PokemonEvolutionChain>(
    speciesData.evolution_chain.url
  );

  if (!evolution) return { evolvesFrom: null };

  const evolutionFrom = await fetchPokemon({
    pokemonName: speciesData.evolves_from_species.name,
  });

  return {
    evolvesFrom: evolutionFrom,
  };
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

  const { evolvesFrom = null } = await fetchEvolutionData({
    speciesUrl: pokemon.species.url,
  });

  return {
    Pokemon: pokemon,
    PokeTypes: typeData,
    EvolvesFrom: evolvesFrom,
  };
};
