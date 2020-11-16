import React from "react";
import { PokeCard } from "./components/PokeCard";

import "./styles/main.scss";

export default function App() {
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      {["blastoise", "charizard", "venusaur", "eevee", "pikachu"].map(
        (pokemon) => (
          <PokeCard key={pokemon} pokemonName={pokemon} />
        )
      )}
    </div>
  );
}
