import React, { useEffect, useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { PokeOverviewGrid } from "./components/PokeOverviewGrid";
import { SwordAndShieldLoader } from "./components/SwordShieldLoader";
import { fetchPokemon } from "./gateways/poke-gateway";

import "./styles/main.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fetchedPokemon, setFetchedPokemon] = useState([]);

  useEffect(() => {
    Promise.all(
      [
        "blastoise",
        "charizard",
        "venusaur",
        "eevee",
        "pikachu",
        "lurantis",
        "chandelure",
        "milotic"
      ].map((pokemon) => fetchPokemon({ pokemonName: pokemon }))
    ).then((result) => {
      setLoading(false);
      setFetchedPokemon(result);
    });
  }, []);

  if (loading) <SwordAndShieldLoader />;
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
