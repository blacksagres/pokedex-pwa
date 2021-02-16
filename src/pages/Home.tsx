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
import { SwordAndShieldLoader } from '@components/SwordShieldLoader';

export const Home = () => {
  const [filteredPokemonNames, setFilteredPokemonNames] = useState<string[]>(
    []
  );
  const [filteredPokemons, setFilteredPokemons] = useState<
    TrimmedPokemonData[]
  >([]);

  const {
    loading,
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

  if (loading) return <SwordAndShieldLoader />;

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SearchInput
        onChange={(pkmnNameSearch) => {
          setFilteredPokemonNames(
            allPokemonNames
              .filter((pkmnName: string) => pkmnName.includes(pkmnNameSearch))
              .slice(0, 20)
          );
        }}
      />
      <PokeOverviewGrid pokemons={filteredPokemons} />
    </motion.div>
  );
};
