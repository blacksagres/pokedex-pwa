import React from "react";
import { useAsync } from "react-use";
import { styled } from "../../stitches.config";
import { bounce as bounceSprite } from "../animations";
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
  borderRadius: "$card",

  transition: "box-shadow .150s ease-in-out",
  boxShadow: ".25rem .25rem .25rem 1px rgba(0, 0, 0, .2)",

  backgroundColor: "$card-bg",
  cursor: "pointer",

  ":hover": {
    boxShadow: ".25rem .25rem .75rem 1px rgba(0, 0, 0, .3)"
  },

  // When in row mode
  ":not(:last-child)": {
    marginBottom: "1rem"
  },

  // When in grid mode
  md: {
    ":not(:last-child)": {
      marginBottom: 0
    }
  }
});

const CardContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "space-between",
  padding: "0 1rem"
});

const CardHeader = styled("div", {
  textAlign: "center",
  textTransform: "capitalize",
  fontWeight: "bold",

  padding: ".3rem 0",

  backgroundColor: "silver",
  borderTopLeftRadius: "1rem",
  borderTopRightRadius: "1rem",

  md: {
    padding: ".5rem 0"
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
