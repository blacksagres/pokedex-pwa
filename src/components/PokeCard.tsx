import React from "react";
import { useAsync } from "react-use";
import { styled } from "../../stitches.config";
import { bounce as bounceSprite, expandCard } from "../animations";
import { fetchPokemon } from "../gateways/poke-gateway";
import { SwordAndShieldLoader } from "./SwordShieldLoader";
import { TypeTag } from "./TypeTag";

const PokeSprite = styled("img", {
  height: "5rem",
  userSelect: "none",

  md: {
    height: "8rem"
  }
});

const Card = styled("div", {
  borderRadius: "1rem",

  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-between",
  padding: "0 1rem",

  transition: "box-shadow .150s ease-in-out",
  boxShadow: ".25rem .25rem .25rem 1px rgba(0, 0, 0, .2)",

  backgroundColor: "#fcfefb",

  cursor: "pointer",

  ":hover": {
    boxShadow: ".25rem .25rem .75rem 1px rgba(0, 0, 0, .3)"
  },

  ":not(:last-child)": {
    marginBottom: "1rem"
  },

  md: {
    ":not(:last-child)": {
      marginBottom: 0
    }
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

  const animateSprite = (element) => {
    element.addEventListener("mouseenter", () => {
      bounceSprite({ element: element });
    });

    element.addEventListener("click", () => {
      bounceSprite({ element: element });
    });
  };

  const animateCard = (element) => {
    element.addEventListener("click", () => {
      expandCard({ element: element });
    });
  };

  return loading ? (
    // this needs to wait longer
    <SwordAndShieldLoader />
  ) : (
    <Card ref={animateCard}>
      <PokeSprite
        ref={animateSprite}
        src={pokemon.sprites.front_default}
        alt="front_default"
      />
      <TypeTag types={pokemon.types} />
    </Card>
  );
};
