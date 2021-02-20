import { endpoint } from './poke-config';
import { cachedFetchApi } from './poke-cacher';
import type { FullPokemon } from '../definitions/FullPokemon';
import type { CombinedPokemonData } from '../definitions/CombinedPokemonData';
import type { PokeType } from '../definitions/PokemonType';
import type { PokemonSpecies } from '@definitions/PokemonSpecies';
import type {
  EvolvesTo,
  PokemonEvolutionChain,
} from '@definitions/PokemonEvolutionChain';

export type TrimmedPokemonData = Pick<
  FullPokemon,
  'name' | 'types' | 'id' | 'sprites'
>;

export const fetchAllPokemonNames = async (): Promise<string[]> => {
  const requestUrl = `${endpoint.url}pokemon/?limit=150`;
  const jsonResult = await cachedFetchApi<any>(requestUrl);
  let finalResult: any[] = jsonResult.results;
  let maybeNextEndpoint = jsonResult.next;

  while (!!maybeNextEndpoint) {
    const currentResult = await cachedFetchApi<any>(maybeNextEndpoint);
    maybeNextEndpoint = currentResult.next;
    finalResult = finalResult.concat(currentResult.results);
  }

  return finalResult.map((pkmn: any) => pkmn.name);
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
}): Promise<{
  evolvesFrom: FullPokemon;
  evolvesTo: FullPokemon[];
}> => {
  const speciesData = await cachedFetchApi<PokemonSpecies>(speciesUrl);

  // TODO: Have to decide how to handle post evolutions
  const evolution = await cachedFetchApi<PokemonEvolutionChain>(
    speciesData.evolution_chain.url
  );

  // the very base form
  const evolutionFrom = await fetchPokemon({
    pokemonName: evolution.chain.species.name,
  });

  const iterateOnEvolutionChain = async (
    evolvesTo: EvolvesTo[],
    resultArray: FullPokemon[][]
  ) => {
    const nextLinksToIterate = evolvesTo
      .map((evolutionLink) => evolutionLink.evolves_to)
      .flat();

    const pokemonNames = evolvesTo.map(
      (evolutionLink) => evolutionLink.species.name
    );

    const resolvedPokemons = await Promise.all(
      pokemonNames.map((pokemonName) => fetchPokemon({ pokemonName }))
    );

    resultArray.push(resolvedPokemons);
    if (nextLinksToIterate.length)
      iterateOnEvolutionChain(nextLinksToIterate, resultArray);
  };

  // It is all in the evolution chain. It needs to be recursively built.
  let evolvesTo = [[evolutionFrom]];

  await iterateOnEvolutionChain(evolution.chain.evolves_to, evolvesTo);

  console.log(evolvesTo);
  // console.log(speciesData);

  return {
    evolvesFrom: evolutionFrom,
    evolvesTo: [],
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
