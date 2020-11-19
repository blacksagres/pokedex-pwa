import React from "react";
import { PokeCard } from "./components/PokeCard";
import { PokeOverviewGrid } from "./components/PokeOverviewGrid";

import "./styles/main.scss";

export default function App() {
  return (
    <PokeOverviewGrid>
      {["blastoise", "charizard", "venusaur", "eevee", "pikachu"].map(
        (pokemon) => (
          <PokeCard key={pokemon} pokemonName={pokemon} />
        )
      )}
    </PokeOverviewGrid>
  );
}
