import React from "react";
import { useAsync } from "react-use";
import { styled } from "../../stitches.config";
import { bounce as bounceSprite } from "../animations";
import { fetchPokemon } from "../gateways/poke-gateway";
import { Card, CardHeader, CardContent } from "./containers/StyledCard";
import { SwordAndShieldLoader } from "./SwordShieldLoader";
import { TypeTag } from "./TypeTag";

const PokeSprite = styled("img", {
  height: "5rem",
  userSelect: "none",

  md: {
    height: "8rem"
  }
});

export const PokeCard = ({ pokemonName, onClick }) => {
  const { loading, value: pokemon, error } = useAsync(async () => {
    try {
      return fetchPokemon({ pokemonName });
    } catch (error) {
      return error;
    }
  });

  const animateSprite = (element) => {
    if (!element) return;
    element.addEventListener("mouseenter", () => {
      bounceSprite({ element: element });
    });

    element.addEventListener("click", () => {
      bounceSprite({ element: element });
    });
  };

  return loading ? (
    // this needs to wait longer
    <SwordAndShieldLoader />
  ) : (
    <Card onClick={onClick}>
      <CardHeader>{pokemon.name}</CardHeader>
      <CardContent>
        <PokeSprite
          ref={animateSprite}
          src={pokemon.sprites.front_default}
          alt="front_default"
        />
        <TypeTag types={pokemon.types} />
      </CardContent>
    </Card>
  );
};
