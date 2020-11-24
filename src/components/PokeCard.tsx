import React, { useRef } from "react";
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

export const PokeCard = ({ id, pokemonData, onClick, isSelected }) => {
  const variants = {
    closed: { opacity: 1 },
    open: { opacity: 0.3 }
  };

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
    <Card
      animate={isSelected ? "open" : "closed"}
      variants={variants}
      id={id}
      layoutId={id}
      onClick={onClick}
    >
      <CardHeader>
        #{pokemonData.id} {pokemonData.name}
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
