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
  const [filteredPokemon, setFilteredPokemon] = useState<TrimmedPokemonData[]>(
    []
  );

  const { loading, value: fetchedPokemon = [], error } = useAsync(async () => {
    const pkmnNames = await fetchAllPokemonNames();
    const allPokemons = await Promise.all(
      pkmnNames.map((pokemon) => {
        return fetchPokemon({ pokemonName: pokemon });
      })
    );
    setFilteredPokemon(allPokemons);

    return allPokemons;
  }, []);

  if (loading) return <SwordAndShieldLoader />;

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SearchInput
        fetchedPokemon={fetchedPokemon as TrimmedPokemonData[]}
        onChange={(pkmn) => setFilteredPokemon(pkmn)}
      />
      <PokeOverviewGrid pokemons={filteredPokemon} />
    </motion.div>
  );
};
