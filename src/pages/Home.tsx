import React, { useEffect, useState } from 'react';
import {fetchAllPokemonNames, fetchEnrichedPokeData } from '../gateways/poke-gateway';
import { motion } from 'framer-motion';
import { PokeOverviewGrid } from '../components/PokeOverviewGrid/PokeOverviewGrid';
import type { CombinedPokemonData } from '../definitions/CombinedPokemonData';
import { SearchInput } from '../components/SearchInput/SearchInput';

export const Home = () => {
    const [fetchedPokemon, setFetchedPokemon] = useState<CombinedPokemonData[]>([]);
    const [filteredPokemon, setFilteredPokemon] = useState<CombinedPokemonData[]>([]);

  useEffect(() => {
      const fetchAll = async () => {
          const pkmnNames = await fetchAllPokemonNames();
          Promise.all(pkmnNames.map((pokemon) => {
                  return fetchEnrichedPokeData({ pokemonName: pokemon });
              })
          ).then((result) => {
              setFetchedPokemon(result);
              setFilteredPokemon(result);
          });
      }
      fetchAll()
  }, []);

  // if (loading) <SwordAndShieldLoader />;


  return (
    <motion.div exit={{ opacity: 0 }}>
      <SearchInput fetchedPokemon={fetchedPokemon} onChange={(pkmn) => setFilteredPokemon(pkmn)}/>
      <PokeOverviewGrid pokemons={filteredPokemon} />
    </motion.div>
  );
};
