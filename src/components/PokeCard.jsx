import React, { useEffect, useRef } from "react";
import { useAsync } from "react-use";
import { styled } from "../../stitches.config";
import { bounceSprite } from "../animations/bounce";
import { fetchPokemon } from "../gateways/poke-gateway";
import { SwordAndShieldLoader } from "./SwordShieldLoader";

const PokeSprite = styled("img", {
  height: "10rem"
});

export const PokeCard = ({ pokemonName }) => {
  const { loading, value, error } = useAsync(async () => {
    try {
      return fetchPokemon({ pokemonName });
    } catch (error) {
      return error;
    }
  });

  const attachHoverEvent = (element) => {
    element.addEventListener("mouseenter", (event) => {
      console.log(event);
      bounceSprite({ element: element });
    });
  };

  return (
    <div>
      {loading ? (
        <SwordAndShieldLoader />
      ) : (
        <div>
          <PokeSprite
            ref={attachHoverEvent}
            src={value.sprites.front_default}
            alt="front_default"
          />
          {/* <pre>{JSON.stringify(value, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};

// "sprites": {
//   "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
//   "back_female": null,
//   "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
//   "back_shiny_female": null,
//   "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
//   "front_female": null,
//   "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
//   "front_shiny_female": null,
//   "other": {
//     "dream_world": {
//       "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
//       "front_female": null
//     },
//     "official-artwork": {
//       "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
//     }
//   }
