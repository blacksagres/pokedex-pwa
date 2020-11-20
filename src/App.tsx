import React, { useEffect, useState } from "react";
import { PokeOverviewGrid } from "./components/PokeOverviewGrid";
import { SwordAndShieldLoader } from "./components/SwordShieldLoader";
import { fetchPokemon } from "./gateways/poke-gateway";

import "./styles/main.scss";

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
  return <PokeOverviewGrid pokemons={fetchedPokemon} />;
}
