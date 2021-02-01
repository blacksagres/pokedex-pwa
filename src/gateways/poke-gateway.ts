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

export const fetchAllPokemonNames = (): Promise<string[]> => {
  return fetch(`${endpoint.url}pokemon/?limit=450`)
    .then((result) => result.json())
    .then((jsonResult) => jsonResult.results.map((pkmn: any) => pkmn.name));
};

export const fetchPokemonForOverview = ({
  pokemonName,
}: {
  pokemonName: string;
}): Promise<TrimmedPokemonData> => {
  const cachedPokemon = getCachedObject<TrimmedPokemonData>(
    `trimmed-data-${pokemonName}`
  );

  console.log('fetching for overview', cachedPokemon);

  if (cachedPokemon) return Promise.resolve(cachedPokemon);

  return fetch(`${endpoint.url}pokemon/${pokemonName}`)
    .then((result) => result.json())
    .then(({ id, name, types, sprites }: TrimmedPokemonData) => {
      setCachedObject(`trimmed-data-${pokemonName}`, {
        id,
        name,
        types,
        sprites,
      });
      return { id, name, types, sprites };
    });
};

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

export const fetchTypes = ({ type }: { type: string }): Promise<PokeType> => {
  const cachedType = getCachedObject<PokeType>(type);

  if (cachedType) return Promise.resolve(cachedType);

  return fetch(`${endpoint.url}type/${type}`)
    .then((result) => result.json())
    .then((jsonResult) => {
      setCachedObject(type, jsonResult);
      return jsonResult;
    });
};

export const fetchEvolutionData = async ({
  speciesUrl,
}: {
  speciesUrl: string;
}) => {
  const speciesData = await fetch(speciesUrl).then(
    (result) => result.json() as Promise<PokemonSpecies>
  );

  // Maybe only look backwards?
  const evolution = await fetch(speciesData.evolution_chain.url).then(
    (result) => result.json() as Promise<PokemonEvolutionChain>
  );

  return {
    evolvesFrom: speciesData.evolves_from_species
      ? await fetchPokemon({
          pokemonName: speciesData.evolves_from_species.name,
        })
      : null,
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
