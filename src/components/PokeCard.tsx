import React from "react";
import { useAsync } from "react-use";
import { styled } from "../../stitches.config";
import { bounce as bounceSprite } from "../animations";
import { generateGradient } from "../dynamic-styling/colors";
import { fetchPokemon } from "../gateways/poke-gateway";
import { SwordAndShieldLoader } from "./SwordShieldLoader";

const PokeSprite = styled("img", {
  height: "10rem",
  userSelect: "none"
});

const Card = styled("div", {
  border: ".2rem solid black",
  borderRadius: "1rem",

  display: "flex",
  alignContent: "center",
  justifyContent: "center",

  transition: "box-shadow .150s ease-in-out",
  boxShadow: ".25rem .25rem .25rem 1px rgba(0, 0, 0, .2)",

  cursor: "pointer",

  ":hover": {
    boxShadow: ".25rem .25rem .75rem 1px rgba(0, 0, 0, .3)"
  },

  ":not(:last-child)": {
    marginRight: "1rem"
  }
});

export const PokeCard = ({ pokemonName }) => {
  const { loading, value: pokemon, error } = useAsync(async () => {
    try {
      return fetchPokemon({ pokemonName });
    } catch (error) {
      return error;
    }
  });

  const attachHoverEvent = (element) => {
    element.addEventListener("mouseenter", () => {
      bounceSprite({ element: element });
    });
  };

  return loading ? (
    <SwordAndShieldLoader />
  ) : (
    <Card style={generateGradient(pokemon.types.map((type) => type.type.name))}>
      <PokeSprite
        ref={attachHoverEvent}
        src={pokemon.sprites.front_default}
        alt="front_default"
      />
    </Card>
  );
};
