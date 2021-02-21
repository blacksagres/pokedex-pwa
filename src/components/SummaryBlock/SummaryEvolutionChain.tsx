import type { FullPokemon } from '@definitions/FullPokemon';
import React from 'react';

export const SummaryEvolutionChain = (props: {
  evolutionChain: FullPokemon[][];
}): JSX.Element => {
  const { evolutionChain } = props;

  {
    /* check the function fetchEnrichedPokeData for why this check is here */
  }
  if (evolutionChain.length === 1 || !!!evolutionChain[0][0].sprites)
    return (
      <div style={{ textAlign: 'center' }}>
        <h4>This Pokémon has no evolutions.</h4>
      </div>
    );

  return (
    <div style={{ textAlign: 'center' }}>
      {evolutionChain[0][0].sprites &&
        evolutionChain.map((evolutionLink, index) => (
          <div key={`evolution-link-${index}`}>
            {evolutionLink.map((evolutionInnerLink) => (
              <img
                key={`evolution-innerLink-${index}`}
                src={evolutionInnerLink.sprites.front_default}
              />
            ))}
          </div>
        ))}
    </div>
  );
};
