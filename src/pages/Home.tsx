import React, { useEffect, useState } from 'react';
import {
  fetchAllPokemonNames,
  fetchPokemon,
  TrimmedPokemonData,
} from '../gateways/poke-gateway';
import { motion } from 'framer-motion';
import { PokeOverviewGrid } from '../components/PokeOverviewGrid/PokeOverviewGrid';
import { SearchInput } from '../components/SearchInput/SearchInput';

export const Home = () => {
  const [fetchedPokemon, setFetchedPokemon] = useState<TrimmedPokemonData[]>(
    []
  );
  const [filteredPokemon, setFilteredPokemon] = useState<TrimmedPokemonData[]>(
    []
  );

  useEffect(() => {
    const fetchAll = async () => {
      const pkmnNames = await fetchAllPokemonNames();
      Promise.all(
        pkmnNames.map((pokemon) => {
          return fetchPokemon({ pokemonName: pokemon });
        })
      ).then((result) => {
        setFetchedPokemon(result);
        setFilteredPokemon(result);
      });
    };
    fetchAll();
  }, []);

  // if (loading) <SwordAndShieldLoader />;

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SearchInput
        fetchedPokemon={fetchedPokemon}
        onChange={(pkmn) => setFilteredPokemon(pkmn)}
      />
      <PokeOverviewGrid pokemons={filteredPokemon} />
    </motion.div>
  );
};
