import React from "react";
import { PokeCard } from "./components/PokeCard";

import "./styles/main.scss";

export default function App() {
  return (
    <div
      style={{
        padding: "1rem",
        background:
          "linear-gradient(101deg, rgba(243,83,59,1) 20%, rgba(250,114,72,1) 80%)"
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
