import { endpoint } from './poke-config';
import { cachedFetchApi } from './poke-cacher';
import type { FullPokemon } from '../definitions/FullPokemon';
import type { CombinedPokemonData } from '../definitions/CombinedPokemonData';
import type { PokeType } from '../definitions/PokemonType';
import type { PokemonSpecies } from '@definitions/PokemonSpecies';
import type { PokemonEvolutionChain } from '@definitions/PokemonEvolutionChain';

export type TrimmedPokemonData = Pick<
  FullPokemon,
  'name' | 'types' | 'id' | 'sprites'
>;

export const fetchAllPokemonNames = async (): Promise<string[]> => {
  const requestUrl = `${endpoint.url}pokemon/?limit=150`;
  const jsonResult = await cachedFetchApi<any>(requestUrl);
  return (
    jsonResult.results
      .map((pkmn: any) => pkmn.name)
      // for some reason, lickitung breaks when called in the api
      // TODO: why lickitung, why
      .filter((name: string) => name !== 'lickitung')
  );
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
