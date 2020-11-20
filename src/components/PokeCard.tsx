import React from "react";
import { useAsync } from "react-use";
import { styled } from "../../stitches.config";
import { bounce as bounceSprite } from "../animations";
import { fetchPokemon } from "../gateways/poke-gateway";
import { Card, CardHeader, CardContent } from "./containers/StyledCard";
import { TypeTag } from "./TypeTag";

const PokeSprite = styled("img", {
  height: "5rem",
  userSelect: "none",

  md: {
    height: "8rem"
  }
});

export const PokeCard = ({ pokemonData, onClick }) => {
  const animateSprite = (element) => {
    if (!element) return;
    element.addEventListener("mouseenter", () => {
      bounceSprite({ element: element });
    });

    element.addEventListener("click", () => {
      bounceSprite({ element: element });
    });
  };

  return (
    <Card onClick={onClick}>
      <CardHeader>
        {pokemonData.name} #{pokemonData.id}
      </CardHeader>
      <CardContent>
        <PokeSprite
          ref={animateSprite}
          src={pokemonData.sprites.front_default}
          alt="front_default"
        />
        <TypeTag types={pokemonData.types} />
      </CardContent>
    </Card>
  );
};
