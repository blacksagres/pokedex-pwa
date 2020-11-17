import React from "react";
import { PokeCard } from "./components/PokeCard";

import "./styles/main.scss";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexWrap: "wrap"
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
