import React, { useEffect, useState } from 'react';
import {
  fetchAllPokemonNames,
  fetchPokemon,
  TrimmedPokemonData,
} from '../gateways/poke-gateway';
import { motion } from 'framer-motion';
import { PokeOverviewGrid } from '../components/PokeOverviewGrid/PokeOverviewGrid';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { useAsync } from 'react-use';
import { PokeBallButton, PokeBallSpinner } from '@components/PokeBallButton';

export const Home = () => {
  const [filteredPokemonNames, setFilteredPokemonNames] = useState<string[]>(
    []
  );
  const [filteredPokemons, setFilteredPokemons] = useState<
    TrimmedPokemonData[]
  >([]);

  const {
    loading: loadingPokemonNames,
    value: allPokemonNames = [] as string[],
    error,
  } = useAsync(async () => {
    const pkmnNames = await fetchAllPokemonNames();

    return pkmnNames;
  }, []);

  useEffect(() => {
    const fetchFilteredPokemon = async () => {
      const allPokemons = await Promise.all(
        filteredPokemonNames.map((pokemonName) => {
          return fetchPokemon({ pokemonName: pokemonName });
        })
      );

      // TODO: ignoring all pokemon that do not have a front sprite for now
      setFilteredPokemons(
        allPokemons.filter((pokemon) => pokemon.sprites.front_default)
      );
    };

    fetchFilteredPokemon();
  }, [filteredPokemonNames]);

  // TODO: have a decent loading icon
  if (loadingPokemonNames)
    return (
      <div
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
        }}
      >
        <PokeBallSpinner />
      </div>
    );

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SearchInput
        onChange={(pkmnNameSearch) => {
          setFilteredPokemonNames(
            allPokemonNames
              .filter((pkmnName: string) =>
                pkmnName.toLowerCase().includes(pkmnNameSearch.toLowerCase())
              )
              .slice(0, 20)
          );
        }}
      />
      <PokeOverviewGrid pokemons={filteredPokemons} />
    </motion.div>
  );
};
