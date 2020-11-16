import React from "react";
import { useAsync } from "react-use";
import { styled } from "../../stitches.config";
import { bounce as bounceSprite } from "../animations";
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
    element.addEventListener("mouseenter", () => {
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
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

// Normal Type: A8A77A
// Fire Type:  EE8130
// Water Type:  6390F0
// Electric Type:  F7D02C
// Grass Type:  7AC74C
// Ice Type:  96D9D6
// Fighting Type:  C22E28
// Poison Type:  A33EA1
// Ground Type:  E2BF65
// Flying Type:  A98FF3
// Psychic Type:  F95587
// Bug Type:  A6B91A
// Rock Type:  B6A136
// Ghost Type:  735797
// Dragon Type:  6F35FC
// Dark Type:  705746
// Steel Type:  B7B7CE
// Fairy Type:  D685AD

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
