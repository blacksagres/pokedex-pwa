import React, { useEffect, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PokeOverviewGrid } from './components/PokeOverviewGrid';
import { fetchEnrichedPokeData, fetchPokemon } from './gateways/poke-gateway';

import './styles/main.css';
import type { PokeData } from './definitions';

export default function App() {
  const [fetchedPokemon, setFetchedPokemon] = useState<PokeData[]>([]);

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
        fetchEnrichedPokeData({ pokemonName: pokemon }).then((a) =>
          console.log(a)
        );
        return fetchPokemon({ pokemonName: pokemon });
      })
    ).then((result) => {
      setFetchedPokemon(result);
    });
  }, []);

  // if (loading) <SwordAndShieldLoader />;

  return (
    <AnimateSharedLayout type="crossfade">
      <PokeOverviewGrid pokemons={fetchedPokemon} />
    </AnimateSharedLayout>
  );
}

/**
 * gradient on top bar per type
 * number in front of the name
 * use this to open the dialog: https://www.framer.com/motion/
 */
