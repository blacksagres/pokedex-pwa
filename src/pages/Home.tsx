import React, { useEffect, useState } from 'react';
import { fetchEnrichedPokeData } from '../gateways/poke-gateway';
import { motion } from 'framer-motion';
import { PokeOverviewGrid } from '../components/PokeOverviewGrid/PokeOverviewGrid';
import type { CombinedPokemonData } from '../definitions/CombinedPokemonData';
import { SearchInput } from '../components/SearchInput/SearchInput';

export const Home = () => {
  const [fetchedPokemon, setFetchedPokemon] = useState<CombinedPokemonData[]>([]);

  useEffect(() => {
    Promise.all(
      [
        'blastoise',
        'charizard',
        'venusaur',
        'eevee',
        'pikachu',
        'lurantis',
        'chandelure',
        'milotic',
      ].map((pokemon) => {
        return fetchEnrichedPokeData({ pokemonName: pokemon });
      })
    ).then((result) => {
      setFetchedPokemon(result);
    });
  }, []);

  // if (loading) <SwordAndShieldLoader />;

  return (
    <motion.div exit={{ opacity: 0 }}>
      <SearchInput />
      <PokeOverviewGrid pokemons={fetchedPokemon} />
    </motion.div>
  );
};
