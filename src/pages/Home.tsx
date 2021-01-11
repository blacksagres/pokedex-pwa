import React, { useEffect, useState } from 'react';
import type { PokeEnrichedData } from '../definitions';
import { fetchEnrichedPokeData } from '../gateways/poke-gateway';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { PokeOverviewGrid } from '../components/PokeOverviewGrid';

export const Home = () => {
  const [fetchedPokemon, setFetchedPokemon] = useState<PokeEnrichedData[]>([]);

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
      <PokeOverviewGrid pokemons={fetchedPokemon} />
    </motion.div>
  );
};
