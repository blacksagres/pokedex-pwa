import React from "react";
import { styled } from "../../stitches.config";
import { bounce as bounceSprite } from "../animations";
import { Card, CardHeader, CardContent } from "./containers/StyledCard";
import { TypeTagSwordAndShield } from "./TypeTagSwordShield";

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
    // bounceSprite({ element: element });
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
        <TypeTagSwordAndShield types={pokemonData.types} />
      </CardContent>
    </Card>
  );
};
