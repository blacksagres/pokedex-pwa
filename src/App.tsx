import React from "react";
import { PokeOverviewGrid } from "./components/PokeOverviewGrid";

import "./styles/main.scss";

export default function App() {
  return (
    <PokeOverviewGrid
      pokemons={[
        "blastoise",
        "charizard",
        "venusaur",
        "eevee",
        "pikachu",
        "lurantis",
        "chandelure",
        "milotic"
      ]}
    />
  );
}
